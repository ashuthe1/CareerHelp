const userModal = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModal.findOne({ email });
  if (!user) {
    return res.status(401).send({
      success: false,
      message: "Invalid Email",
    });
  }
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(402).send({
      success: false,
      message: "Invalid Password",
    });
  }

  if (isMatch) {
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET
    );
    res
      .cookie("token", token, {
        domain: "https://careerhelper.onrender.com",
        expires: new Date(Date.now() + 86400000), // 1 day
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json({
        success: true,
        message: "Logged in successfully",
        id: user._id,
      });
  }
};


const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModal.findOne({ email });
    if (existingUser) {
      return res.status(409).send({
        success: true,
        message: "Email is already there",
      });
    }

    const salt = bcrypt.genSaltSync(10);

    const hashPassword = bcrypt.hashSync(password, salt);

    const userData = {
      name: name,
      email: email,
      password: hashPassword,
    };

    console.log(userData);
    await userModal.create(userData);
    res.status(200).send({
      success: true,
      message: "User account created successfully",
    });
  } catch (err) {
    res.status(400).send({
      message: "Error in register controller",
      success: false,
      err,
    });
  }
};

module.exports = { loginController, registerController };

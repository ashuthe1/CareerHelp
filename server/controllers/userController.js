const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const logoutController = (req, res) => {
    try {
      res.clearCookie("token", {
        domain: "careerhelper.onrender.com",
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      res.status(200).json("Logged out successfully");
    } catch (err) {
      res.status(500).json(err);
    }
};

const getProfileController = (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, info) => {
      if (err) {
        res.status(401).json("Not authorized");
      }
      res.json(info);
    });
};

module.exports = {
    logoutController,
    getProfileController
}
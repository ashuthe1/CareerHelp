const mongoose = require("mongoose");

const connectDB = async (MONGO_URL) => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(`Error Detected ${error}`);
  }
};

module.exports = connectDB;

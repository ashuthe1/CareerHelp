const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require( "cookie-parser");

const connectDB = require( "./database/connection");

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/careerhelper";

const app = express();
app.use(express.json());
app.use(cookieParser());


connectDB(MONGO_URL);

app.listen(port, () => {
  console.log(`CareerHelper Server is Running on ${port} `);
});

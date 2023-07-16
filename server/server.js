const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require( "cookie-parser");
const connectDB = require( "./database/connection");
const authRoute = require("./routes/authRoute");

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://0.0.0.0:27017/careerhelper";

connectDB(MONGO_URL);

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use(authRoute);

app.listen(PORT, () => {
  console.log(`CareerHelper Server is Running on ${PORT} `);
});

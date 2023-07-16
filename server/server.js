const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require( "cookie-parser");

const connectDB = require( "./database/connection");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const jobRoute = require("./routes/jobRoute");

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://0.0.0.0:27017/careerhelper";

connectDB(MONGO_URL);

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: ["https://careerhelp.vercel.app/", "http://localhost:5173"],
      methods: ["GET", "POST", "PATCH", "DELETE"],
      credentials: true,
    })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(authRoute);
app.use(userRoute);
app.use(jobRoute);


app.listen(PORT, () => {
  console.log(`CareerHelper Server is Running on ${PORT} `);
});

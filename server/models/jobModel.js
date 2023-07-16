const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    workLocation: {
      type: String,
      default: "Bengaluru",
      required: true,
    },
    locationType: {
      type: String,
      default: "Remote",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const jobs = mongoose.model("jobs", jobSchema);
module.exports = jobs;

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
    JobDescription: {
      type : String,
      default : "Job Description",
      required : false
    },
    responsibilities:{
      type : String,
      default : "Responsibilities",
      required : false
    },
    active: {
      type : Boolean,
      default : true
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

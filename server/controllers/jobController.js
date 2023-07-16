const jobModel = require("../models/jobModel.js");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const addJobController = async (req, res) => {
    try {
      const { company, position, workLocation, locationType } = req.body;
  
      if (!company || !position || !workLocation || !locationType) {
        return res.send({
          success: false,
          message: "Please Provide all details",
        });
      }
  
      const { token } = req.cookies;
  
      console.log(token);
  
      if (!token) {
        return res.status(403).send({
          success: false,
          message: "Please login first",
        });
      }
  
      jwt.verify(token, process.env.JWT_SECRET, {}, async (err, info) => {
        if (err) {
          res.status(401).json("Not authorized");
        }
  
        await jobModel.create({
          company,
          position,
          workLocation,
          locationType,
          author: info.id,
        });
  
        res.status(200).json({
          success: true,
          message: "Job added successfully",
        });
      });
    } catch (err) {
      res.status(400).send({
        message: "Error in addJob controller",
        success: false,
        err,
      });
    }
  };

const getJobsController = async (req, res) => {
    try {
      const jobs = await jobModel.find({}).sort({ createdAt: -1 });
  
      res.status(200).json({
        success: true,
        message: "Jobs fetched successfully",
        jobs,
      });
      console.log("Jobs fetched successfully");
    } catch (err) {
      res.status(400).send({
        message: "Error in getJob controller",
        success: false,
        err,
      });
    }
};

const getOneJobController = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await jobModel.findOne({ _id: id });
    if (!job) return res.status(404).json({ error: "Job not found" });

    res.status(200).json({
      success: true,
      message: "Job fetched successfully",
      job,
    });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const updateJobController = async (req, res) => {
  try {
    const { id } = req.params;
    const { company, position, workLocation, locationType } = req.body;

    if (!company || !position || !workLocation || !locationType) {
      return res.send({
        success: false,
        message: "Please Provide all details",
      });
    }

    const job = await jobModel.findOne({ _id: id });

    if (!job) return res.status(404).json({ error: "Job not found" });

    const updatedJob = await jobModel.findByIdAndUpdate(
      { _id: id },
      {
        company: company,
        position: position,
        workLocation: workLocation,
        locationType: locationType,
      }
    );

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      job: updatedJob,
    });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const deleteJobController = async (req, res) => {
    try {
      const { id } = req.params;
  
      const job = await jobModel.findById({ _id: id });
  
      if (!job) {
        res.status(404).json("Job Not Found");
      }
  
      await jobModel.findByIdAndDelete({ _id: id });
  
      res.status(200).json("Job Deleted Successfully");
    } catch (err) {
      console.log(`Error Found ${err}`);
    }
};

module.exports = {
    addJobController,
    getJobsController,
    getOneJobController,
    updateJobController,
    deleteJobController
}

const express = require("express");
const router = express.Router();
const {
    addJobController, 
    getOneJobController, 
    getJobsController, 
    updateJobController, 
    deleteJobController, 
} = require("../controllers/jobController");

router.post("/addJobs", addJobController);

router.get("/getJobs", getJobsController);

router.patch("/updateJob/:id", updateJobController);

router.delete("/deleteJob/:id", deleteJobController);

router.get("/job/:id", getOneJobController);

module.exports = router;

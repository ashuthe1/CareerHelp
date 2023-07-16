const express = require("express");
const router = express.Router();
const {logoutController, getProfileController} = require("../controllers/userController");

router.post("/logout", logoutController);
router.get("/profile", getProfileController);

module.exports = router;

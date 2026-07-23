const express = require("express");

const router = express.Router();


const {

dashboard,
statistics,
websiteSettings

} = require("../controllers/adminController");


router.get("/dashboard", dashboard);

router.get("/statistics", statistics);

router.get("/settings", websiteSettings);


module.exports = router;
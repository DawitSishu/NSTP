const express = require("express");
const router = express.Router();
const { CreateLive } = require("../Controllers/LiveController");
const userAuthChecker = require("../Middlewares/UserAuth");

//create
router.post("/create", CreateLive);

module.exports = router;
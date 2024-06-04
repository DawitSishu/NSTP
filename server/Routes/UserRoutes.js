const express = require("express");
const router = express.Router();
const { CreateUser } = require("../Controllers/UserController");
const userAuthChecker = require("../Middlewares/UserAuth");

//create
router.post("/create", userAuthChecker, CreateUser);

module.exports = router;

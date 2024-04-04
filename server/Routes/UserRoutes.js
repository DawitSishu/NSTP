const express = require("express");
const router = express.Router();
const { signUp } = require("../Controllers/UserController");

//sign up
router.post("/signup", signUp);

module.exports = router;

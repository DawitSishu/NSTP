const express = require("express");
const router = express.Router();
const { signUp, logIn } = require("../Controllers/UserController");

//sign up
router.post("/signup", signUp);

// log in
router.post("/login", logIn);

module.exports = router;

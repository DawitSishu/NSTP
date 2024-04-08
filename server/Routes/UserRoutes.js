const express = require("express");
const router = express.Router();
const {
  signUp,
  logIn,
  profile,
  updateProfile,
} = require("../Controllers/UserController");
const userAuthChecker = require("../Middlewares/UserAuth");

//sign up
router.post("/signup", signUp);

// log in
router.post("/login", logIn);

//get profile info
router.get("/profile", userAuthChecker, profile);

//update profile
router.put("/profile", userAuthChecker, updateProfile);

module.exports = router;

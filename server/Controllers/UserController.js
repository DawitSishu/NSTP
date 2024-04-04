const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");

//@desc register a user
//@route POST /api/user/signup
//@access public
const signUp = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    throw error;
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const error = new Error("User already exists");
    error.statusCode = 400;
    throw error;
  } else {
    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  }
});

module.exports = { signUp };

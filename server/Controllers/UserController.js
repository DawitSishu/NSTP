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

//@desc logs in a user
//@route POST /api/user/login
//@access public
const logIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    throw error;
  }
  const user = await User.findOne({ email });

  if (!user) {
    const err = new Error("Incorrect Email or Password");
    err.statusCode = 401;
    throw err;
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    const err = new Error("Incorrect Email or Password");
    err.statusCode = 401;
    throw err;
  }
  const { password: omitPassword, ...userData } = user.toObject();

  const token = jwt.sign(userData, process.env.SECRET_KEY, { expiresIn: "1d" });
  console.log(token);
  res.json({
    token,
  });
});

module.exports = { signUp, logIn };

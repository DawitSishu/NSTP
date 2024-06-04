const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");

//@desc register a user
//@route POST /api/user/create
//@access private
const CreateUser = asyncHandler(async (req, res) => {
  const { userID, dob, phone, username, email, profile } = req.body;

  if (!email || !userID || !dob || !username) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    throw error;
  }

  const existingUser = await User.findOne({ userID });

  if (existingUser) {
    const error = new Error("User already exists");
    error.statusCode = 400;
    throw error;
  } else {

    const newUser = new User({
      dob,
      profilePicture: profile,
      userID,
      username,
      email,
      phone,
    });

    const savedUser = await newUser.save();

    res.status(201).json({ success: true, data: savedUser });
  }
});

module.exports = { CreateUser };

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  phone: { type: String },
  balance: { type: Number, default: 0 },
  type: { type: String, enum: ['creator', 'audience'], required: true, default: 'audience'},
  followers: { type: Number, default: 0 },
  pic: { type: String },
  username: { type: String },
  dob: { type: Date },
  bio: { type: String },
  socialMedia: {
    twitter: { type: String },
    instagram: { type: String },
    tiktok: { type: String }
  },
  subscriptionPlan: { type: String, default: null },
  isVerified: { type: Boolean, default: false },
  paymentInfo: {
    Account: { type: String },
    Bank: { type: String }
  },
  completed: {type : Boolean, default: false}

});

module.exports = mongoose.model("User", userSchema);

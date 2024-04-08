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
  subscriptionExpiry: { type: Date },
  isVerified: { type: Boolean, default: false },
  paymentInfo: {
    cardNumber: { type: String },
    expirationDate: { type: Date }
  },

});

module.exports = mongoose.model("User", userSchema);

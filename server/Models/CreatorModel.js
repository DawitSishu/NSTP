const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creatorSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  bio: {
    type: String,
  },
  followers: {
    type: Number,
    default: 0,
  },
  following: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  socialMedia: {
    twitter: { type: String },
    instagram: { type: String },
    tiktok: { type: String },
  },
  subscriptionPlan: { type: String, default: null },
  isVerified: { type: Boolean, default: false },
  paymentInfo: {
    Account: { type: String },
    Bank: { type: String },
  },
});

const Creator = mongoose.model("Creator", creatorSchema);

module.exports = Creator;

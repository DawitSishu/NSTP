const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  phone: { type: String },
  balance: { type: Number, default: 0 },
  type: { type: String },
});

module.exports = mongoose.model("User", userSchema);

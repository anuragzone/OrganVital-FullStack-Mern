// models/Center.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const centerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  centerCode: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: String,
  address: String,
  city: String,
  state: String,
  pinCode: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


centerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
centerSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("Center", centerSchema);

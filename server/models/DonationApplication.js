
const mongoose = require("mongoose");

const donationApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  centerId: { type: mongoose.Schema.Types.ObjectId, ref: "Center", required: true },
  donationType: { type: String, enum: ["blood", "organ"], required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  notes: { type: String },
});

module.exports = mongoose.model("DonationApplication", donationApplicationSchema);

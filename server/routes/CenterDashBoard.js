
const express = require("express");
const verifyCenter = require("../middlewares/AuthCenter");
const DonationApplication = require("../models/DonationApplication");
const mongoose = require("mongoose"); 
const router = express.Router();

router.get("/center/summary", verifyCenter, async (req, res) => {
  try {
    const centerId = new mongoose.Types.ObjectId(req.center.id); 

    const stats = await DonationApplication.aggregate([
      { $match: { centerId: centerId } },
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    const summary = {
      pending: 0,
      approved: 0,
      rejected: 0,
    };

    stats.forEach((s) => {
      summary[s._id] = s.count;
    });

    const recent = await DonationApplication.find({ centerId })
      .populate("userId", "firstname email")
      .sort({ date: -1 })
      .limit(5);

    res.json({ summary, recent });
  } catch (error) {
    console.error("Summary error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

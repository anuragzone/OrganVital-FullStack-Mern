const express = require("express");
const router = express.Router();
const DonationApplication = require("../models/DonationApplication");
const verifyCenter = require("../middlewares/AuthCenter");

router.get("/center/applications", verifyCenter, async (req, res) => {
  try {
    const applications = await DonationApplication.find({ centerId: req.center.id })
      .populate("userId", "firstname email")
      .sort({ date: -1 });

    res.json(applications);
  } catch (err) {
    console.error("Fetch error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});


router.put("/center/applications/:id/approved", verifyCenter, async (req, res) => {
  try {
    const updated = await DonationApplication.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );
    res.json({ message: "Application approved", updated });
  } catch (err) {
    console.error("Approve error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/center/applications/:id/rejected", verifyCenter, async (req, res) => {
  try {
    const updated = await DonationApplication.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );
    res.json({ message: "Application rejected", updated });
  } catch (err) {
    console.error("Reject error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

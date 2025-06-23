const express = require("express");
const router = express.Router();
const DonationApplication = require("../models/DonationApplication");
const verifyUser = require("../middlewares/auth");

router.post("/appointments", verifyUser, async (req, res) => {
  try {
    const {
      centerId,
      donationType,
      date,
      notes
    } = req.body;

    if (!centerId || !donationType || !date) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const newApp = new DonationApplication({
      userId: req.user.id, 
      centerId,
      donationType,
      date,
      notes,
    });

    const saved = await newApp.save();
    res.status(201).json({ message: "Application submitted", application: saved });

  } catch (error) {
    console.error("Appointment error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

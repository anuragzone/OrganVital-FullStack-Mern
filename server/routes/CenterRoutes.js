const express = require("express");
const Center = require("../models/Center");
const jwt = require("jsonwebtoken");
const router = express.Router();
// routes/CenterRoutes.js


const verifyUser = require("../middlewares/AuthCenter");



// Register Center
router.post("/register", async (req, res) => {
  try {
    const { name, centerCode, email, password, contact, address, city, state, pinCode } = req.body;

    const centerExists = await Center.findOne({ email });
    if (centerExists) return res.status(400).json({ message: "Center already exists" });

    const center = await Center.create({
      name,
      centerCode,
      email,
      password,
      contact,
      address,
      city,
      state,
      pinCode,
    });

    res.status(201).json({ message: "Center registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const center = await Center.findOne({ email });

    if (!center || !(await center.comparePassword(password)))
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: center._id, role: "center" }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get("/center-profile", verifyUser, async (req, res) => {
  try {
    console.log("User ID from token:", req.center.id); 
    const center = await Center.findById(req.center.id).select("-password");
    if (!center) {
      return res.status(404).json({ message: "Center not found" });
    }
    res.json(center);
  } catch (error) {
    console.error("Error fetching center profile:", error); 
    res.status(500).json({ message: "Server error" });
  }
});
router.put("/update-profile", verifyUser, async (req, res) => {
  try {
    const updated = await Center.findByIdAndUpdate(req.user.id, req.body, {
      new: true
    }).select("-password");

    res.json(updated);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/center-data", async (req, res) => {
  try {
    const { state } = req.query;

    const query = state ? { state } : {};
    const centers = await Center.find(query).select("name city state _id");

    res.json(centers);
  } catch (err) {
    console.error("Error fetching centers:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;

//server/models/user.js

const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    BloodGroup: String,
    EmergencyContact: String,
    firstname: String,
    Lastname: String,
    age: String,
    Diabetes: String,
    Fathersname: String,
    Mothersname: String,
    profileImage: { type: String, default: null },


});

const User = mongoose.model("User",userSchema);

module.exports = User;

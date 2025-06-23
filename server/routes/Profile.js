const express = require('express')
const router = express.Router();
const { z } = require('zod')
const auth = require('../middlewares/auth')
const User = require('../models/user');
const multer = require('multer');
const path = require('path');
const profileSchema = z.object({
    firstname: z.string().min(1,"first name is required"),
    Lastname: z.string().min(1,"Last name is required"),
    age: z.string().min(1,"Age is required"),
    BloodGroup: z.string().min(1,"Blood Group is required"),
    EmergencyContact: z.string().min(1,"Emergency contact is required"),
    Fathersname: z.string().min(1,"Father's name is required"),
    Mothersname: z.string().min(1,"Mother's name is required"),
    Address: z.string().min(1,"Address is required"),
    Diabetes: z.string().min(1,"Diabetes status is required")
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
  const upload = multer({ storage });
  
router.put('/updated-data',auth,upload.single('profilePhoto'),async(req,res)=>{
    try{
        const updatedData = profileSchema.safeParse(req.body);
        if (!updatedData.success) {
            return res.status(400).json({ errors: updatedData.error.errors });
          }
          if (req.file) {
            updatedData.data.profileImage = req.file.filename;
          }
        
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,{
                $set: updatedData.data
            },
            {new: true}
        );


        res.status(200).json({message: "User data updated successfully", user: updatedUser})


    }catch(err){
        console.error("Error updating profile:", err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.get('/user-profile',auth, async(req,res)=>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({user})
    }catch(err){
            console.error("some error occured: ", err);
            return res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router



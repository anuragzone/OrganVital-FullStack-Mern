

const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const Users = require("../models/user");

const auth = require('../middlewares/auth')
const jwt = require('jsonwebtoken')


const secret_key = process.env.JWT_SECRET_KEY;


router.post("/register",async(req,res)=>{
        const {name ,email , password , confirmpassword} = req.body;

        if(!name || !email || !password || !confirmpassword){
            return res.status(403).json({message: "All fields are required"})
        }
        
        if(password != confirmpassword){
            return res.status(401).json({message: "passwords do not match"})
        }
        const userExists =await Users.findOne({email});
        if(userExists){
            return res.status(409).json({message: "User already exists"});
        }
        const hashedPassword =await bcrypt.hash(password, 10);

        const newUser = await Users.create({name,email,password: hashedPassword});
        console.log("Registered users",newUser);

        return res.status(201).json({message: "Successfully registered"})
})
router.post("/login",async(req,res)=>{
    try{

        const {email, password} = req.body;
        
        if(!email || !password){
            return res.status(401).json({message: "Every field is required"})
            
        }
        
        
        const user =await Users.findOne({email})
        if(!user){
            return res.status(401).json({message: "User not exists"});
            
        }
        const passwordMatched =await bcrypt.compare(password, user.password)
        if(!passwordMatched){
            return res.status(401).json({message: "password is incorrect"})
        }
        
        const token = jwt.sign({ id: user._id, email: user.email }, secret_key, { expiresIn: "2h" });
        return res.status(200).json({message: "Login successfull",token})
    }
    catch(e){
        console.error("Error:" , e);
        return res.status(500).json({message: "Error occured"})
    }
        





})

router.get('/protected-data', auth, async(req,res)=>{
    try{
        const userData = await Users.findById(req.user.id).select("-password");
        return res.status(200).json({message: "Protected data accessed"});
    }catch(e){
        console.error("error: ",e)
        return res.status(500).json({message: "some error occured in accessing protected data", data: userData});
    }
})
module.exports = router;
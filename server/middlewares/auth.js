
const jwt = require('jsonwebtoken')
const secret_key = process.env.JWT_SECRET_KEY;
const verifyUser = (req,res,next) =>{
   
    const authHeader = req.header("authorization");

 
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No or invalid authorization header" });
    }

    const token = authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({message: "No token provided"})
    }

    try{

        const decoded=jwt.verify(token,secret_key)
        req.user = decoded;
        next();
    }
    catch(e){
        console.error("error",e)
        return res.status(401).json({message: "Invalid!"})
    }
}

module.exports = verifyUser;

const dotenv = require("dotenv"); 
dotenv.config();
const express = require("express")
const loginRegister = require('./routes/LoginRegister')
const mongoose = require("mongoose")
const cors = require("cors");
const Profile = require("./routes/Profile")
const centerRoutes = require("./routes/CenterRoutes");
const path = require('path');
const centerDashboard = require("./routes/CenterDashBoard");
const ApplicationRoutes = require("./routes/ApplicationRoutes")
const appointmentRoutes = require("./routes/AppointmentRoutes");





const app = express();

const url = process.env.MONGO_URI;

const port = process.env.PORT || 5000;

mongoose.connect(url)
.then(()=>console.log("connected"))
.catch((e)=> console.error("mongoose error:",e))

app.use(cors());

app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).send( "Your express server is running...")
})
app.use("/api",loginRegister);

app.use("/api",Profile);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/api/center", centerRoutes);
app.use("/api", centerDashboard);
app.use("/api",ApplicationRoutes);
app.use("/api", appointmentRoutes);

app.listen(port,()=>console.log(`listening on port ${port}`));




import React, { useEffect, useState } from "react";
import { z } from "zod";
import axios from 'axios';
import defaultProfilePic from '../../assets/smiling-family.jpg';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Profile = () => {
  const profileSchema = z.object({
    firstname: z.string().min(1, "first name is required"),
    Lastname: z.string().min(1, "Last name is required"),
    age: z.string().min(1, "Age is required"),
    BloodGroup: z.string().min(1, "Blood Group is required"),
    EmergencyContact: z.string().min(1, "Emergency contact is required"),
    Fathersname: z.string().min(1,"Father's name is required"),
    Mothersname: z.string().min(1,"Mother's name is required"),
    Address: z.string().min(1,"Address is required"),
    
    Diabetes: z.string().min(1,"Diabetes status is required")

  });
  const [formData, setFormData] = useState({
    firstname: "",
    Lastname: "",
    age: "",
    BloodGroup: " ",
    EmergencyContact: " ",
    email: "",
    Fathersname: "",
    Mothersname: "",
    Diabetes: "",
    Address: "",

  });

  const [profilePhoto, setProfilePhoto] = useState(null);


  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = profileSchema.safeParse(formData);
    if (!result.success) {
      alert(result.error.errors[0].message);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      if (profilePhoto) {
        data.append("profilePhoto", profilePhoto);
      }
      
      const response = await axios.put(
        `${BASE_URL}/api/updated-data`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      alert("Failed to update profile. Check console for details.");
    }
  };

 
    useEffect(()=>{
        const fetchData = async()=>{
          try{

            const token = localStorage.getItem('token');
            const userProfileData =await axios.get(`${BASE_URL}/api/user-profile`,{
              headers : {
                Authorization : `Bearer ${token}`,
            },
          });
          console.log(userProfileData.data.user);
          setFormData({
            ...userProfileData.data.user,
            EmergencyContact: String(userProfileData.data.user.EmergencyContact || ""),
            age: String(userProfileData.data.user.age || ""),
          });
    

          }catch(err){
            console.error('Failed to fetch profile', err);
          }

          
        }
        fetchData();
    },[])
    
  return (
    <div>
      
      <h1 className="text-center text-3xl font-bold mb-6">Edit Profile</h1>

<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full mx-auto p-4 shadow-md">
<div className="relative w-48 h-48 mx-auto mb-4">
      <img
        src={profilePhoto ? URL.createObjectURL(profilePhoto) : defaultProfilePic}
        alt="Profile Preview"
        className="w-full h-full rounded-full object-cover border border-gray-300"
      />
      
      {/* Edit button overlay */}
      <label
        htmlFor="profilePhotoInput"
        className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-3 py-1 rounded cursor-pointer text-sm hover:bg-opacity-80"
      >
        Edit
      </label>
      
      {/* Hidden file input */}
      <input
        id="profilePhotoInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => setProfilePhoto(e.target.files[0])}
      />
    </div>
  {/* Name Section */}
  <div className="flex flex-col sm:flex-row gap-4">
    <div className="flex flex-col w-full sm:w-1/2">
      <label className="mb-1 text-sm font-medium">First Name</label>
      <input
        className="border border-gray-300 rounded-md px-4 py-2"
        type="text"
        name="firstname"
        value={formData.firstname}
        onChange={handleChange}
        required
      />
    </div>
  

    <div className="flex flex-col w-full sm:w-1/2">
      <label className="mb-1 text-sm font-medium">Last Name</label>
      <input
        className="border border-gray-300 rounded-md px-4 py-2"
        type="text"
        name="Lastname"
        value={formData.Lastname}
        onChange={handleChange}
        required
      />
    </div>
    </div>
  <div className="flex flex-col sm:flex-row gap-4">
    <div className="flex flex-col w-full sm:w-1/2">
      <label className="mb-1 text-sm font-medium">Father's Name (as per id card):</label>
      <input
        className="border border-gray-300 rounded-md px-4 py-2"
        type="text"
        name="Fathersname"
        value={formData.Fathersname}
        onChange={handleChange}
        required
      />
    </div>
  

    <div className="flex flex-col w-full sm:w-1/2">
      <label className="mb-1 text-sm font-medium">Mother's Name (as per id card):</label>
      <input
        className="border border-gray-300 rounded-md px-4 py-2"
        type="text"
        name="Mothersname"
        value={formData.Mothersname}
        onChange={handleChange}
        required
      />
    </div>
    </div>


  <div className="flex flex-col sm:flex-row gap-4">
  <div className="flex flex-col w-full sm:w-1/2">
    <label className="mb-1 text-sm font-medium">Blood Group</label>
    <input
      className="border border-gray-300 rounded-md px-4 py-2"
      type="text"
      name="BloodGroup"
      value={formData.BloodGroup}
      onChange={handleChange}
    />
  </div>

  <div className="flex flex-col w-full sm:w-1/2">
    <label className="mb-1 text-sm font-medium">Emergency Contact</label>
    <input
      className="border border-gray-300 rounded-md px-4 py-2"
      type="text"
      name="EmergencyContact"
      value={formData.EmergencyContact}
      onChange={handleChange}
    />
  </div>
  </div>


  <div className="flex flex-col sm:flex-row gap-4">
  <div className="flex flex-col w-full sm:w-1/2">
    <label htmlFor="dropdown" className="mb-1 text-sm font-medium">Do you have Diabetes:</label>
    <select id="dropdown"
            name = "Diabetes"
            onChange={handleChange}
            value={formData.Diabetes}
            className="border border-gray-300 rounded-md px-4 py-2 dark:bg-bggray dark:text-white "
            
    >
      <option value="">select an option</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>

  </div>
  
  <div className="flex flex-col w-full sm:w-1/2">
    <label className="mb-1 text-sm font-medium">Emergency Contact</label>
    <input
      className="border border-gray-300 rounded-md px-4 py-2"
      type="text"
      name="EmergencyContact"
      value={formData.EmergencyContact}
      onChange={handleChange}
    />
  </div>
  </div>

  <div className="flex flex-col sm:flex-row gap-4">
  <div className="flex flex-col w-full sm:w-1/2">
    <label className="mb-1 text-sm font-medium">Age</label>
    <input
      className="border border-gray-300 rounded-md px-4 py-2"
      type="text"
      name="age"
      value={formData.age}
      onChange={handleChange}
    />
  </div>

  <div className="flex flex-col w-full sm:w-1/2">
    <label className="mb-1 text-sm font-medium">Email</label>
    <input
      className="border border-gray-300 rounded-md px-4 py-2"
      type="text"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
  </div>
  </div>
  <div className="flex flex-col sm:flex-row gap-4">
  <div className="flex flex-col w-full sm:w-1/2">
    <label className="mb-1 text-sm font-medium">Address</label>
    <textarea
      className="border border-gray-300 rounded-md px-4 py-2"
      type="text"
      name="Address"
      value={formData.Address}
      onChange={handleChange}
    />
  </div>

  <div className="flex flex-col w-full sm:w-1/2">
    <label className="mb-1 text-sm font-medium">Email</label>
    <input
      className="border border-gray-300 rounded-md px-4 py-2"
      type="text"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
  </div>
  </div>





  {/* Button */}
  <button
    type="submit"
    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 mt-2"
  >
    Save Changes
  </button>

</form>

    </div>
  );
};

export default Profile;

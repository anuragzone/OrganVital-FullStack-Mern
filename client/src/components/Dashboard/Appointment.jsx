import React, { useEffect, useState } from "react";
import { format } from "date-fns";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Input = (props) => (
  <input
    {...props}
    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 border-gray-300 dark:border-gray-600"
  />
);

const Label = ({ children }) => (
  <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
    {children}
  </label>
);

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition w-full sm:w-auto"
  >
    {children}
  </button>
);

const Textarea = (props) => (
  <textarea
    {...props}
    className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 border-gray-300 dark:border-gray-600"
  />
);

const Calendar = ({ selected, onSelect }) => (
  <input
    type="date"
    value={format(selected, "yyyy-MM-dd")}
    onChange={(e) => onSelect(new Date(e.target.value))}
    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600"
  />
);

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableCenters, setAvailableCenters] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    donationType: "blood",
    state: "",
    centerId: "", 
    notes: "",
    time: "",
  });

  useEffect(() => {
    const fetchCenters = async () => {
      if (formData.state) {
        try {
          const res = await fetch(`${BASE_URL}/api/center/center-data?state=${formData.state}`);
          const data = await res.json();
          setAvailableCenters(data);
        } catch (err) {
          console.error("Error fetching centers:", err.message);
        }
      } else {
        setAvailableCenters([]);
      }
    };
    fetchCenters();
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = {
      ...formData,
      date: selectedDate,
    };

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(appointmentData),
      });

      if (res.ok) {
        alert("✅ Appointment request sent to center!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          donationType: "blood",
          state: "",
          centerId: "",
          notes: "",
          time: "",
        });
        setSelectedDate(new Date());
      } else {
        alert("❌ Failed to book appointment.");
      }
    } catch (err) {
      console.error("Submit error", err);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10 bg-white dark:bg-gray-900 shadow-xl rounded-2xl mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-600 dark:text-red-400">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label>Name</Label>
          <Input name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Email</Label>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <Label>Phone</Label>
            <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>

        <div>
          <Label>Type of Donation</Label>
          <select
            name="donationType"
            value={formData.donationType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600"
          >
            <option value="blood">🩸 Blood Donation</option>
            <option value="organ">💗 Organ Donation</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>State</Label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600"
            >
              <option value="">Select State</option>
              {[
                "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
                "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
                "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
                "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
                "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh",
                "Lakshadweep", "Puducherry"
              ].map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div>
            <Label>Preferred Donation Center</Label>
            <select
              name="centerId"
              value={formData.centerId}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600"
              disabled={!formData.state}
            >
              <option value="">
                {formData.state ? "Select a Center" : "Select a State first"}
              </option>
              {availableCenters.map((center) => (
                <option key={center._id} value={center._id}>
                  {center.name} ({center.city})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Date</Label>
            <Calendar selected={selectedDate} onSelect={setSelectedDate} />
          </div>
          <div>
            <Label>Preferred Time</Label>
            <Input type="time" name="time" value={formData.time} onChange={handleChange} required />
          </div>
        </div>

        <div>
          <Label>Additional Notes</Label>
          <Textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Any special instruction or comment..." />
        </div>

        <div className="flex justify-center">
          <Button type="submit">Confirm Appointment</Button>
        </div>
      </form>
      
    </div>
  );
};

export default Appointment;

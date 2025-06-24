import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CenterRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    centerCode: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/center/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      toast.success("Center registered successfully!");
      navigate("/center/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-teal-100 to-pink-100 dark:from-gray-800 dark:to-gray-900">
      <ToastContainer position="top-center" autoClose={3000} />

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-red-600 dark:text-red-400">Center Registration</h2>

        {Object.entries(formData).map(([field, value]) => (
          <input
            key={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            placeholder={field}
            value={value}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white capitalize"
          />
        ))}

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Register
        </button>

        <div className="text-sm text-center mt-2">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/center/login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Login here
          </span>
        </div>
      </form>
    </div>
  );
};

export default CenterRegister;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CenterLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${BASE_URL}/api/center/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("centerToken", data.token);
      toast.success("Login successful!");
      navigate("/center/dashboard"); // ✅ Correct route here
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  const handleClose = () => {
    navigate("/"); // Redirect to homepage or wherever you want
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-rose-100 to-amber-100 dark:from-gray-800 dark:to-gray-900 relative">
      <ToastContainer position="top-center" autoClose={3000} />

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md space-y-4 relative"
      >
       
        <button
          onClick={handleClose}
          type="button"
          className="absolute hover:cursor-pointer top-3 right-3 text-2xl text-gray-500 hover:text-red-500"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-red-600 dark:text-red-400">
          Center Login
        </h2>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-300"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span
            className="text-blue-600 hover:cursor-pointer hover:underline cursor-pointer"
            onClick={() => toast.info("Forgot password functionality coming soon!")}
          >
            Forgot password?
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:cursor-pointer text-white py-2 rounded-md hover:bg-red-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default CenterLogin;

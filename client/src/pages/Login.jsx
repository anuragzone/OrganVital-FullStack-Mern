import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = ({ onClose }) => {
  const [wantsToRegister, setWantsToRegister] = useState(false);
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
    if (onClose) onClose();
  };
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = wantsToRegister
      ? `${BASE_URL}/api/user/register`
      : `${BASE_URL}/api/user/login`;
    const payload = wantsToRegister
      ? { name, email, password, confirmpassword }
      : { email, password };

    if (wantsToRegister && password !== confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(url, payload);
      toast(response.data.message);
      if (!wantsToRegister && response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login Successful!!");
        navigate('/dashboard');
        onClose();
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          toast.error("User already exists. Please login.");
        } else if (error.response.status === 401) {
          toast.error("Invalid credentials.");
        } else {
          toast.error(error.response.data.message || "Something went wrong.");
        }
      } else {
        toast.error("Network error. Please try again.");
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/40">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="m-3 bg-white dark:bg-card p-6 rounded-xl shadow-2xl w-96 relative">
        <button
          onClick={handleClose}
          className="absolute hover:cursor-pointer top-3 right-3 text-2xl text-gray-500 hover:text-red-500"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">
          {wantsToRegister ? 'Register' : 'Login'}
        </h2>

        <form onSubmit={handleSubmit}>
          {wantsToRegister && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full mb-4 px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
              required
            />
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
            required
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 dark:text-gray-300"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {wantsToRegister && (
            <div className="relative mb-4">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 dark:text-gray-300"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            {wantsToRegister ? 'Register' : 'Login'}
          </button>
        </form>

        {!wantsToRegister && (
          <div className="mt-3 text-right">
            <button
              onClick={() => toast.info("Forgot password feature coming soon!")}
              className="text-sm hover:cursor-pointer text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        )}

        <div className="flex justify-between items-center mt-4 text-sm">
          <p>
            {wantsToRegister
              ? 'Already have an account?'
              : "Don't have an account?"}
          </p>
          <button
            className="hover:text-blue-600 text-blue-500 font-medium"
            onClick={() => setWantsToRegister(!wantsToRegister)}
          >
            {wantsToRegister ? 'Login' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

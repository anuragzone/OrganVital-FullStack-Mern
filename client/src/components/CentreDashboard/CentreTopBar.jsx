    // CenterTopBar.jsx
import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CenterTopBar = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("centerToken");
    navigate("/center/login");
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700">
      <h1 className="text-xl font-bold text-red-600 dark:text-red-400">OrganVital Center Dashboard</h1>

      <div className="flex items-center gap-4">
        <button onClick={toggleDarkMode} className="text-2xl">
          {darkMode ? <BsSun className="text-yellow-400" /> : <MdDarkMode  />}
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default CenterTopBar;

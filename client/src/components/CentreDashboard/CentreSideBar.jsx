
import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaCheckCircle, FaUser, FaHome } from "react-icons/fa";

const CenterSidebar = () => {
  return (
    <div className="w-64 bg-rose-100 dark:bg-gray-800 text-gray-900 dark:text-white h-screen px-4 py-6 shadow-lg">
      <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-6 text-center">Center Menu</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/center/dashboard" className="flex items-center gap-3 hover:text-red-500 transition">
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link to="/center/dashboard/approvals" className="flex items-center gap-3 hover:text-red-500 transition">
          <FaCheckCircle /> Approvals
        </Link>
        <Link to="/center/dashboard/profile" className="flex items-center gap-3 hover:text-red-500 transition">
          <FaUser /> Profile
        </Link>
        <Link to="/" className="flex items-center gap-3 hover:text-red-500 transition">
          <FaHome /> Back to Home
        </Link>
      </nav>
    </div>
  );
};

export default CenterSidebar;

//dashboardlinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHistory, FaCalendarAlt, FaHeadset, FaHome, FaBell, FaAward, FaLocationArrow, FaHeart } from 'react-icons/fa';

const DashboardLinks = () => {
  return (
    <div className="m-4 w-full md:w-64 bg-amber-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl p-6 shadow-lg flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-2 text-center text-red-600 dark:text-red-400">Dashboard</h2>

      <Link
        to="/dashboard"
        className="flex items-center gap-3 hover:text-red-500 transition"
      >
        <FaHome className="text-lg" />
        Home
      </Link>
      <Link
        to="/dashboard/profile"
        className="flex items-center gap-3 hover:text-red-500 transition"
      >
        <FaUser className="text-lg" />
        Profile
      </Link>
      <Link
        to="/dashboard/eligibilitychecker"
        className="flex items-center gap-3 hover:text-red-500 transition"
      >
        <FaHeart className="text-lg" />
        Eligibility Checker
      </Link>
      <Link
        to="/dashboard/savedcenter"
        className="flex items-center gap-3 hover:text-red-500 transition"
      >
        <FaLocationArrow className="text-lg" />
        Saved Center
      </Link>

      <Link
        to="/dashboard/mycertificates"
        className="flex items-center gap-3 hover:text-red-500 transition"
      >
        <FaAward className="text-lg" />
        My Certificates
      </Link>
      <Link
        to="/dashboard/notifications"
        className="flex items-center gap-3 hover:text-red-500 transition"
      >
        <FaBell className="text-lg" />
        Notifications
      </Link>
      <Link
        to="/dashboard/donationhistory"
        className="flex items-center gap-3 hover:text-red-500 transition"
      >
        <FaHistory className="text-lg" />
        Donation History
      </Link>

      <Link
        to="/dashboard/appointment"
        className="flex items-center gap-3 hover:text-red-500 transition"
      >
        <FaCalendarAlt className="text-lg" />
        Appointment
      </Link>

      <Link
        to="/dashboard/help"
        className="flex items-center gap-3 hover:text-red-500 transition"
      >
        <FaHeadset className="text-lg" />
        Help & Support
      </Link>

      
    </div>
  );
};

export default DashboardLinks;


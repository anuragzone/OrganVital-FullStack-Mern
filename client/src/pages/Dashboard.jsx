//dashboard.jsx

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { FaUser, FaCalendarCheck, FaHeartbeat } from 'react-icons/fa';

const donationStats = [
  { month: 'Jan', donations: 2 },
  { month: 'Feb', donations: 1 },
  { month: 'Mar', donations: 3 },
  { month: 'Apr', donations: 2 },
  { month: 'May', donations: 4 },
  { month: 'June', donations: 1 },
  { month: 'July', donations: 0 },
  { month: 'August', donations: 0 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-rose-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
   

      {/* Dashboard Content */}
      <main className="flex-1 p-6 text-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400">Welcome Back!</h1>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaUser className="text-3xl text-red-500 mb-2" />
            <h3 className="text-xl font-semibold">Your Profile</h3>
            <p className="text-gray-600 dark:text-gray-300">View and update your personal details.</p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaCalendarCheck className="text-3xl text-red-500 mb-2" />
            <h3 className="text-xl font-semibold">Upcoming Appointment</h3>
            <p className="text-gray-600 dark:text-gray-300">You have a blood donation on June 28.</p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaHeartbeat className="text-3xl text-red-500 mb-2" />
            <h3 className="text-xl font-semibold">Total Donations</h3>
            <p className="text-gray-600 dark:text-gray-300">You've donated 12 times. Amazing!</p>
          </div>
        </div>


        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Donation Trend (Last 5 Months)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={donationStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="donations" fill="#ef4444" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

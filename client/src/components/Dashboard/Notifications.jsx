import React from "react";
import { FaBell, FaHeartbeat, FaCalendarCheck, FaNewspaper } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    type: "reminder",
    title: "Upcoming Appointment",
    message: "You have a blood donation scheduled for June 28 at 10:00 AM.",
    icon: <FaCalendarCheck className="text-blue-500 text-lg" />,
    date: "June 25, 2025",
  },
  {
    id: 2,
    type: "alert",
    title: "Eligibility Alert",
    message: "You are eligible for your next blood donation from July 10, 2025.",
    icon: <FaHeartbeat className="text-red-500 text-lg" />,
    date: "June 20, 2025",
  },
  {
    id: 3,
    type: "news",
    title: "New Organ Center Opened",
    message: "A new organ donation center has been opened in your area.",
    icon: <FaNewspaper className="text-green-500 text-lg" />,
    date: "June 18, 2025",
  },
];

const Notifications = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 text-center mb-6">
        <FaBell className="inline-block mr-2" />
        Notifications
      </h1>

      <div className="space-y-4">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="flex items-start gap-4 bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 transition hover:shadow-lg"
          >
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
              {note.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{note.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{note.message}</p>
              <span className="text-xs text-gray-400 dark:text-gray-500">{note.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;

import React, { useEffect, useState } from "react";

const CentreDashboard = () => {
  const [summary, setSummary] = useState({ pending: 0, approved: 0, rejected: 0 });
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("centerToken");

    fetch("http://localhost:5000/api/center/summary", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSummary(data.summary || {});
        setRecent(data.recent || []);
      })
      .catch((err) => console.error("Dashboard error:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Center Dashboard</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <Card label="Pending" value={summary.pending} color="yellow" />
        <Card label="Approved" value={summary.approved} color="green" />
        <Card label="Rejected" value={summary.rejected} color="red" />
      </div>

    
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Recent Applications</h2>
        {recent.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No applications yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                <tr>
                  <th className="p-3">User</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                {recent.map((app) => (
                  <tr key={app._id} className="border-t dark:border-gray-700">
                    <td className="p-3">{app.userId?.firstname || "N/A"}</td>
                    <td className="p-3">{app.userId?.email || "N/A"}</td>
                    <td className="p-3 capitalize">{app.donationType}</td>
                    <td className="p-3">{new Date(app.date).toLocaleDateString()}</td>
                    <td className="p-3 capitalize">{app.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

const Card = ({ label, value, color }) => {
  const colors = {
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };
  return (
    <div className={`rounded-lg shadow p-6 text-white ${colors[color]}`}>
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default CentreDashboard;

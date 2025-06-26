import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ITEMS_PER_PAGE = 5;

const CentreApprovals = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const centerToken = localStorage.getItem("centerToken");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/center/applications`, {
          headers: {
            Authorization: `Bearer ${centerToken}`,
          },
        });
        const data = await res.json();
        setApplications(data);
      } catch (err) {
        console.error("Error loading applications", err);
        toast.error("Failed to fetch applications");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [centerToken]);

  const handleStatusChange = async (id, status) => {
    try {
      const res = await fetch(
        `${BASE_URL}/api/center/applications/${id}/${status}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${centerToken}`,
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(`Application ${status} successfully`);
        setApplications((prev) =>
          prev.map((app) =>
            app._id === id ? { ...app, status: data.updated.status } : app
          )
        );
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Error updating status");
    }
  };

  const filtered = applications.filter((app) => {
    const matchesStatus = filter === "all" || app.status === filter;
    const matchesSearch =
    (app.userId?.firstname || "").toLowerCase().includes(search.toLowerCase()) ||
    (app.userId?.email || "").toLowerCase().includes(search.toLowerCase())
    return matchesStatus && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400">Manage Applications</h2>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="px-3 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-black dark:text-white"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>

        <input
          type="text"
          placeholder="Search user/email..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="px-3 py-2 border rounded-md w-full sm:w-64 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-black dark:text-white"
        />
      </div>

      {loading ? (
        <p className="text-gray-500 dark:text-gray-300">Loading...</p>
      ) : paginated.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No applications found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border dark:border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="p-3">User</th>
                <th className="p-3">Email</th>
                <th className="p-3">Type</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800">
              {paginated.map((app) => (
                <tr key={app._id} className="border-t dark:border-gray-700">
                  <td className="p-3">{app.userId?.firstname || "N/A"}</td>
                  <td className="p-3">{app.userId?.email || "N/A"}</td>
                  <td className="p-3">{app.donationType}</td>
                  <td className="p-3">{new Date(app.date).toLocaleDateString()}</td>
                  <td className="p-3 capitalize">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-xs ${
                        app.status === "pending"
                          ? "bg-yellow-500"
                          : app.status === "approved"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="p-3 space-x-2">
                    <button onClick={() => handleStatusChange(app._id, "approved")}>✅</button>
                    <button onClick={() => handleStatusChange(app._id, "rejected")}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

       
          <div className="flex justify-end items-center gap-2 mt-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md border bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-md border bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CentreApprovals;

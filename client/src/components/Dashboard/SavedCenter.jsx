import React, { useState } from "react";
import { FaHeart, FaTrashAlt, FaPlusCircle, FaMapMarkerAlt } from "react-icons/fa";

const SavedCenters = () => {
  const [centers, setCenters] = useState([
    {
      id: 1,
      name: "Apollo Blood Bank",
      location: "Delhi, India",
      contact: "+91-9876543210",
    },
    {
      id: 2,
      name: "Red Cross Donation Center",
      location: "Lucknow, India",
      contact: "+91-8899776655",
    },
  ]);

  const [newCenter, setNewCenter] = useState({
    name: "",
    location: "",
    contact: "",
  });

  const handleAdd = () => {
    if (newCenter.name && newCenter.location) {
      setCenters((prev) => [
        ...prev,
        { ...newCenter, id: Date.now() },
      ]);
      setNewCenter({ name: "", location: "", contact: "" });
    }
  };

  const handleDelete = (id) => {
    setCenters((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6 bg-white dark:bg-gray-800 shadow-xl rounded-xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-red-600 dark:text-red-400">
        ❤️ Saved Donation Centers
      </h2>

      <div className="space-y-4">
        {centers.map((center) => (
          <div
            key={center.id}
            className="bg-red-50 dark:bg-gray-700 p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white flex items-center gap-2">
                <FaMapMarkerAlt /> {center.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                📍 {center.location}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                📞 {center.contact}
              </p>
            </div>
            <button
              onClick={() => handleDelete(center.id)}
              className="mt-3 sm:mt-0 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition"
              title="Remove from Favorites"
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>

    
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          <FaPlusCircle className="inline mr-2 text-red-500" />
          Add New Favorite Center
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Center Name"
            className="px-4 py-2 border rounded-md"
            value={newCenter.name}
            onChange={(e) =>
              setNewCenter({ ...newCenter, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Location"
            className="px-4 py-2 border rounded-md"
            value={newCenter.location}
            onChange={(e) =>
              setNewCenter({ ...newCenter, location: e.target.value })
            }
          />
          <input
            type="tel"
            placeholder="Contact (Optional)"
            className="px-4 py-2 border rounded-md"
            value={newCenter.contact}
            onChange={(e) =>
              setNewCenter({ ...newCenter, contact: e.target.value })
            }
          />
        </div>
        <button
          onClick={handleAdd}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default SavedCenters;

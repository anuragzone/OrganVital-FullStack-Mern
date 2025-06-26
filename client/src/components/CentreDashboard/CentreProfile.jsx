import React, { useEffect, useState } from "react";
import { fetchCenterProfile, updateCenterProfile } from "../../utils/CenterApi";

const CentreProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchCenterProfile();
        setProfile(data);
        setFormData(data);
      } catch (err) {
        console.error("Error fetching center profile:", err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateCenterProfile(formData);
      alert("✅ Profile updated successfully!");
      setEditing(false);
      setProfile(formData); 
    } catch (err) {
      console.error("Update failed:", err.message);
      alert("❌ Failed to update profile.");
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (!profile) return <div className="p-6 text-red-500">Failed to load profile</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-red-600 text-center">Center Profile</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        {["name", "email", "contact", "address", "state", "city"].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1 capitalize">
              {field}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field] || ""}
              onChange={handleChange}
              disabled={!editing}
              className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white 
                focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
          </div>
        ))}

        <div className="flex justify-center mt-6">
          {editing ? (
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              Save Changes
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CentreProfile;



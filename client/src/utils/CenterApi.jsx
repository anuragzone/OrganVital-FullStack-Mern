const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCenterProfile = async () => {
  const token = localStorage.getItem("centerToken");
  console.log("Token used:", token);
  if (!token) throw new Error("No auth token");

  const res = await fetch(`${BASE_URL}/api/center/center-profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch center profile");
  return res.json();
};

export const updateCenterProfile = async (formData) => {
  const token = localStorage.getItem("centerToken"); // ✅ Corrected key

  const res = await fetch(`${BASE_URL}/api/center/update-profile`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to update profile");
  }

  return res.json();
};

export const fetchUserProfile = async () => {
  const BASE_URL = "http://localhost:5000";
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) throw new Error("No auth token found");
  
    const res = await fetch(`${BASE_URL}/api/user-profile`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(res);
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response:", errorText);
      throw new Error("Failed to fetch user");
    }
  
    return await res.json();
  };
  
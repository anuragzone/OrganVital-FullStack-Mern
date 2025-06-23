import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";
import { fetchUserProfile } from "../../utils/api";

const DashboardTopBar = ({ isSidebarOpen, setIsSidebarOpen, darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await fetchUserProfile();
        setUserName(user.user.firstname || "User");
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    getUser();
  }, []);

  return (
    <header className="w-full z-50 px-2 sm:px-6 dark:bg-bggray dark:text-white">
      <div className="flex justify-between items-center mx-auto max-w-7xl px-4 py-3 mt-2 rounded-xl bg-white/40 dark:bg-card backdrop-blur-md shadow-md dark:shadow-gray-700">
        
        
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="text-2xl text-gray-700 dark:text-white hover:scale-110 transition "
          aria-label="Toggle sidebar"
        >
          <GiHamburgerMenu />
        </button>

       
        <div className="hidden sm:flex items-center space-x-4 font-medium text-gray-800 dark:text-gray-200">
          <span>
            👋 Welcome, <span className="font-semibold">{userName || "Loading..."}</span>
          </span>
        </div>

     
        <div className="flex items-center space-x-4">
  
          <button onClick={toggleDarkMode} className="hover:scale-110 transition" aria-label="Toggle Dark Mode">
            {darkMode ? (
              <BsSun className="text-yellow-400 text-2xl" />
            ) : (
              <MdDarkMode className="text-2xl text-gray-800 dark:text-white" />
            )}
          </button>

       
          <button
            onClick={handleLogout}
            className="px-4 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm font-medium shadow-sm transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardTopBar;

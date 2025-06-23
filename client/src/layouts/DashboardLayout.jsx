import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardTopBar from "../components/Dashboard/DashboardTopBar";
import DashboardLinks from "../components/Dashboard/DashboardLinks";

const DashboardLayout = ({ darkMode, toggleDarkMode }) => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const stored = localStorage.getItem("sidebarOpen");
    return stored ? JSON.parse(stored) : window.innerWidth >= 768;
  });

  
  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      {/* Top Navbar */}
   
     <DashboardTopBar
     isSidebarOpen={isSidebarOpen}
     setIsSidebarOpen={setIsSidebarOpen}
     darkMode={darkMode}
     toggleDarkMode={toggleDarkMode}
   />
   

     
      <div className="flex flex-1">
      {isSidebarOpen && (
  <aside className="w-full md:w-64">
    <DashboardLinks />
  </aside>
)}

       
        <main className="flex-1 p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

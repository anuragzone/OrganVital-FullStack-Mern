//client/src/layouts/CenterDashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import CenterTopBar from '../components/CentreDashboard/CentreTopBar';
import CenterSidebar from '../components/CentreDashboard/CentreSideBar';

const CentreDashboardLayout = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <CenterTopBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

   
      <div className="flex flex-1">
        <CenterSidebar />

        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CentreDashboardLayout;

//app.jsx
import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Contact from "./pages/Contact";

import AboutUs from "./pages/AboutUs";
import Faqs from "./pages/Faqs";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./components/Dashboard/Profile";
import DonationHistory from "./components/Dashboard/DonationHistory";
import Appointment from "./components/Dashboard/Appointment";
import Help from "./components/Dashboard/Help";
import EligibilityChecker from "./components/Dashboard/EligibilityChecker";
import SavedCenters from "./components/Dashboard/SavedCenter";
import MyCertificate from "./components/Dashboard/MyCertificates";
import Notifications from "./components/Dashboard/Notifications";
import CenterLogin from "./pages/CenterLogin";

import ProtectedCenterRoute from "./components/ProtectedCentreRoute";
import CentreDashboardLayout from "./layouts/CenterDashboardLayout";
import CentreDashboard from "./pages/CentreDashboard/CentreDashboard";
import CentreProfile from "./components/CentreDashboard/CentreProfile";
import CentreApprovals from "./components/CentreDashboard/CentreApprovals";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      console.log(darkMode);
    } else {
      document.documentElement.classList.remove("dark");
      console.log(darkMode);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
                <Home />
              </MainLayout>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <MainLayout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                <AboutUs />
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                <Contact />
              </MainLayout>
            }
          />

          <Route
            path="/faqs"
            element={
              <MainLayout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                <Faqs />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <MainLayout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                <Login onClose={() => {}} />
              </MainLayout>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                component={() => (
                  <DashboardLayout
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                )}
              />
            }
          >
            <Route index element={<Dashboard />} />{" "}
            <Route path="profile" element={<Profile />} />
            <Route path="eligibilitychecker" element={<EligibilityChecker />} />
            <Route path="savedcenter" element={<SavedCenters />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="mycertificates" element={<MyCertificate />} />
            <Route path="donationhistory" element={<DonationHistory />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="help" element={<Help />} />
          </Route>

          <Route path="/center">
            <Route path="login" element={<CenterLogin />} />

            <Route element={<ProtectedCenterRoute />}>
              <Route
                path="dashboard"
                element={
                  <CentreDashboardLayout
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                }
              >
                <Route index element={<CentreDashboard />} />
                <Route path="profile" element={<CentreProfile />} />
                <Route path="approvals" element={<CentreApprovals />} />\
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

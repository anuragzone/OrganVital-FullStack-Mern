// src/components/ProtectedCenterRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedCenterRoute = () => {
  const token = localStorage.getItem('centerToken'); 

  return token ? <Outlet /> : <Navigate to="/center/login" replace />;
};

export default ProtectedCenterRoute;

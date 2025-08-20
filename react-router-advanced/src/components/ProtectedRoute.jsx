// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Simulate a simple auth check
const isAuthenticated = false; // You can toggle this value to test

const ProtectedRoute = () => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

// src/routes/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => { // Update name to ProtectedRoute
  const token = localStorage.getItem('token'); // Get the token from localStorage

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/login" />;
  }

  // If token exists, render the protected content
  return children;
};

export default ProtectedRoute;

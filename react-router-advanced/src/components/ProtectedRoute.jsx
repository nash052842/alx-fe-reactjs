import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication function
const isAuthenticated = () => {
  // Replace with real auth logic
  return localStorage.getItem("isLoggedIn") === "true";
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    // If user is not logged in, redirect to home or login page
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
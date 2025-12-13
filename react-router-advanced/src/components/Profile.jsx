// src/pages/Profile.jsx
import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from "../Pages/ProfileDetails";
import ProfileSettings from "../Pages/ProfileSettings";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}

export default Profile;

import React from "react";

function UserProfile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    location: "Nairobi, Kenya",
    bio: "Frontend developer who loves React and UI design.",
    profilePic: "https://via.placeholder.com/120",
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        padding: "20px",
        width: "300px",
        margin: "30px auto",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={user.profilePic}
        alt={user.name}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />
      <h3>{user.name}</h3>
      <p style={{ color: "#555" }}>{user.email}</p>
      <p style={{ fontStyle: "italic" }}>{user.location}</p>
      <p style={{ marginTop: "10px" }}>{user.bio}</p>
    </div>
  );
}

export default UserProfile;

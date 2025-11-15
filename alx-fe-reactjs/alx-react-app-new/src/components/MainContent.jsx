import React from "react";

const MainContent = () => {
  return (
    <main
      style={{
        backgroundColor: "#fafafa",
        padding: "40px",
        textAlign: "center",
        minHeight: "60vh",
        color: "#333",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ color: "#444", marginBottom: "20px" }}>Welcome to My Company</h1>
      <p style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
        We provide world-class services designed to help your business grow and
        thrive. Explore our offerings and learn more about what makes us
        different!
      </p>
    </main>
  );
};

export default MainContent;

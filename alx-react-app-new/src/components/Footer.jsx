import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "15px 0",
        position: "relative",
        bottom: 0,
        width: "100%",
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

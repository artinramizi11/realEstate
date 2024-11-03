import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <h4 style={{ color: "white" }}>
        2024 © Copyright - All Rights Reserved By Artin Ramizi
      </h4>
      <div className="socials" style={{ display: "flex", gap: "20px" }}>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
    </div>
  );
};

export default Footer;

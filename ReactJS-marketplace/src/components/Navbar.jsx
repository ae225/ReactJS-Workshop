import React from "react";
import lexiconLogo from "../assets/images/lexicon-logo.png";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "10px 20px",
        backgroundColor: "#333",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <a href="#lexicon">
          <img
            src={lexiconLogo}
            alt="Lexicon"
            style={{ height: "30px", objectFit: "contain" }}
          />
        </a>

        <a href="#login" className="navbar-link">
          Login
        </a>
        <a href="#signup" className="navbar-link">
          Sign Up
        </a>
        <a href="#about" className="navbar-link">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

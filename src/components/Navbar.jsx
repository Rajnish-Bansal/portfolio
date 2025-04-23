import React, { useState } from "react";
import "./navbar.css";
import "./dark.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className="navbar-component">
      <div className="navbar-title">My Portfolio</div>
      <div className="toggle-switch">
        Light
        <label className="switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <span className="slider"></span>
        </label>
        Dark
      </div>
      <div className="navbar-links">
        <a href="#home" className="navbar-item">
          Home
        </a>
        <a href="#skills" className="navbar-item">
          Skills
        </a>
        <a href="#experience" className="navbar-item">
          Experience
        </a>
        <a href="#projects" className="navbar-item">
          Projects
        </a>
        <a href="#contact" className="navbar-item">
          Contact
        </a>
      </div>
      <div className="mobile-navbar">
        <button className="hamburger-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#home" className="navbar-item">
            Home
          </a>
          <a href="#skills" className="navbar-item">
            Skills
          </a>
          <a href="#experience" className="navbar-item">
            Experience
          </a>
          <a href="#projects" className="navbar-item">
            Projects
          </a>
          <a href="#contact" className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

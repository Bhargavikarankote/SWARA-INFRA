

// export default Navbar;
// 

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://swarainfra.homes/static/media/logo.b9aec6b0bfc6345fdc2e.png"
          alt="Swara Infra Logo"
          className="navbar-logo"
        />
        <div className="logo-text">Swara Infra</div>
      </div>
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/packages" onClick={closeMenu}>Packages</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

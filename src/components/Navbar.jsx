
// import { Link } from 'react-router-dom';

// import React from "react";
// import "../styles/Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <img
//           src="https://swarainfra.homes/static/media/logo.b9aec6b0bfc6345fdc2e.png"
//           alt="Swara Infra Logo"
//           className="navbar-logo"
//         />
//         <div className="logo-text">Swara Infra</div>
//       </div>

//         <ul className="nav-links" >
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/projects">Projects</Link></li>
//           <li><Link to="/Packages">Packages</Link></li>

//         </ul>




      
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/packages">Packages</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
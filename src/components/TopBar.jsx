import React from "react";
import "../styles/TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="social-links">
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <span>📞 +1 718-999-3939</span>
          <span>✉️ contact@construction.com</span>
          <span>⏰ Mon-Fri: 7:00 - 7:00</span>
        </div>
    </div>
  );
};

export default TopBar;

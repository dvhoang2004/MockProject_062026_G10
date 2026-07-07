import React, { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <h2>NHMS</h2>
          <span>Nursing Home Management System</span>
        </div>
      </div>

      <div className="navbar-right">
        {/* Action Icons */}
        <div className="navbar-actions">
          <button type="button">🔔</button>
          <button type="button">❓</button>
          <button type="button">👤</button>
        </div>

        {/* User Info */}
        <div className="user-info">
          <h4>Victor Alvarez</h4>
          <span>System Admin</span>
        </div>

        {/* Menu */}
        <div className="user-menu">
          <button
            type="button"
            className="menu-button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            ▼
          </button>

          {/* Dropdown (show/hide menu) */}
          {isMenuOpen && (
            <div className="dropdown-menu">
              <button type="button">Profile</button>
              <button type="button">Settings</button>
              <button type="button">Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { FiBell, FiHelpCircle, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

import "./Navbar.css";

const Navbar = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!isLoggedIn) {
    return null;
  }

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
          <button type="button" className="icon-btn">
            <FiBell size={20} />
          </button>
          <button type="button" className="icon-btn">
            <FiHelpCircle size={20} />
          </button>
          <button type="button" className="icon-btn">
            <FaUserCircle size={22} />
          </button>
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
            <FiChevronDown
              size={18}
              className={`chevron ${isMenuOpen ? "open" : ""}`}
            />
          </button>

          {/* Menu dropdown */}
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

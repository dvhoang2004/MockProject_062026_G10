import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import Logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

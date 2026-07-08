import React from "react";

import "./Sidebar.css";

const Sidebar = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return null;
  }
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Residents</li>
        <li>Care Planning</li>
        <li>eMAR</li>
        <li>Incidents & Risk</li>
        <li>Reports</li>
      </ul>
      <button className="logout-button">Logout</button>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import {
  FiHome,
  FiUsers,
  FiUserCheck,
  FiDollarSign,
  FiClock,
  FiBox,
  FiAlertTriangle,
  FiSettings,
  FiDatabase,
  FiShield,
  FiLogOut,
} from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";

import "./Sidebar.css";

const menuGroups = [
  {
    title: null,
    items: [{ key: "dashboard", label: "Dashboard", icon: <FiHome /> }],
  },
  {
    title: "User & Role Management",
    items: [
      { key: "users", label: "Users", icon: <FiUsers /> },
      { key: "roles", label: "Roles", icon: <FiUserCheck /> },
    ],
  },
  {
    title: "Facility & Configuration",
    items: [
      { key: "facility", label: "Facility", icon: <FaBuilding /> },
      { key: "loc-rates", label: "LOC Rates", icon: <FiDollarSign /> },
      { key: "staffing", label: "Staffing", icon: <FiClock /> },
      { key: "equipment", label: "Equipment", icon: <FiBox /> },
      {
        key: "incident-severity",
        label: "Incident Severity",
        icon: <FiAlertTriangle />,
      },
      { key: "sla-config", label: "SLA Config", icon: <FiSettings /> },
    ],
  },
  {
    title: "Data & Seeding",
    items: [{ key: "data", label: "Data", icon: <FiDatabase /> }],
  },
  {
    title: "Audit & Security",
    items: [{ key: "audit", label: "Audit", icon: <FiShield /> }],
  },
];

const Sidebar = ({ isLoggedIn, activeKey, onSelect, onLogout }) => {
  const [internalActive, setInternalActive] = useState(activeKey || "users");

  if (!isLoggedIn) {
    return null;
  }

  const currentActive = activeKey ?? internalActive;

  const handleSelect = (key) => {
    if (onSelect) {
      onSelect(key);
    } else {
      setInternalActive(key);
    }
  };

  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        {menuGroups.map((group, idx) => (
          <div className="sidebar-group" key={group.title || `group-${idx}`}>
            {group.title && (
              <span className="sidebar-group-title">{group.title}</span>
            )}
            <ul>
              {group.items.map((item) => (
                <li key={item.key}>
                  <button
                    type="button"
                    className={`sidebar-item ${
                      currentActive === item.key ? "active" : ""
                    }`}
                    onClick={() => handleSelect(item.key)}
                  >
                    <span className="sidebar-icon">{item.icon}</span>
                    <span className="sidebar-label">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <button className="logout-button" type="button" onClick={onLogout}>
        <FiLogOut size={16} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;

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
import { Link } from "react-router-dom";

import "./Sidebar.css";

const menuGroups = [
  {
    title: null,
    items: [
      {
        key: "dashboard",
        label: "Dashboard",
        icon: <FiHome />,
        path: "/user-list",
      },
    ],
  },
  {
    title: "User & Role Management",
    items: [
      { key: "users", label: "Users", icon: <FiUsers />, path: "/user-list" },
      { key: "roles", label: "Roles", icon: <FiUserCheck />, path: "/roles" },
    ],
  },
  {
    title: "Facility & Configuration",
    items: [
      {
        key: "facility",
        label: "Facility",
        icon: <FaBuilding />,
        path: "/facility",
      },
      {
        key: "loc-rates",
        label: "LOC Rates",
        icon: <FiDollarSign />,
        path: "/level-of-care",
      },
      {
        key: "staffing",
        label: "Staffing",
        icon: <FiClock />,
        path: "/staffing",
      },
      {
        key: "equipment",
        label: "Equipment",
        icon: <FiBox />,
        path: "/equipment",
      },
      {
        key: "incident-severity",
        label: "Incident Severity",
        icon: <FiAlertTriangle />,
        path: "/incident-severity",
      },
      {
        key: "sla-config",
        label: "SLA Config",
        icon: <FiSettings />,
        path: "/sla",
      },
    ],
  },
  {
    title: "Data & Seeding",
    items: [
      {
        key: "data",
        label: "Data",
        icon: <FiDatabase />,
        path: "/data-seeder",
      },
    ],
  },
  {
    title: "Audit & Security",
    items: [{ key: "audit", label: "Audit", icon: <FiShield />, path: "/" }],
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
                  <Link
                    className={`sidebar-link ${
                      currentActive === item.key ? "active" : ""
                    }`}
                    onClick={() => handleSelect(item.key)}
                    to={item.path}
                  >
                    <span className="sidebar-icon">{item.icon}</span>
                    <span className="sidebar-label">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <Link className="logout-button" to="/login" onClick={onLogout}>
        <FiLogOut size={16} />
        <span>Logout</span>
      </Link>
    </div>
  );
};

export default Sidebar;

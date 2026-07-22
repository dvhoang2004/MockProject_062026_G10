import React, { useState } from "react"; // Đã bổ sung useState
import { Link, useLocation } from "react-router-dom";
import {
  MdMenu,
  MdHome,
  MdPeople,
  MdAssignment,
  MdBloodtype,
  MdReportProblem,
  MdBarChart,
  MdLogout,
  MdDashboard,
} from "react-icons/md";
import "./NurseSidebar.css";

const Sidebar = () => {
  const location = useLocation();

  // 1. Initialize state to manage open/closed status on mobile.
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // 2. Function Toggle
  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // 3. Function to automatically close the sidebar on mobile after clicking a menu item.
  const closeOnMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobileOpen(false);
    }
  };

  const checkActive = (paths) => {
    if (Array.isArray(paths)) {
      return paths.some((path) => location.pathname.includes(path))
        ? "active"
        : "";
    }
    return location.pathname.includes(paths) ? "active" : "";
  };

  return (
    <>
      {/* BUTTON MENU ON MOBILE*/}
      {!isMobileOpen && (
        <button className="mobile-toggle-btn" onClick={toggleSidebar}>
          <MdMenu size={24} color="#475569" />
        </button>
      )}

      {/* Use class  'open' to show Sidebar */}
      <aside className={`global-sidebar ${isMobileOpen ? "open" : ""}`}>
        <div className="global-brand">
          <MdMenu
            size={24}
            className="icon-menu"
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          />
          <div className="brand-text">
            <strong>NHMS</strong>
            <span>Nursing Home Management System</span>
          </div>
        </div>

        <nav className="global-menu">
          {/* Dashboard */}
          <div className={`menu-item ${checkActive("dashboard")}`}>
            <Link
              to="/dashboard-nurse"
              className="menu-link"
              onClick={closeOnMobile}
            >
              <MdDashboard size={22} /> <span>Dashboard</span>
            </Link>
          </div>

          {/* Residents */}
          <div
            className={`menu-item ${checkActive(["resident", "admission", "assessment", "loc"])}`}
          >
            <Link
              to="/resident-list"
              className="menu-link"
              onClick={closeOnMobile}
            >
              <MdPeople size={22} /> <span>Residents</span>
            </Link>
          </div>

          {/* Care Planning */}
          <div className={`menu-item ${checkActive(["careplan", "gate"])}`}>
            <Link
              to="/careplan/list"
              className="menu-link"
              onClick={closeOnMobile}
            >
              <MdAssignment size={22} /> <span>Care Planning</span>
            </Link>
          </div>

          {/* eMAR */}
          <div className="menu-item disabled">
            <Link to="/eMAR" className="menu-link">
              <MdBloodtype size={22} /> <span>eMAR</span>
              <span className="badge-soon">soon</span>
            </Link>
          </div>

          {/* Incident & Risk */}
          <div className={`menu-item ${checkActive("incident")}`}>
            <Link
              to="/incident-risk"
              className="menu-link"
              onClick={closeOnMobile}
            >
              <MdReportProblem size={22} /> <span>Incident & Risk</span>
            </Link>
          </div>

          {/* Reports */}
          <div className={`menu-item ${checkActive("reports")}`}>
            <Link to="/reports" className="menu-link" onClick={closeOnMobile}>
              <MdBarChart size={22} /> <span>Reports</span>
            </Link>
          </div>
        </nav>

        {/* Footer / Logout */}
        <div className="global-footer-menu">
          <div className="menu-item">
            <div className="menu-link">
              <MdLogout size={22} /> <span>Logout</span>
            </div>
          </div>
        </div>
      </aside>

      {/* OVERLAY*/}
      {isMobileOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Sidebar;

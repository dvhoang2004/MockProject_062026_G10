import React from "react";
import {
  MdDashboard,
  MdPeople,
  MdAssignment,
  MdBloodtype,
  MdReportProblem,
  MdBarChart,
  MdLogout,
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdKeyboardArrowDown,
  MdAdd,
} from "react-icons/md";
import "./DashboardNurse.css"; // Import file CSS bên dưới
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Data giả lập cho các thẻ thống kê (Top Cards)
  const statsData = [
    {
      id: 1,
      label: "Assessments Due",
      value: 3,
      icon: <MdAssignment />,
      color: "#fbf0db",
      iconColor: "#b37d14",
    },
    {
      id: 2,
      label: "LOC Awaiting Confirm",
      value: 2,
      icon: <MdBloodtype />,
      color: "#e3edfc",
      iconColor: "#1d63d3",
    },
    {
      id: 3,
      label: "Care Plans To Submit",
      value: 4,
      icon: <MdAssignment />,
      color: "#fef7dc",
      iconColor: "#bca11e",
    },
    {
      id: 4,
      label: "Reassessments Due",
      value: 2,
      icon: <MdBarChart />,
      color: "#fce8e6",
      iconColor: "#c53929",
    },
  ];

  // Data danh sách cư dân (Assigned Residents)
  const residents = [
    {
      name: "Susan Wright",
      room: "114B",
      desc: "Assessment due 2026-07-05 (BR-02: 14-day)",
      status: "Overdue",
      type: "overdue",
    },
    {
      name: "James Porter",
      room: "210B",
      desc: "Reassessment due 2026-07-03 (BR-03: 90-day)",
      status: "Review Due",
      type: "review",
    },
    {
      name: "Mary Coleman",
      room: "118A",
      desc: "Care plan Draft — not yet submitted",
      status: "Draft",
      type: "draft",
    },
    {
      name: "Elena Ramos",
      room: "106A",
      desc: "LOC classification awaiting confirm",
      status: "Pending Review",
      type: "pending",
    },
    {
      name: "Thomas Baker",
      room: "220C",
      desc: "Care plan Active — on track",
      status: "On track",
      type: "ontrack",
    },
  ];

  // Data danh sách sự cố (Open Incidents)
  const incidents = [
    {
      title: "Fall — Susan Wright",
      room: "114B",
      desc: "Reported 2026-07-02 09:14 · Investigating",
      status: "High",
      type: "high",
    },
    {
      title: "Skin tear — James Porter",
      room: "210B",
      desc: "Reported 2026-07-01 16:40 · Open",
      status: "Medium",
      type: "medium",
    },
  ];

  return (
    <div className="nhms-container">
      {/* --- HEADER NAVBAR --- */}
      <header className="nhms-header">
        <div className="header-left">
          <div className="menu-toggle">☰</div>
          <span className="brand-logo">NHMS</span>
          <span className="brand-sub">Nursing Home Management System</span>
        </div>
        <div className="header-right">
          <button className="btn-report">
            <MdAdd /> Report Incident
          </button>
          <div className="header-icons">
            <MdNotificationsNone className="icon-item" />
            <MdHelpOutline className="icon-item" />
          </div>
          <div className="user-profile">
            <MdAccountCircle className="avatar" />
            <div className="user-info">
              <span className="user-name">Anna Lee</span>
              <span className="user-role">Nurse</span>
            </div>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </header>

      <div className="nhms-layout">
        {/* --- SIDEBAR --- */}
        <aside className="nhms-sidebar">
          <ul className="sidebar-menu">
            <Link to="/dashboard-nurse" className="menu-link">
              <li className="menu-item active">
                <MdDashboard /> Dashboard
              </li>
            </Link>
            <Link to="/resident-list" className="menu-link">
              <li className="menu-item">
                <MdPeople /> Residents
              </li>
            </Link>
            <Link to="/care-planning" className="menu-link">
              <li className="menu-item">
                <MdAssignment /> Care Planning
              </li>
            </Link>
            <Link to="/eMAR" className="menu-link">
              <li className="menu-item disabled">
                <MdBloodtype /> eMAR <span className="badge-soon">soon</span>
              </li>
            </Link>
            <Link to="/incident-risk" className="menu-link">
              <li className="menu-item">
                <MdReportProblem /> Incident & Risk
              </li>
            </Link>
            <Link to="/reports" className="menu-link">
              <li className="menu-item">
                <MdBarChart /> Reports
              </li>
            </Link>
          </ul>
          <div className="sidebar-footer">
            <div className="menu-item">
              <MdLogout /> Logout
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="nhms-main">
          <div className="main-breadcrumb">Dashboard</div>
          <h1 className="main-welcome">Good morning, Anna</h1>
          <p className="main-subtitle">
            12 residents assigned to you — Day shift
          </p>

          {/* Top Stat Cards */}
          <div className="stats-grid">
            {statsData.map((stat) => (
              <div key={stat.id} className="stat-card">
                <div
                  className="stat-icon-wrapper"
                  style={{ backgroundColor: stat.color, color: stat.iconColor }}
                >
                  {stat.icon}
                </div>
                <div className="stat-info">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Dual Columns */}
          <div className="content-grid">
            {/* Left Column: Assigned Residents */}
            <div className="content-box">
              <div className="box-header">
                <h3>Assigned Residents — Due Soon</h3>
                <a href="#viewall" className="link-viewall">
                  View all
                </a>
              </div>
              <div className="list-container">
                {residents.map((item, idx) => (
                  <div key={idx} className="list-item">
                    <div className="item-details">
                      <h4>
                        {item.name} · {item.room}
                      </h4>
                      <p>{item.desc}</p>
                    </div>
                    <span className={`status-badge ${item.type}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Open Incidents */}
            <div className="content-box">
              <div className="box-header">
                <h3>Open Incidents</h3>
                <a href="#viewall" className="link-viewall">
                  View all
                </a>
              </div>
              <div className="list-container">
                {incidents.map((item, idx) => (
                  <div key={idx} className="list-item">
                    <div className="item-details">
                      <h4>
                        {item.title} · {item.room}
                      </h4>
                      <p>{item.desc}</p>
                    </div>
                    <span className={`status-badge ${item.type}`}>
                      {item.status}
                    </span>
                  </div>
                ))}

                {/* Section đặc biệt Meds Due Today */}
                <div className="list-item special-item">
                  <div className="item-details">
                    <h4>
                      Meds Due Today <span className="badge-soon">soon</span>
                    </h4>
                    <p style={{ fontStyle: "italic", color: "#999" }}>
                      Available when M3 eMAR ships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

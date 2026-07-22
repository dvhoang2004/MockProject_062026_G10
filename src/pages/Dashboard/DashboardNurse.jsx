import React from "react";
import { Link } from "react-router-dom";
import NurseSidebar from "../../components/Sidebar/NurseSidebar";
import "./DashboardNurse.css";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdAdd,
  MdOutlineEditNote,
  MdOutlineLayers,
  MdOutlineAlarm,
} from "react-icons/md";

const DashboardNurse = () => {
  // Data Top Cards
  const statsData = [
    {
      id: 1,
      label: "Assessments Due",
      value: 3,
      icon: <MdOutlineEditNote size={24} />,
      bgColor: "#fefce8", // yellow light
      iconColor: "#ca8a04",
    },
    {
      id: 2,
      label: "LOC Awaiting Confirm",
      value: 2,
      icon: <MdOutlineLayers size={24} />,
      bgColor: "#eff6ff", // blue light
      iconColor: "#2563eb",
    },
    {
      id: 3,
      label: "Care Plans To Submit",
      value: 4,
      icon: <MdOutlineEditNote size={24} />,
      bgColor: "#fefce8", // yellow light
      iconColor: "#ca8a04",
    },
    {
      id: 4,
      label: "Reassessments Due",
      value: 2,
      icon: <MdOutlineAlarm size={24} />,
      bgColor: "#fef2f2", // red light
      iconColor: "#dc2626",
    },
  ];

  // Data Assigned Residents
  const residents = [
    {
      name: "Susan Wright",
      room: "114B",
      desc: "Assessment due 07/05/2026 (BR-02: 14-day)",
      status: "Overdue",
      type: "overdue",
    },
    {
      name: "James Porter",
      room: "210B",
      desc: "Reassessment due 07/03/2026 (BR-03: 90-day)",
      status: "Review Due",
      type: "review-due",
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
      type: "pending-review",
    },
    {
      name: "Thomas Baker",
      room: "220C",
      desc: "Care plan Active — on track",
      status: "On track",
      type: "on-track",
    },
  ];

  // Data Open Incidents
  const incidents = [
    {
      title: "Fall — Susan Wright",
      room: "114B",
      desc: "Reported 07/02/2026 09:14 · Investigating",
      status: "High",
      type: "high",
    },
    {
      title: "Skin tear — James Porter",
      room: "210B",
      desc: "Reported 07/01/2026 16:40 · Open",
      status: "Medium",
      type: "medium",
    },
  ];

  return (
    <div className="dn-layout">
      {/* 1. SIDEBAR (Dùng chung) */}
      <NurseSidebar />

      {/* 2. MAIN CONTENT */}
      <main className="dn-main">
        {/* HEADER TOP */}
        <header className="dn-header-top">
          <div className="header-left"></div>
          <div className="header-right">
            <button className="dn-btn-report">
              <MdAdd size={18} /> Report Incident
            </button>
            <MdNotificationsNone className="icon-action" size={26} />
            <MdHelpOutline className="icon-action" size={26} />
            <div className="user-profile">
              <MdAccountCircle size={34} color="#94a3b8" />
              <div className="user-info">
                <span className="user-name">Anna Lee</span>
                <span className="user-role">Nurse</span>
              </div>
              <MdArrowDropDown size={20} color="#475569" />
            </div>
          </div>
        </header>

        {/* WORKSPACE */}
        <div className="dn-workspace">
          <div className="dn-container">
            <div className="dn-breadcrumb">Dashboard</div>
            <h1 className="dn-welcome">Good morning, Anna</h1>
            <p className="dn-subtitle">
              12 residents assigned to you — Day shift
            </p>

            {/* Top Stat Cards */}
            <div className="dn-stats-grid">
              {statsData.map((stat) => (
                <div key={stat.id} className="dn-stat-card">
                  <div
                    className="dn-stat-icon-wrapper"
                    style={{
                      backgroundColor: stat.bgColor,
                      color: stat.iconColor,
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div className="dn-stat-info">
                    <span className="dn-stat-label">{stat.label}</span>
                    <span className="dn-stat-value">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Dual Columns */}
            <div className="dn-content-grid">
              {/* Left Column: Assigned Residents */}
              <div className="dn-content-box">
                <div className="dn-box-header">
                  <h3>Assigned Residents — Due Soon</h3>
                  <a href="#viewall" className="dn-link-viewall">
                    View all
                  </a>
                </div>
                <div className="dn-list-container">
                  {residents.map((item, idx) => (
                    <div key={idx} className="dn-list-item">
                      <div className="dn-item-details">
                        <h4>
                          {item.name} · {item.room}
                        </h4>
                        <p>{item.desc}</p>
                      </div>
                      <span className={`dn-badge badge-${item.type}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Open Incidents */}
              <div className="dn-content-box">
                <div className="dn-box-header">
                  <h3>Open Incidents</h3>
                  <a href="#viewall" className="dn-link-viewall">
                    View all
                  </a>
                </div>
                <div className="dn-list-container">
                  {incidents.map((item, idx) => (
                    <div key={idx} className="dn-list-item">
                      <div className="dn-item-details">
                        <h4>
                          {item.title} · {item.room}
                        </h4>
                        <p>{item.desc}</p>
                      </div>
                      <span className={`dn-badge badge-${item.type}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}

                  {/* Section đặc biệt Meds Due Today */}
                  <div className="dn-list-item">
                    <div className="dn-item-details">
                      <h4 className="flex-align-center gap-2">
                        Meds Due Today{" "}
                        <span className="dn-badge-soon">soon</span>
                      </h4>
                      <p className="text-italic-gray">
                        Available when M3 eMAR ships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardNurse;

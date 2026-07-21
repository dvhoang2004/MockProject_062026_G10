import React from "react";
import { Link } from "react-router-dom";
import "./CarePlanDetail.css";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdMenu,
  MdHome,
  MdPeople,
  MdAssignment,
  MdBloodtype,
  MdReportProblem,
  MdBarChart,
  MdDashboard,
  MdLogout,
} from "react-icons/md";

// (MOCK DATA)
const mockTimelineData = [
  {
    id: 1,
    title: "Vitals recorded (SpO2 flagged)",
    actor: "Marcus Rivera, CNA",
    time: "07/02/2026 14:05",
    isLatest: true, // Color blue
  },
  {
    id: 2,
    title: "Task 'Ambulation assist' marked Done",
    actor: "Marcus Rivera, CNA",
    time: "07/02/2026 08:30",
    isLatest: false,
  },
  {
    id: 3,
    title: "Care plan approved & activated",
    actor: "Denise Carter, DON",
    time: "04/08/2026 09:12",
    isLatest: false,
  },
  {
    id: 4,
    title: "Submitted for review",
    actor: "Anna Lee, RN",
    time: "04/07/2026 16:40",
    isLatest: false,
  },
  {
    id: 5,
    title: "Care plan created",
    actor: "Anna Lee, RN",
    time: "04/07/2026 15:02",
    isLatest: false,
  },
];

const CarePlanDetail = () => {
  return (
    <div className="cp-detail-layout">
      {/* SIDEBAR */}
      <aside className="cp-detail-sidebar">
        <div className="cp-detail-brand">
          <MdMenu size={24} className="icon-menu" />
          <div className="brand-text">
            <strong>NHMS</strong>
            <span></span>
          </div>
        </div>
        <nav className="cp-detail-menu">
          <div className="menu-item">
            <Link to="/dashboard-nurse" className="menu-link">
              <MdDashboard size={22} /> <span>Dashboard</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/resident-list" className="menu-link">
              <MdPeople size={22} /> <span>Residents</span>
            </Link>
          </div>
          <div className="menu-item active">
            <Link to="/careplan/list" className="menu-link">
              <MdAssignment size={22} /> <span>Care Planning</span>
            </Link>
          </div>
          <div className="menu-item disabled">
            <Link to="/eMAR" className="menu-link">
              <MdBloodtype size={22} /> <span>eMAR</span>
              <span className="badge-soon">soon</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/incident-risk" className="menu-link">
              <MdReportProblem size={22} /> <span>Incident & Risk</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/reports" className="menu-link">
              <MdBarChart size={22} /> <span>Reports</span>
            </Link>
          </div>
        </nav>
        <div className="cp-detail-footer-menu">
          <div className="menu-item">
            <div className="menu-link">
              {" "}
              <MdLogout size={22} />
              Logout
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="cp-detail-main">
        {/* HEADER TOP */}
        <header className="cp-detail-header-top">
          <div className="header-left"></div>
          <div className="header-right">
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
        <div className="cp-detail-workspace">
          <div className="cp-detail-container">
            <div className="breadcrumb">
              Care Planning &gt; Detail &gt; Robert Hayes
            </div>

            {/* PROFILE HEADER */}
            <div className="profile-header-card">
              <div className="profile-avatar">RH</div>
              <div className="profile-info">
                <h1>Robert Hayes</h1>
                <p className="profile-meta">
                  DOB 04/15/1943 · Room 204B · Resident ID RES-00089
                </p>
                <div className="profile-badges">
                  <span className="badge-pill bg-green">Active</span>
                  <span className="badge-pill bg-green">No DNR</span>
                  <span className="badge-pill bg-yellow">Level 3</span>
                  <span className="badge-pill bg-gray">Medicaid</span>
                </div>
              </div>
            </div>

            {/* TABS NAVIGATION */}
            <div className="tabs-nav">
              <div className="tab-item">Overview</div>
              <div className="tab-item">Assessments</div>
              <div className="tab-item active-tab">Care Plan</div>
              <div className="tab-item disabled">
                eMAR <span className="tab-badge">soon</span>
              </div>
              <div className="tab-item">LOC</div>
              <div className="tab-item disabled">
                Audit <span className="tab-badge">soon</span>
              </div>
            </div>

            {/* SUB-HEADER */}
            <div className="sub-header-info">
              Room 204B · LOC Tier 3 · Next review 07/07/2026
            </div>

            {/* MAIN GRID */}
            <div className="cp-detail-grid">
              {/* LEFT COLUMN */}
              <div className="left-column">
                <h3 className="section-title">Care Areas</h3>

                {/* Care Area Cards */}
                <div className="care-area-detail-card">
                  <div className="card-top-row">
                    <h4>Mobility</h4>
                    <span className="badge-status-outline green-outline">
                      On Track
                    </span>
                  </div>
                  <p className="goal-text">
                    Goal: Ambulate 50 ft with walker x2/day.
                  </p>
                  <div className="task-bullet">
                    <span className="blue-dot"></span> Assist ambulation w/
                    walker, 2x daily.
                  </div>
                </div>

                <div className="care-area-detail-card">
                  <div className="card-top-row">
                    <h4>Skin Integrity</h4>
                    <span className="badge-status-outline yellow-outline">
                      At Risk
                    </span>
                  </div>
                  <p className="goal-text">
                    Goal: Maintain skin integrity (no stage-2 injury).
                  </p>
                  <div className="task-bullet">
                    <span className="blue-dot"></span> Reposition q2h: skin
                    check each shift.
                  </div>
                </div>

                <div className="care-area-detail-card">
                  <div className="card-top-row">
                    <h4>Nutrition</h4>
                    <span className="badge-status-outline green-outline">
                      On Track
                    </span>
                  </div>
                  <p className="goal-text">
                    Goal: Maintain fluid intake ≥ 1500 mL/day.
                  </p>
                  <div className="task-bullet">
                    <span className="blue-dot"></span> Monitor fluid intake;
                    document I/O.
                  </div>
                </div>

                {/* TIMELINE SECTION (DYNAMIC RENDERING) */}
                <h3 className="section-title mt-32">
                  Activity (Care Activity Timeline)
                </h3>
                <div className="timeline-container">
                  {mockTimelineData.map((item) => (
                    <div className="timeline-item" key={item.id}>
                      <div
                        className={`timeline-dot ${item.isLatest ? "solid-dot" : "outline-dot"}`}
                      ></div>
                      <div className="timeline-content">
                        <p className="timeline-title">{item.title}</p>
                        <p className="timeline-meta">
                          {item.actor} · {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="right-column">
                {/* Cost Estimate Card */}
                <div className="side-card">
                  <div className="side-card-header">
                    <h4>Cost Estimate</h4>
                    <span className="badge-readonly">read-only</span>
                  </div>
                  <div className="cost-row">
                    <span className="text-muted-dark">LOC rate (Tier 3)</span>
                    <strong className="text-dark">$248.00 / day</strong>
                  </div>
                  <div className="cost-row">
                    <span className="text-muted-dark">
                      Room rate (Semi-private)
                    </span>
                    <strong className="text-dark">$185.00 / day</strong>
                  </div>
                  <hr className="cost-divider" />
                  <div className="cost-row total-row">
                    <span>Estimated daily</span>
                    <strong>$433.00</strong>
                  </div>
                  <div className="cost-row total-row large-total">
                    <span>Estimated monthly</span>
                    <strong>$13,163.00</strong>
                  </div>
                  <p className="card-disclaimer">
                    Simulated — not a billing transaction.
                  </p>
                </div>

                {/* Review Cycle Card */}
                <div className="side-card">
                  <h4 className="side-title mb-16">Review Cycle</h4>
                  <div className="cost-row">
                    <span className="text-muted-dark">Last reviewed</span>
                    <strong className="text-dark">04/08/2026</strong>
                  </div>
                  <div className="cost-row">
                    <span className="text-muted-dark">Next review due</span>
                    <strong className="text-dark">07/07/2026</strong>
                  </div>
                  <div className="cost-row mt-12">
                    <span className="text-muted-dark">Cycle</span>
                    <strong className="text-dark">90 days</strong>
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

export default CarePlanDetail;

import React from "react";
import { Link } from "react-router-dom";
import "./LocHistory.css";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdMenu,
  MdDashboard,
  MdPeople,
  MdAssignment,
  MdBloodtype,
  MdReportProblem,
  MdBarChart,
  MdLogout,
} from "react-icons/md";

const LocHistory = () => {
  return (
    <div className="loc-hist-layout">
      {/* SIDEBAR */}
      <aside className="loc-hist-sidebar">
        <div className="loc-hist-brand">
          <MdMenu size={24} className="icon-menu" />
          <div className="brand-text">
            <strong>NHMS</strong>
            <span></span>
          </div>
        </div>
        <nav className="loc-hist-menu">
          <div className="menu-item">
            <Link to="/dashboard-don" className="menu-link">
              <MdDashboard size={22} /> <span>Dashboard</span>
            </Link>
          </div>
          <div className="menu-item active">
            <Link to="/resident-list" className="menu-link">
              <MdPeople size={22} /> <span>Residents</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/care-planning" className="menu-link">
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
        <div className="loc-hist-footer-menu">
          <div className="menu-item">
            <div className="menu-link">
              {" "}
              <MdLogout size={18} /> Logout
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="loc-hist-main">
        {/* HEADER TOP (Profile đổi thành Denise Carter - DON) */}
        <header className="loc-hist-header-top">
          <div className="header-left"></div>
          <div className="header-right">
            <MdNotificationsNone className="icon-action" size={26} />
            <MdHelpOutline className="icon-action" size={26} />
            <div className="user-profile">
              <MdAccountCircle size={34} color="#94a3b8" />
              <div className="user-info">
                <span className="user-name">Denise Carter</span>
                <span className="user-role">DON</span>
              </div>
              <MdArrowDropDown size={20} color="#475569" />
            </div>
          </div>
        </header>

        {/* WORKSPACE */}
        <div className="loc-hist-workspace">
          <div className="loc-hist-container">
            <div className="breadcrumb">
              Residents &gt; Robert Hayes &gt; LOC
            </div>

            {/* PAGE TITLE */}
            <div className="page-header-block">
              <h1>LOC History — Robert Hayes</h1>
              <p>3 classification events · sorted newest first</p>
            </div>

            {/* BẢNG LỊCH SỬ LOC */}
            <div className="table-card">
              <table className="loc-hist-table">
                <thead>
                  <tr>
                    <th>Date ▼</th>
                    <th>Action</th>
                    <th>Previous Tier</th>
                    <th>New Tier</th>
                    <th>Actor</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dòng 1 */}
                  <tr>
                    <td className="text-muted-dark">2026-04-05</td>
                    <td className="fw-bold text-blue">Confirmed</td>
                    <td>
                      <span className="badge-tier level-3">Level 3</span>
                    </td>
                    <td>
                      <span className="badge-tier level-3">Level 3</span>
                    </td>
                    <td className="text-muted-dark">Anna Lee, RN</td>
                    <td className="text-muted">No change — reassessment v3</td>
                  </tr>

                  {/* Dòng 2 */}
                  <tr>
                    <td className="text-muted-dark">2026-01-08</td>
                    <td className="fw-bold text-blue">Confirmed</td>
                    <td>
                      <span className="badge-tier level-2">Level 2</span>
                    </td>
                    <td>
                      <span className="badge-tier level-3">Level 3</span>
                    </td>
                    <td className="text-muted-dark">Anna Lee, RN</td>
                    <td className="text-muted">Suggested tier accepted</td>
                  </tr>

                  {/* Dòng 3 */}
                  <tr>
                    <td className="text-muted-dark">2025-11-02</td>
                    <td className="fw-bold text-blue">Overridden</td>
                    <td>
                      <span className="badge-tier level-1">Level 1</span>
                    </td>
                    <td>
                      <span className="badge-tier level-2">Level 2</span>
                    </td>
                    <td className="fw-bold text-dark">Denise Carter, DON</td>
                    <td className="text-muted">
                      Post-fall mobility decline — raised to Level 2
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* AUDIT LOG NOTE */}
            <div className="audit-note-card">
              <p className="fw-bold text-dark mb-4">
                Every LOC confirm/override event is immutable and timestamped
                (audit log).
              </p>
              <p className="text-muted">
                DON-only view — Nurse sees current tier on Profile Overview.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocHistory;

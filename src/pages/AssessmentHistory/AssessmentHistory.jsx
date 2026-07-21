import React from "react";
import { Link } from "react-router-dom";
import "./AssessmentHistory.css";
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

const AssessmentHistory = () => {
  return (
    <div className="assess-hist-layout">
      {/* SIDEBAR */}
      <aside className="assess-hist-sidebar">
        <div className="assess-hist-brand">
          <MdMenu size={24} className="icon-menu" />
          <div className="brand-text">
            <strong>NHMS</strong>
            <span></span>
          </div>
        </div>
        <nav className="assess-hist-menu">
          <div className="menu-item">
            <Link to="/dashboard-nurse" className="menu-link">
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
        <div className="assess-hist-footer-menu">
          <div className="menu-item">
            <div className="menu-link">
              {" "}
              <MdLogout /> Logout
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="assess-hist-main">
        {/* HEADER TOP */}
        <header className="assess-hist-header-top">
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
        <div className="assess-hist-workspace">
          <div className="assess-hist-container">
            <div className="breadcrumb">
              Residents &gt; Robert Hayes &gt; Assessments
            </div>

            {/* PAGE TITLE & ACTIONS */}
            <div className="page-header-flex">
              <div className="title-section">
                <h1>Assessment History — Robert Hayes</h1>
                <p>3 assessments on record · sorted newest first</p>
              </div>
              <div className="action-section">
                <button className="btn-secondary">Select 2 to Compare</button>
                <button className="btn-primary">+ New</button>
              </div>
            </div>

            {/* BẢNG LỊCH SỬ (TABLE) */}
            <div className="table-card">
              <table className="assess-table">
                <thead>
                  <tr>
                    <th>Version</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Author</th>
                    <th>ADL Score</th>
                    <th>LOC Tier</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dòng 1: v3 */}
                  <tr>
                    <td className="fw-bold">v3</td>
                    <td>
                      <span className="badge-type reassessment">
                        Reassessment
                      </span>
                    </td>
                    <td>2026-04-05</td>
                    <td>Anna Lee, RN</td>
                    <td>20 / 32</td>
                    <td>
                      <span className="badge-tier level-3">Level 3</span>
                    </td>
                    <td className="text-right">
                      <span className="action-link current">
                        Current · View
                      </span>
                    </td>
                  </tr>

                  {/* Dòng 2: v2 */}
                  <tr>
                    <td className="fw-bold">v2</td>
                    <td>
                      <span className="badge-type reassessment">
                        Reassessment
                      </span>
                    </td>
                    <td>2026-01-08</td>
                    <td>Anna Lee, RN</td>
                    <td>17 / 32</td>
                    <td>
                      <span className="badge-tier level-3">Level 3</span>
                    </td>
                    <td className="text-right">
                      <span className="action-link">View · Compare</span>
                    </td>
                  </tr>

                  {/* Dòng 3: v1 */}
                  <tr>
                    <td className="fw-bold">v1</td>
                    <td>
                      <span className="badge-type initial">Initial</span>
                    </td>
                    <td>2025-11-02</td>
                    <td>Anna Lee, RN</td>
                    <td>14 / 32</td>
                    <td>
                      <span className="badge-tier level-2">Level 2</span>
                    </td>
                    <td className="text-right">
                      <span className="action-link">View · Compare</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* GHI CHÚ BÊN DƯỚI */}
            <div className="cadence-note-card">
              <p className="fw-bold text-dark">
                Reassessment cadence: every 90 days (BR-03) or on Significant
                Change flag (BR-05).
              </p>
              <p className="text-muted">
                Starting a reassessment opens the Initial Assessment form
                pre-filled from version v3.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AssessmentHistory;

import React from "react";
import { Link } from "react-router-dom";
import "./LocClassification.css";
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
  MdCheck,
  MdEdit,
  MdLogout,
} from "react-icons/md";

const LocClassification = () => {
  return (
    <div className="loc-class-layout">
      {/* SIDEBAR (Đã tối ưu khoảng cách và thẻ Link) */}
      <aside className="loc-class-sidebar">
        <div className="loc-class-brand">
          <MdMenu size={24} className="icon-menu" />
          <div className="brand-text">
            <strong>NHMS</strong>
            <span></span>
          </div>
        </div>
        <nav className="loc-class-menu">
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
        <div className="loc-class-footer-menu">
          <div className="menu-item">
            <div className="menu-link">
              {" "}
              <MdLogout size={18} /> Logout
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="loc-class-main">
        {/* HEADER TOP */}
        <header className="loc-class-header-top">
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
        <div className="loc-class-workspace">
          <div className="loc-class-container">
            <div className="breadcrumb">
              Residents &gt; Robert Hayes &gt; LOC
            </div>

            {/* TITLE */}
            <div className="page-title-block">
              <h1>LOC Classification Result — Robert Hayes</h1>
              <p>From Assessment v3 · 2026-04-05</p>
            </div>

            {/* SCORE & SUGGESTION CARDS */}
            <div className="loc-summary-grid">
              <div className="score-card">
                <p className="card-label">ADL Score</p>
                <h2 className="score-value">20 / 32</h2>
              </div>
              <div className="suggestion-card">
                <p className="card-label-highlight">Suggested LOC</p>
                <h2 className="suggestion-value">
                  Level 3 — Extensive Assistance
                </h2>
              </div>
            </div>

            {/* ADL ITEM BREAKDOWN TABLE */}
            <section className="content-card">
              <h3>ADL Item Breakdown</h3>
              <div className="table-responsive">
                <table className="breakdown-table">
                  <thead>
                    <tr>
                      <th>Activity</th>
                      <th>Score</th>
                      <th>Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { act: "Bed Mobility", score: "2 / 4" },
                      { act: "Transfer", score: "3 / 4" },
                      { act: "Locomotion (Walk)", score: "3 / 4" },
                      { act: "Dressing", score: "2 / 4" },
                      { act: "Eating", score: "1 / 4" },
                      { act: "Toilet Use", score: "3 / 4" },
                      { act: "Personal Hygiene", score: "3 / 4" },
                      { act: "Bathing", score: "3 / 4" },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.act}</td>
                        <td className="fw-bold text-dark">{row.score}</td>
                        <td className="text-muted">Initial Assessment v3</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* LOC LEVEL REFERENCE */}
            <section className="content-card">
              <h3 className="section-title-inline">
                LOC Level Reference{" "}
                <span className="title-note">(fixed — not editable here)</span>
              </h3>
              <div className="loc-ref-grid">
                <div className="ref-box level-1">
                  <strong>Level 1</strong>
                  <span>0-8 · Independent</span>
                </div>
                <div className="ref-box level-2">
                  <strong>Level 2</strong>
                  <span>9-16 · Limited Assist.</span>
                </div>
                <div className="ref-box level-3 active-ref">
                  <strong>Level 3</strong>
                  <span>17-24 · Extensive Assist.</span>
                </div>
                <div className="ref-box level-4">
                  <strong>Level 4</strong>
                  <span>25-32 · Total Assistance</span>
                </div>
              </div>
            </section>

            {/* ESTIMATED DAILY RATE */}
            <section className="content-card">
              <p className="card-label-dark">Estimated Daily Rate (Level 3)</p>
              <p className="rate-value">
                $248.00 / day{" "}
                <span className="rate-note">
                  (from LOC Rate Table, read-only)
                </span>
              </p>
            </section>

            {/* ACTIONS */}
            <div className="action-row">
              <button className="btn-confirm-loc">
                <MdCheck size={18} /> Confirm LOC
              </button>
              <button className="btn-override">
                <MdEdit size={16} /> Override
              </button>
              <span className="view-history-link">View LOC History →</span>
            </div>

            {/* CONFIRMATION FOOTER */}
            <div className="confirmation-log">
              <p className="log-main">
                <strong>
                  Confirmed by: Anna Lee, RN · 2026-04-05 10:12 · Action: LOC
                  Confirmed (Level 3)
                </strong>
              </p>
              <p className="log-sub">
                Next step: Care Plan reassessment link (M2-US-07) available from
                this tier change.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocClassification;

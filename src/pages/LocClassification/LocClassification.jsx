import React from "react";
import { useNavigate } from "react-router-dom";
import NurseSidebar from "../../components/Sidebar/NurseSidebar";
import "./LocClassification.css";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdCheck,
  MdEdit,
} from "react-icons/md";

const LocClassification = () => {
  const navigate = useNavigate();

  return (
    <div className="lc-layout">
      {/* SIDEBAR  */}
      <NurseSidebar />

      {/* MAIN CONTENT */}
      <main className="lc-main">
        {/* HEADER TOP */}
        <header className="lc-header-top">
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
        <div className="lc-workspace">
          <div className="lc-container">
            {/* BREADCRUMB */}
            <div className="lc-breadcrumb">
              Residents &gt; Robert Hayes &gt; LOC
            </div>

            {/* PROFILE HEADER BLOCK (Đã thêm vào) */}
            <div className="lc-profile-header">
              <div className="lc-profile-left">
                <div className="lc-avatar">RH</div>
                <div className="lc-profile-info">
                  <h1>Robert Hayes</h1>
                  <p className="lc-meta-text">
                    DOB 04/15/1943 · Room 204B · Resident ID RES-00089
                  </p>
                  <div className="lc-badges-row">
                    <span className="lc-badge badge-green-outline">Active</span>
                    <span className="lc-badge badge-green-outline">No DNR</span>
                    <span className="lc-badge badge-yellow-outline">
                      Level 3
                    </span>
                    <span className="lc-badge badge-gray-outline">
                      Medicaid
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* TABS NAVIGATION */}
            <div className="lc-tabs-nav">
              <div
                className="lc-tab"
                onClick={() => navigate("/resident/detail")}
              >
                Overview
              </div>
              <div
                className="lc-tab"
                onClick={() => navigate("/assessment/history")}
              >
                Assessments
              </div>
              <div
                className="lc-tab"
                onClick={() => navigate("/careplan/detail")}
              >
                Care Plan
              </div>
              <div className="lc-tab disabled">
                eMAR <span className="tab-badge-soon">soon</span>
              </div>
              <div className="lc-tab lc-tab-active">LOC</div>
              <div className="lc-tab disabled">
                Audit <span className="tab-badge-soon">soon</span>
              </div>
            </div>

            {/* TITLE */}
            <div className="lc-page-title-block">
              <h2>Classification Result</h2>
              <p>From Assessment v3 · 04/05/2026</p>
            </div>

            {/* SCORE & SUGGESTION CARDS */}
            <div className="lc-summary-grid">
              <div className="lc-score-card">
                <p className="lc-card-label">ADL Score</p>
                <h3 className="lc-score-value">20 / 32</h3>
              </div>
              <div className="lc-suggestion-card">
                <p className="lc-card-label-highlight">Suggested LOC</p>
                <h3 className="lc-suggestion-value">
                  Level 3 — Extensive Assistance
                </h3>
              </div>
            </div>

            {/* ADL ITEM BREAKDOWN TABLE */}
            <section className="lc-content-card">
              <h4 className="lc-section-title">ADL Item Breakdown</h4>
              <div className="lc-table-responsive">
                <table className="lc-breakdown-table">
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
                        <td className="text-dark-medium">{row.act}</td>
                        <td className="fw-bold text-dark">{row.score}</td>
                        <td className="text-muted-italic">
                          Initial Assessment v3
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* LOC LEVEL REFERENCE  */}
            <section className="lc-content-card border-none">
              <h4 className="lc-section-title-inline">
                LOC Level Reference{" "}
                <span className="lc-title-note">
                  (fixed — not editable here)
                </span>
              </h4>
              <div className="lc-ref-grid">
                <div className="lc-ref-box level-1">
                  <strong>Level 1</strong>
                  <span>0-8 · Independent</span>
                </div>
                <div className="lc-ref-box level-2">
                  <strong>Level 2</strong>
                  <span>9-16 · Limited Assist.</span>
                </div>
                <div className="lc-ref-box level-3 active-ref">
                  <strong>Level 3</strong>
                  <span>17-24 · Extensive Assist.</span>
                </div>
                <div className="lc-ref-box level-4">
                  <strong>Level 4</strong>
                  <span>25-32 · Total Assistance</span>
                </div>
              </div>
            </section>

            {/* ESTIMATED DAILY RATE */}
            <section className="lc-rate-section">
              <p className="lc-rate-label">Estimated Daily Rate (Level 3)</p>
              <p className="lc-rate-value">
                $248.00 / day{" "}
                <span className="lc-rate-note">
                  (from LOC Rate Table, read-only)
                </span>
              </p>
            </section>

            {/* ACTIONS */}
            <div className="lc-action-row">
              <span
                className="action-link"
                onClick={() => navigate("/careplan/create")}
                style={{ cursor: "pointer" }} // Đảm bảo chuột biến thành hình bàn tay khi trỏ vào
              >
                <button className="lc-btn-confirm">
                  <MdCheck size={18} /> Confirm LOC
                </button>
              </span>
              <button className="lc-btn-override">
                <MdEdit size={16} /> Override
              </button>
              <span
                className="lc-view-history-link"
                onClick={() => navigate("/loc/history")}
              >
                View LOC History &rarr;
              </span>
            </div>

            {/* CONFIRMATION FOOTER */}
            <div className="lc-confirmation-log">
              <p className="lc-log-main">
                Confirmed by: Anna Lee, RN · 04/05/2026 10:12 · Action: LOC
                Confirmed (Level 3)
              </p>
              <p className="lc-log-sub">
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

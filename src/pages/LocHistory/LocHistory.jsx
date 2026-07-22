import React from "react";
import { useNavigate } from "react-router-dom";
import NurseSidebar from "../../components/Sidebar/NurseSidebar";
import "./LocHistory.css";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
} from "react-icons/md";

const LocHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="lh-layout">
      {/* SIDEBAR */}
      <NurseSidebar />

      {/* MAIN CONTENT */}
      <main className="lh-main">
        {/* HEADER TOP */}
        <header className="lh-header-top">
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
        <div className="lh-workspace">
          <div className="lh-container">
            <div className="lh-breadcrumb">
              Residents &gt; Robert Hayes &gt; LOC
            </div>

            {/* PROFILE HEADER */}
            <div className="lh-profile-header">
              <div className="lh-profile-left">
                <div className="lh-avatar">RH</div>
                <div className="lh-profile-info">
                  <h1>Robert Hayes</h1>
                  <p className="lh-meta-text">
                    DOB 04/15/1943 · Room 204B · Resident ID RES-00089
                  </p>
                  <div className="lh-badges-row">
                    <span className="lh-badge badge-green-outline">Active</span>
                    <span className="lh-badge badge-green-outline">No DNR</span>
                    <span className="lh-badge badge-yellow-outline">
                      Level 3
                    </span>
                    <span className="lh-badge badge-gray-outline">
                      Medicaid
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* TABS NAVIGATION  */}
            <div className="lh-tabs-nav">
              <div
                className="lh-tab"
                onClick={() => navigate("/resident/detail")}
              >
                Overview
              </div>
              <div
                className="lh-tab"
                onClick={() => navigate("/assessment/history")}
              >
                Assessments
              </div>
              <div
                className="lh-tab"
                onClick={() => navigate("/careplan/detail")}
              >
                Care Plan
              </div>
              <div className="lh-tab disabled">
                eMAR <span className="tab-badge-soon">soon</span>
              </div>
              <div
                className="lh-tab lh-tab-active"
                onClick={() => navigate("/loc/classification")}
              >
                LOC
              </div>
              <div className="lh-tab disabled">
                Audit <span className="tab-badge-soon">soon</span>
              </div>
            </div>

            {/* PAGE TITLE */}
            <div className="lh-page-header-block">
              <span className="lh-record-count">
                3 classification events · sorted newest first
              </span>
            </div>

            {/* LOC HISTORT */}
            <div className="lh-table-card">
              <table className="lh-table">
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
                  {/*  */}
                  <tr>
                    <td className="text-muted-dark">04/05/2026</td>
                    <td className="fw-bold text-blue">Confirmed</td>
                    <td>
                      <span className="lh-badge-tier level-3">Level 3</span>
                    </td>
                    <td>
                      <span className="lh-badge-tier level-3">Level 3</span>
                    </td>
                    <td className="text-muted-dark">Anna Lee, RN</td>
                    <td className="text-muted">No change — reassessment v3</td>
                  </tr>

                  {/* Dòng 2 */}
                  <tr>
                    <td className="text-muted-dark">01/08/2026</td>
                    <td className="fw-bold text-blue">Confirmed</td>
                    <td>
                      <span className="lh-badge-tier level-2">Level 2</span>
                    </td>
                    <td>
                      <span className="lh-badge-tier level-3">Level 3</span>
                    </td>
                    <td className="text-muted-dark">Anna Lee, RN</td>
                    <td className="text-muted">Suggested tier accepted</td>
                  </tr>

                  {/* Dòng 3 */}
                  <tr>
                    <td className="text-muted-dark">11/02/2025</td>
                    <td className="fw-bold text-blue">Overridden</td>
                    <td>
                      <span className="lh-badge-tier level-1">Level 1</span>
                    </td>
                    <td>
                      <span className="lh-badge-tier level-2">Level 2</span>
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
            <div className="lh-audit-note-card">
              <p className="fw-bold text-dark lh-mb-4">
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

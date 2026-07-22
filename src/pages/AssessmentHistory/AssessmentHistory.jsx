import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NurseSidebar from "../../components/Sidebar/NurseSidebar";
import "./AssessmentHistory.css";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdAdd,
} from "react-icons/md";

const AssessmentHistory = () => {
  const [activeTab, setActiveTab] = useState("Assessments");
  const navigate = useNavigate();

  const assessmentsData = [
    {
      version: "v3",
      type: "Reassessment",
      typeColor: "purple",
      date: "04/05/2026",
      author: "Anna Lee, RN",
      score: "20 / 32",
      loc: "Level 3",
      locColor: "yellow-outline",
      action: "Current · View",
    },
    {
      version: "v2",
      type: "Reassessment",
      typeColor: "purple",
      date: "01/08/2026",
      author: "Anna Lee, RN",
      score: "17 / 32",
      loc: "Level 3",
      locColor: "yellow-outline",
      action: "View · Compare",
    },
    {
      version: "v1",
      type: "Initial",
      typeColor: "blue",
      date: "11/02/2025",
      author: "Anna Lee, RN",
      score: "14 / 32",
      loc: "Level 2",
      locColor: "blue-outline",
      action: "View · Compare",
    },
  ];

  return (
    <div className="ah-layout">
      {/* 1. SIDEBAR DÙNG CHUNG */}
      <NurseSidebar />

      {/* 2. MAIN CONTENT */}
      <main className="ah-main">
        {/* HEADER TOP */}
        <header className="ah-header-top">
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
        <div className="ah-workspace">
          <div className="ah-container">
            {/* BREADCRUMB */}
            <div className="ah-breadcrumb">
              Residents &gt; Robert Hayes &gt; Assessments
            </div>

            {/* PROFILE HEADER BLOCK (Khôi phục lại phần bị thiếu) */}
            <div className="ah-profile-header">
              <div className="ah-profile-left">
                <div className="ah-avatar">RH</div>
                <div className="ah-profile-info">
                  <h1>Robert Hayes</h1>
                  <p className="ah-meta-text">
                    DOB 04/15/1943 · Room 204B · Resident ID RES-00089
                  </p>
                  <div className="ah-badges-row">
                    <span className="ah-badge badge-green-outline">Active</span>
                    <span className="ah-badge badge-green-outline">No DNR</span>
                    <span className="ah-badge badge-yellow-outline">
                      Level 3
                    </span>
                    <span className="ah-badge badge-gray-outline">
                      Medicaid
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* TABS NAVIGATION (Khôi phục lại phần bị thiếu) */}
            <div className="ah-tabs-nav">
              <div
                className={`ah-tab ${activeTab === "Overview" ? "ah-tab-active" : ""}`}
                onClick={() => navigate("/resident/detail")}
              >
                Overview
              </div>

              <div
                className={`ah-tab ${activeTab === "Assessments" ? "ah-tab-active" : ""}`}
                onClick={() => setActiveTab("Assessments")}
              >
                Assessments
              </div>
              <div
                className={`ah-tab ${activeTab === "Care Plan" ? "ah-tab-active" : ""}`}
                onClick={() => navigate("/careplan/detail")}
              >
                Care Plan
              </div>
              <div className="ah-tab disabled">
                eMAR <span className="tab-badge-soon">soon</span>
              </div>
              <div
                className={`ah-tab ${activeTab === "LOC" ? "ah-tab-active" : ""}`}
                onClick={() => navigate("/loc/classification")}
              >
                LOC
              </div>
              <div className="ah-tab disabled">
                Audit <span className="tab-badge-soon">soon</span>
              </div>
            </div>

            {/* CÔNG CỤ TOOLBAR BẢNG */}
            <div className="ah-table-toolbar">
              <span className="ah-record-count">
                3 assessments on record · sorted newest first
              </span>
              <div className="ah-toolbar-actions">
                <button className="ah-btn-outline">Select 2 to Compare</button>
                <button className="ah-btn-primary">
                  <MdAdd size={18} /> New
                </button>
              </div>
            </div>

            {/* BẢNG DỮ LIỆU LỊCH SỬ */}
            <div className="ah-table-card">
              <table className="ah-table">
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
                  {assessmentsData.map((item, idx) => (
                    <tr key={idx}>
                      <td className="fw-bold">{item.version}</td>
                      <td>
                        <span className={`ah-badge-solid bg-${item.typeColor}`}>
                          {item.type}
                        </span>
                      </td>
                      <td>{item.date}</td>
                      <td>{item.author}</td>
                      <td>{item.score}</td>
                      <td>
                        <span className={`ah-badge badge-${item.locColor}`}>
                          {item.loc}
                        </span>
                      </td>
                      <td className="text-right">
                        <Link to="#" className="ah-link-action">
                          {item.action}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* THÔNG TIN HƯỚNG DẪN BÊN DƯỚI */}
            <div className="ah-info-card">
              <h4>
                Reassessment cadence: every 90 days (BR-03) or on Significant
                Change flag (BR-05).
              </h4>
              <p>
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

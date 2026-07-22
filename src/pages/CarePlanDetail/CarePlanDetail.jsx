import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NurseSidebar from "../../components/Sidebar/NurseSidebar";
import "./CarePlanDetail.css";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
} from "react-icons/md";

// (MOCK DATA) Giữ nguyên của bạn
const mockTimelineData = [
  {
    id: 1,
    title: "Vitals recorded (SpO2 flagged)",
    actor: "Marcus Rivera, CNA",
    time: "07/02/2026 14:05",
    isLatest: true,
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
  const navigate = useNavigate(); // Khởi tạo hàm chuyển trang

  return (
    <div className="cpd-layout">
      {/* 1. SIDEBAR DÙNG CHUNG */}
      <NurseSidebar />

      {/* 2. MAIN CONTENT */}
      <main className="cpd-main">
        {/* HEADER TOP */}
        <header className="cpd-header-top">
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
        <div className="cpd-workspace">
          <div className="cpd-container">
            <div className="cpd-breadcrumb">
              Care Planning &gt; Detail &gt; Robert Hayes
            </div>

            {/* PROFILE HEADER */}
            <div className="cpd-profile-header">
              <div className="cpd-profile-left">
                <div className="cpd-avatar">RH</div>
                <div className="cpd-profile-info">
                  <h1>Robert Hayes</h1>
                  <p className="cpd-meta-text">
                    DOB 04/15/1943 · Room 204B · Resident ID RES-00089
                  </p>
                  <div className="cpd-badges-row">
                    <span className="cpd-badge badge-green-outline">
                      Active
                    </span>
                    <span className="cpd-badge badge-green-outline">
                      No DNR
                    </span>
                    <span className="cpd-badge badge-yellow-outline">
                      Level 3
                    </span>
                    <span className="cpd-badge badge-gray-outline">
                      Medicaid
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* TABS NAVIGATION (Có gắn Link chuyển hướng) */}
            <div className="cpd-tabs-nav">
              <div
                className="cpd-tab"
                onClick={() => navigate("/resident/detail")}
              >
                Overview
              </div>
              <div
                className="cpd-tab"
                onClick={() => navigate("/assessment/history")}
              >
                Assessments
              </div>
              <div className="cpd-tab cpd-tab-active">Care Plan</div>
              <div className="cpd-tab disabled">
                eMAR <span className="tab-badge-soon">soon</span>
              </div>
              <div
                className="cpd-tab"
                onClick={() => navigate("/loc/classification")}
              >
                LOC
              </div>
              <div className="cpd-tab disabled">
                Audit <span className="tab-badge-soon">soon</span>
              </div>
            </div>

            {/* SUB-HEADER INFO */}
            <div className="cpd-sub-header-info">
              Room 204B · LOC Tier 3 · Next review 07/07/2026
            </div>

            {/* MAIN GRID */}
            <div className="cpd-grid-layout">
              {/* LEFT COLUMN */}
              <div className="cpd-left-column">
                <h3 className="cpd-section-title">Care Areas</h3>

                {/* Care Area Cards */}
                <div className="cpd-care-area-card">
                  <div className="cpd-card-top-row">
                    <h4>Mobility</h4>
                    <span className="cpd-status-outline green-outline">
                      On Track
                    </span>
                  </div>
                  <p className="cpd-goal-text">
                    Goal: Ambulate 50 ft with walker x2/day.
                  </p>
                  <div className="cpd-task-bullet">
                    <span className="cpd-blue-dot"></span> Assist ambulation w/
                    walker, 2x daily.
                  </div>
                </div>

                <div className="cpd-care-area-card">
                  <div className="cpd-card-top-row">
                    <h4>Skin Integrity</h4>
                    <span className="cpd-status-outline yellow-outline">
                      At Risk
                    </span>
                  </div>
                  <p className="cpd-goal-text">
                    Goal: Maintain skin integrity (no stage-2 injury).
                  </p>
                  <div className="cpd-task-bullet">
                    <span className="cpd-blue-dot"></span> Reposition q2h: skin
                    check each shift.
                  </div>
                </div>

                <div className="cpd-care-area-card">
                  <div className="cpd-card-top-row">
                    <h4>Nutrition</h4>
                    <span className="cpd-status-outline green-outline">
                      On Track
                    </span>
                  </div>
                  <p className="cpd-goal-text">
                    Goal: Maintain fluid intake ≥ 1500 mL/day.
                  </p>
                  <div className="cpd-task-bullet">
                    <span className="cpd-blue-dot"></span> Monitor fluid intake;
                    document I/O.
                  </div>
                </div>

                {/* TIMELINE SECTION */}
                <h3 className="cpd-section-title mt-32">
                  Activity (Care Activity Timeline)
                </h3>
                <div className="cpd-timeline-container">
                  {mockTimelineData.map((item, index) => (
                    <div className="cpd-timeline-item" key={item.id}>
                      {/* Vẽ đường line dọc nối các Timeline (trừ item cuối cùng) */}
                      {index !== mockTimelineData.length - 1 && (
                        <div className="cpd-timeline-line"></div>
                      )}

                      <div
                        className={`cpd-timeline-dot ${item.isLatest ? "solid-dot" : "outline-dot"}`}
                      ></div>

                      <div className="cpd-timeline-content">
                        <p
                          className={`cpd-timeline-title ${item.isLatest ? "text-dark-bold" : ""}`}
                        >
                          {item.title}
                        </p>
                        <p className="cpd-timeline-meta">
                          {item.actor} · {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="cpd-right-column">
                {/* Cost Estimate Card */}
                <div className="cpd-side-card">
                  <div className="cpd-side-card-header">
                    <h4>Cost Estimate</h4>
                    <span className="cpd-badge-readonly">read-only</span>
                  </div>
                  <div className="cpd-cost-row">
                    <span className="text-muted-dark">LOC rate (Tier 3)</span>
                    <strong className="text-dark">$248.00 / day</strong>
                  </div>
                  <div className="cpd-cost-row">
                    <span className="text-muted-dark">
                      Room rate (Semi-private)
                    </span>
                    <strong className="text-dark">$185.00 / day</strong>
                  </div>
                  <hr className="cpd-cost-divider" />
                  <div className="cpd-cost-row cpd-total-row">
                    <span>Estimated daily</span>
                    <strong>$433.00</strong>
                  </div>
                  <div className="cpd-cost-row cpd-total-row cpd-large-total">
                    <span>Estimated monthly</span>
                    <strong>$13,163.00</strong>
                  </div>
                  <p className="cpd-card-disclaimer">
                    Simulated — not a billing transaction.
                  </p>
                </div>

                {/* Review Cycle Card */}
                <div className="cpd-side-card">
                  <h4 className="cpd-side-title">Review Cycle</h4>
                  <div className="cpd-cost-row">
                    <span className="text-muted-dark">Last reviewed</span>
                    <strong className="text-dark">04/08/2026</strong>
                  </div>
                  <div className="cpd-cost-row">
                    <span className="text-muted-dark">Next review due</span>
                    <strong className="text-dark">07/07/2026</strong>
                  </div>
                  <div className="cpd-cost-row mt-12">
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

import React, { useState } from "react";
import "./ResidentProfileDetail.css";
import {
  MdEdit,
  MdReportProblem,
  MdAdd,
  MdChevronRight,
  MdDashboard,
  MdPeople,
  MdAssignment,
  MdBarChart,
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdBloodtype,
} from "react-icons/md";
import { Link } from "react-router-dom";

const ResidentProfileDetail = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = [
    "Overview",
    "Assessments",
    "Care Plan",
    "eMAR",
    "LOC",
    "Audit Log",
  ];

  return (
    <div className="detail-page-layout">
      {/* ================= COLUMN 1: SIDEBAR BÊN TRÁI ================= */}
      <aside className="detail-sidebar">
        <div className="sidebar-logo">
          <span className="logo-icon">☰</span>
          <span className="detail-logo-bold">NHMS</span>
        </div>
        <ul className="sidebar-menu">
          <Link to="/dashboard-nurse" className="menu-link">
            <li className="menu-item">
              <MdDashboard /> <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/resident-list" className="menu-link">
            <li className="menu-item active">
              <MdPeople /> <span>Residents</span>
            </li>
          </Link>
          <Link to="/care-planning" className="menu-link">
            <li className="menu-item">
              <MdAssignment /> <span>Care Planning</span>
            </li>
          </Link>
          <li className="menu-item disabled">
            <div className="menu-item-content">
              <MdBloodtype /> <span>eMAR</span>
            </div>
            <span className="badge-soon">soon</span>
          </li>
          <Link to="/incident-risk" className="menu-link">
            <li className="menu-item">
              <MdReportProblem /> <span>Incident & Risk</span>
            </li>
          </Link>
          <Link to="/reports" className="menu-link">
            <li className="menu-item">
              <MdBarChart /> <span>Reports</span>
            </li>
          </Link>
        </ul>
      </aside>

      {/* ================= COLUMN 2: NỘI DUNG CHÍ TIẾT BÊN PHẢI ================= */}
      <main className="detail-main-content">
        <header className="detail-top-header">
          <div className="header-user-actions">
            <MdNotificationsNone className="header-icon" size={22} />
            <MdHelpOutline className="header-icon" size={22} />
            <div className="divider-vertical"></div>
            <div className="user-profile-block">
              <div className="user-avatar-placeholder">
                <MdAccountCircle size={32} />
              </div>
              <div className="user-info-text">
                <span className="user-name">Anna Lee</span>
                <span className="user-role">Nurse</span>
              </div>
              <MdArrowDropDown className="arrow-icon" size={18} />
            </div>
          </div>
        </header>
        <div className="profile-detail-container">
          {/* 1. BREADCRUMB */}
          <div className="breadcrumb">
            <span>Residents</span> <MdChevronRight />{" "}
            <span className="current">Robert Hayes</span>
          </div>

          {/* 2. PROFILE HEADER CARD */}
          <div className="profile-header">
            <div className="avatar-placeholder">RH</div>
            <div className="resident-info">
              <div className="resident-name-row">
                <h2>Robert Hayes</h2>
                <div className="header-actions">
                  <button className="btn-secondary">
                    <MdEdit /> Edit Profile
                  </button>
                  <button className="btn-secondary profile-detail-btn-report">
                    <MdReportProblem /> Report Incident
                  </button>
                  <Link to="/resident/create" className="">
                    <button className="btn-primary">
                      <MdAdd /> New Assessment
                    </button>
                  </Link>
                </div>
              </div>
              <p className="resident-meta">
                DOB <span>04/15/1943</span> • Room <span>204B</span> • Resident
                ID <span>RES-00089</span>
              </p>
              <div className="tag-container">
                <span className="tag active-tag">Active</span>
                <span className="tag dnr-tag">No DNR</span>
                <span className="tag level-tag">Level 3</span>
                <span className="tag medicaid-tag">Medicaid</span>
              </div>
            </div>
          </div>

          {/* 3. TABS NAVIGATION */}
          <div className="tabs-nav">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-item ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 4. MẠNG LƯỚI THÔNG TIN CHÍNH (GRID LAYOUT) */}
          <div className="profile-content-grid">
            {/* CỘT TRÁI CỦA GRID (CHIẾM 2 PHẦN) */}
            <div className="content-column-left">
              {/* Card: Demographics */}
              <div className="info-card">
                <div className="card-header-row">
                  <h3>Demographics</h3>
                  <span className="role-note">
                    Role: Nurse — view + edit clinical fields
                  </span>
                </div>
                <div className="card-body grid-2-col">
                  <div className="info-group">
                    <label>Legal Name</label>
                    <p>Robert William Hayes</p>
                  </div>
                  <div className="info-group">
                    <label>Address</label>
                    <p>48 Cedar Ln, Riverside, CA</p>
                  </div>
                  <div className="info-group">
                    <label>Date of Birth</label>
                    <p>04/15/1943</p>
                  </div>
                  <div className="info-group">
                    <label>Admission Date</label>
                    <p>2025-11-02</p>
                  </div>
                  <div className="info-group">
                    <label>SSN</label>
                    <p>XXX-XX-4471</p>
                  </div>
                  <div className="info-group">
                    <label>Room / Bed</label>
                    <p>204 / B</p>
                  </div>
                  <div className="info-group">
                    <label>Gender</label>
                    <p>Male</p>
                  </div>
                  <div className="info-group">
                    <label>Referral Source</label>
                    <p>Hospital — Sunrise Regional</p>
                  </div>
                  <div className="info-group">
                    <label>Marital Status</label>
                    <p>Widowed</p>
                  </div>
                  <div className="info-group">
                    <label>Emergency Contact</label>
                    <p>Karen Hayes (Daughter)</p>
                  </div>
                  <div className="info-group">
                    <label>Phone</label>
                    <p>(555) 412-6620</p>
                  </div>
                  <div className="info-group">
                    <label>Payer Source</label>
                    <p>Medicaid</p>
                  </div>
                </div>
              </div>

              {/* Card: Authorized Representative */}
              <div className="info-card">
                <h3>Authorized Representative / POA</h3>
                <div className="card-body grid-4-col">
                  <div className="info-group">
                    <label>Name</label>
                    <p>Karen Hayes</p>
                  </div>
                  <div className="info-group">
                    <label>Relationship</label>
                    <p>Daughter</p>
                  </div>
                  <div className="info-group">
                    <label>Contact</label>
                    <p>(555) 887-2201</p>
                  </div>
                  <div className="info-group">
                    <label>DNR Flag</label>
                    <p>No</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI CỦA GRID (CHIẾM 1 PHẦN) */}
            <div className="content-column-right">
              {/* Card: Diagnosis */}
              <div className="info-card">
                <h3>Diagnosis (ICD-10)</h3>
                <ul className="list-styled">
                  <li>Type 2 DM (E11.9)</li>
                  <li>HTN (I10)</li>
                  <li>CKD Stage 3 (N18.3)</li>
                </ul>
              </div>

              {/* Card: Allergies */}
              <div className="info-card">
                <h3>Allergies</h3>
                <div className="allergy-tags">
                  <span className="allergy-tag">Penicillin</span>
                  <span className="allergy-tag">Sulfa drugs</span>
                  <span className="allergy-tag">Latex</span>
                </div>
              </div>

              {/* Card: Insurance / Payer */}
              <div className="info-card">
                <h3>Insurance / Payer</h3>
                <div className="insurance-body">
                  <div className="flex-row-space">
                    <span className="text-label">Medicare Number</span>
                    <span className="text-value">XXX-XX-9021A</span>
                  </div>
                  <div className="flex-row-space">
                    <span className="text-label">Insurance Provider</span>
                    <span className="text-value">Medicaid CA</span>
                  </div>
                  <div className="flex-row-space">
                    <span className="text-label">Payer Name</span>
                    <span className="text-value text-right">
                      CA Dept. of Health Care Svcs
                    </span>
                  </div>
                  <div className="flex-row-space">
                    <span className="text-label">Auth Number</span>
                    <span className="text-value">AUTH-88213</span>
                  </div>
                  <div className="flex-row-space">
                    <span className="text-label">Auth Start / End</span>
                    <span className="text-value">2025-11-02 / 2026-02-09</span>
                  </div>
                </div>
              </div>

              {/* Card: LOC Summary */}
              <div className="info-card">
                <h3>LOC Summary</h3>
                <div className="loc-body">
                  <span className="tag level-tag width-fit">Level 3</span>
                  <p className="loc-score">
                    ADL Score: <strong>20 / 32 (Tier 3)</strong>
                  </p>
                  <button className="btn-link">View LOC History →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResidentProfileDetail;

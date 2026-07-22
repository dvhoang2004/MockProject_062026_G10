import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NurseSidebar from "../../components/Sidebar/NurseSidebar";
import "./ResidentProfileDetail.css";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdEdit,
  MdOutlineWarningAmber,
  MdAdd,
} from "react-icons/md";

const ResidentProfileDetail = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const navigate = useNavigate();

  return (
    <div className="rpd-layout">
      {/* 1. SIDEBAR  */}
      <NurseSidebar />

      {/* 2. MAIN CONTENT */}
      <main className="rpd-main">
        {/* HEADER TOP */}
        <header className="rpd-header-top">
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
        <div className="rpd-workspace">
          <div className="rpd-container">
            {/* BREADCRUMB */}
            <div className="rpd-breadcrumb">Residents &gt; Robert Hayes</div>

            {/* PROFILE HEADER BLOCK */}
            <div className="rpd-profile-header">
              <div className="rpd-profile-left">
                <div className="rpd-avatar">RH</div>
                <div className="rpd-profile-info">
                  <h1>Robert Hayes</h1>
                  <p className="rpd-meta-text">
                    DOB 04/15/1943 · Room 204B · Resident ID RES-00089
                  </p>
                  <div className="rpd-badges-row">
                    <span className="rpd-badge badge-green-outline">
                      Active
                    </span>
                    <span className="rpd-badge badge-green-outline">
                      No DNR
                    </span>
                    <span className="rpd-badge badge-yellow-outline">
                      Level 3
                    </span>
                    <span className="rpd-badge badge-gray-outline">
                      Medicaid
                    </span>
                  </div>
                </div>
              </div>

              <div className="rpd-profile-actions">
                <button className="rpd-btn-outline">
                  <MdEdit size={18} />{" "}
                  <Link to="/resident/create" className="rc-link">
                    Edit Profile
                  </Link>
                </button>
                <button className="rpd-btn-outline">
                  <MdOutlineWarningAmber size={18} /> Report Incident
                </button>
                <button className="rpd-btn-primary">
                  <MdAdd size={18} /> New Assessment
                </button>
              </div>
            </div>

            {/* TABS NAVIGATION */}
            <div className="rpd-tabs-nav">
              <div
                className={`rpd-tab ${activeTab === "Overview" ? "rpd-tab-active" : ""}`}
                onClick={() => setActiveTab("Overview")}
              >
                Overview
              </div>
              <div
                className={`rpd-tab ${activeTab === "Assessments" ? "rpd-tab-active" : ""}`}
                onClick={() => navigate("/assessment/history")}
              >
                Assessments
              </div>
              <div
                className={`rpd-tab ${activeTab === "Care Plan" ? "rpd-tab-active" : ""}`}
                onClick={() => navigate("/careplan/detail")}
              >
                Care Plan
              </div>
              <div className="rpd-tab disabled">
                eMAR <span className="tab-badge-soon">soon</span>
              </div>
              <div
                className={`rpd-tab ${activeTab === "LOC" ? "rpd-tab-active" : ""}`}
                onClick={() => navigate("/loc/classification")}
              >
                LOC
              </div>
              <div className="rpd-tab disabled">
                Audit <span className="tab-badge-soon">soon</span>
              </div>
            </div>

            {/* GRID CONTENT (2 Columns) */}
            <div className="rpd-content-grid">
              {/* CỘT TRÁI (LEFT COLUMN ) */}
              <div className="rpd-col-left">
                {/* Card: Demographics */}
                <div className="rpd-card">
                  <div className="rpd-card-header">
                    <h2>Demographics</h2>
                    <span className="rpd-role-note">
                      Role: Nurse — view + edit clinical fields
                    </span>
                  </div>
                  <div className="rpd-card-body rpd-grid-2">
                    <div className="rpd-info-group">
                      <label>Legal Name</label>
                      <p className="fw-bold">Robert William Hayes</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>Address</label>
                      <p className="fw-bold">48 Cedar Ln, Riverside, CA</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>Date of Birth</label>
                      <p className="fw-bold">04/15/1943</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>Admission Date</label>
                      <p className="fw-bold">11/02/2025</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>SSN</label>
                      <p className="fw-bold">XXX-XX-4471</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>Room / Bed</label>
                      <p className="fw-bold">204 / B</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>Gender</label>
                      <p className="fw-bold">Male</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>Referral Source</label>
                      <p className="fw-bold">Hospital — Sunrise Regional</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>Marital Status</label>
                      <p className="fw-bold">Widowed</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>Emergency Contact</label>
                      <p className="fw-bold">Karen Hayes (Daughter)</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>Phone</label>
                      <p className="fw-bold">(555) 412-6620</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>Payer Source</label>
                      <p className="fw-bold">Medicaid</p>
                    </div>
                  </div>
                </div>

                {/* Card: Authorized Representative */}
                <div className="rpd-card">
                  <div className="rpd-card-header">
                    <h2>Authorized Representative / POA</h2>
                  </div>
                  <div className="rpd-card-body rpd-grid-4">
                    <div className="rpd-info-group">
                      <label>Name</label>
                      <p className="fw-bold">Karen Hayes</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>Relationship</label>
                      <p className="fw-bold">Daughter</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>Contact</label>
                      <p className="fw-bold">(555) 887-2201</p>
                    </div>
                    <div className="rpd-info-group">
                      <label>DNR Flag</label>
                      <p className="fw-bold">No</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CỘT PHẢI (RIGHT COLUMN - Hẹp hơn) */}
              <div className="rpd-col-right">
                {/* Card: Diagnosis */}
                <div className="rpd-card">
                  <div className="rpd-card-header">
                    <h2>Diagnosis (ICD-10)</h2>
                  </div>
                  <div className="rpd-card-body">
                    <ul className="rpd-list-bullet">
                      <li>Type 2 DM (E11.9)</li>
                      <li>HTN (I10)</li>
                      <li>CKD Stage 3 (N18.3)</li>
                    </ul>
                  </div>
                </div>

                {/* Card: Allergies */}
                <div className="rpd-card">
                  <div className="rpd-card-header">
                    <h2>Allergies</h2>
                  </div>
                  <div className="rpd-card-body">
                    <div className="rpd-allergy-tags">
                      <span className="rpd-tag-red">Penicillin</span>
                      <span className="rpd-tag-red">Sulfa drugs</span>
                      <span className="rpd-tag-red">Latex</span>
                    </div>
                  </div>
                </div>

                {/* Card: Insurance / Payer */}
                <div className="rpd-card">
                  <div className="rpd-card-header">
                    <h2>Insurance / Payer</h2>
                  </div>
                  <div className="rpd-card-body rpd-flex-col gap-12">
                    <div className="rpd-row-between">
                      <span className="text-muted">Medicare Number</span>
                      <span className="fw-bold">XXX-XX-9021A</span>
                    </div>
                    <div className="rpd-row-between">
                      <span className="text-muted">Insurance Provider</span>
                      <span className="fw-bold">Medicaid CA</span>
                    </div>
                    <div className="rpd-row-between">
                      <span className="text-muted">Payer Name</span>
                      <span className="fw-bold text-right">
                        CA Dept. of Health Care Svcs
                      </span>
                    </div>
                    <div className="rpd-row-between">
                      <span className="text-muted">Auth Number</span>
                      <span className="fw-bold">AUTH-88213</span>
                    </div>
                    <div className="rpd-row-between">
                      <span className="text-muted">Auth Start / End</span>
                      <span className="fw-bold">11/02/2025 / 02/09/2026</span>
                    </div>
                  </div>
                </div>

                {/* Card: LOC Summary */}
                <div className="rpd-card">
                  <div className="rpd-card-header">
                    <h2>LOC Summary</h2>
                  </div>
                  <div className="rpd-card-body rpd-flex-col gap-12 align-start">
                    <span className="rpd-badge badge-yellow-outline width-fit">
                      Level 3
                    </span>
                    <p className="rpd-loc-score">
                      ADL Score: <strong>20 / 32 (Tier 3)</strong>
                    </p>
                    <span
                      className="rpd-link-action"
                      onClick={() => navigate("/loc/history")}
                      style={{ cursor: "pointer" }}
                    >
                      View LOC History &rarr;
                    </span>
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

export default ResidentProfileDetail;

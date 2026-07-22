import React from "react";
import "./AdmissionForm.css";
import NurseSidebar from "../../components/Sidebar/NurseSidebar";
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
  MdSave,
  MdLogout,
  MdDashboard,
} from "react-icons/md";
import { Link } from "react-router-dom";

const AdmissionForm = () => {
  return (
    <div className="adm-form-layout">
      {/* SIDEBAR */}
      <NurseSidebar />

      {/* MAIN CONTENT */}
      <main className="adm-form-main">
        {/* HEADER TOP */}
        <header className="adm-form-header-top">
          <div className="header-left"></div>
          <div className="header-right">
            <MdNotificationsNone className="icon-action" size={26} />
            <MdHelpOutline className="icon-action" size={26} />
            <div className="user-profile">
              <MdAccountCircle size={34} color="#94a3b8" />
              <div className="user-info">
                <span className="user-name">Priya Shah</span>
                <span className="user-role">Admission Staff</span>
              </div>
              <MdArrowDropDown size={20} color="#475569" />
            </div>
          </div>
        </header>

        {/* WORKSPACE */}
        <div className="adm-form-workspace">
          <div className="adm-form-container">
            <div className="breadcrumb">Residents &gt; New Admission Flow</div>

            {/* STEPPER (Cập nhật trạng thái Bước 2) */}
            <div className="adm-form-stepper">
              <div className="step-item completed">1 Pre-Screening ✓</div>
              <div className="step-item active">2 Admission Form</div>
              <div className="step-item">3 Initial Assessment</div>
            </div>

            {/* PAGE TITLE & READ-ONLY INFO */}
            <div className="page-title-block">
              <h1>Step 2: Admission Form</h1>
              <div className="read-only-banner">
                <div className="ro-left">
                  <p>Resident: Elena Ramos · DOB 03/12/1948</p>
                  <p>Referral: Hospital — Sunrise Regional</p>
                </div>
                <div className="ro-right">(auto-populated, read-only)</div>
              </div>
            </div>

            {/* GRID LAYOUT CHÍNH */}
            <div className="adm-form-grid-layout">
              {/* CỘT TRÁI */}
              <div className="left-column">
                {/* 1. Admission Details */}
                <section className="content-card">
                  <h3>Admission Details</h3>
                  <div className="adm-input-grid-2">
                    <div className="adm-input-group">
                      <label>
                        Admission Date <span className="req">*</span>
                      </label>
                      <input type="text" defaultValue="2025-11-02" />
                    </div>
                    <div className="adm-input-group">
                      <label>
                        Room Assignment <span className="req">*</span>
                      </label>
                      <input type="text" defaultValue="106-A (available)" />
                    </div>
                  </div>
                </section>

                {/* 2. Payer Source */}
                <section className="content-card">
                  <h3>Payer Source</h3>
                  <div className="adm-input-grid-2">
                    <div className="adm-input-group">
                      <label>
                        Payer Source <span className="req">*</span>
                      </label>
                      <input type="text" defaultValue="Medicare" />
                    </div>
                    <div className="adm-input-group">
                      <label>Payer Name</label>
                      <input type="text" defaultValue="Medicare Part A/B" />
                    </div>
                  </div>
                </section>

                {/* 3. Care Team in Charge */}
                <section className="content-card">
                  <h3>Care Team in Charge</h3>
                  <div className="adm-input-grid-2 mb-16">
                    <div className="adm-input-group">
                      <label>
                        Physician in Charge <span className="req">*</span>
                      </label>
                      <input type="text" defaultValue="Dr. Alan Cho, MD" />
                    </div>
                    <div className="adm-input-group">
                      <label>
                        Nurse in Charge <span className="req">*</span>
                      </label>
                      <input type="text" defaultValue="Anna Lee, RN" />
                    </div>
                  </div>
                  <div className="adm-input-grid-2">
                    <div className="adm-input-group">
                      <label>Physician License / NPI</label>
                      <input
                        type="text"
                        defaultValue="CA-MD-88231 / 1720493857"
                      />
                    </div>
                    <div className="adm-input-group">
                      <label>Order Date / Time</label>
                      <input type="text" defaultValue="2025-11-02 09:15" />
                    </div>
                  </div>
                </section>

                {/* 4. Signed Consents */}
                <section className="content-card">
                  <h3>Signed Consents (required before submission)</h3>

                  <div className="consent-verification-method">
                    <span className="method-label">Verification method:</span>
                    <label className="radio-label">
                      <input type="radio" name="verify" defaultChecked />{" "}
                      e-Signature popup
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="verify" /> Upload scanned
                      document
                    </label>
                  </div>

                  <div className="adm-input-grid-2 consent-checkboxes">
                    <div className="checkbox-column">
                      <label className="custom-consent-check">
                        <input type="checkbox" defaultChecked />
                        <span>
                          Admission Agreement{" "}
                          <span className="badge-req">Required</span>
                        </span>
                      </label>
                      <label className="custom-consent-check">
                        <input type="checkbox" />
                        <span>
                          Financial Responsibility Agree{" "}
                          <span className="badge-req">Required</span>
                        </span>
                      </label>
                      <label className="custom-consent-check">
                        <input type="checkbox" />
                        <span>
                          Arbitration Agreement{" "}
                          <span className="badge-req">Required</span>
                        </span>
                      </label>
                    </div>
                    <div className="checkbox-column">
                      <label className="custom-consent-check">
                        <input type="checkbox" defaultChecked />
                        <span>
                          HIPAA Notice of Privacy Pract{" "}
                          <span className="badge-req">Required</span>
                        </span>
                      </label>
                      <label className="custom-consent-check">
                        <input type="checkbox" />
                        <span>
                          Advance Directive Acknowled{" "}
                          <span className="badge-req">Required</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </section>
              </div>

              {/* CỘT PHẢI */}
              <div className="right-column">
                <section className="content-card">
                  <h3>Role</h3>
                  <p className="role-title">Admission Staff</p>
                  <p className="role-desc">
                    Completes admission + consent capture only.
                  </p>
                </section>

                <section className="content-card">
                  <h3>Order Accountability (A-21)</h3>
                  <div className="accountability-info">
                    <p>Physician: Dr. Alan Cho, MD</p>
                    <p>State License: CA-MD-88231</p>
                    <p>NPI: 1720493857</p>
                    <p className="text-muted mt-8">
                      e-Sign recorded in audit log.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER ACTION */}
        <footer className="adm-form-action-footer">
          <button className="btn-back">← Back</button>
          <div className="footer-right-actions">
            <button className="btn-save-draft">
              <MdSave size={16} /> Save Draft
            </button>
            <Link to="/initial-assessment">
              <button className="btn-confirm">Confirm Admission</button>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AdmissionForm;

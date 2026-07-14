import React from "react";
import "./PreAdmission.css";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdMenu,
  MdCheckCircleOutline,
  MdErrorOutline,
  MdHome,
  MdPeople,
  MdAssignment,
  MdBloodtype,
  MdReportProblem,
  MdBarChart,
  MdDashboard,
  MdLogout,
} from "react-icons/md";

const PreAdmissionScreening = () => {
  return (
    <div className="pre-adm-layout">
      {/* SIDEBAR BÊN TRÁI */}
      <aside className="pre-adm-sidebar">
        <div className="pre-adm-brand">
          <MdMenu size={24} className="icon-menu" />
          <div className="brand-text">
            <strong>NHMS</strong>
            <span></span>
          </div>
        </div>
        <nav className="pre-adm-menu">
          <div className="menu-item">
            <MdDashboard size={22} /> <span>Dashboard</span>
          </div>
          {/* Nút Residents đang active */}
          <div className="menu-item active">
            <MdPeople size={22} /> <span>Residents</span>
          </div>
          <div className="menu-item">
            <MdAssignment size={22} /> <span>Care Planning</span>
          </div>
          <div className="menu-item disabled">
            <MdBloodtype size={22} /> <span>eMAR</span>
            <span className="badge-soon">soon</span>
          </div>
          <div className="menu-item">
            <MdReportProblem size={22} /> <span>Incident & Risk</span>
          </div>
          <div className="menu-item">
            <MdBarChart size={22} /> <span>Reports</span>
          </div>
        </nav>
        <div className="pre-adm-footer-menu">
          <div className="menu-item">
            {" "}
            <MdLogout size={22} /> <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* KHU VỰC NỘI DUNG CHÍNH */}
      <main className="pre-adm-main">
        {/* HEADER */}
        <header className="pre-adm-header-top">
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

        {/* WORKSPACE CÓ THỂ CUỘN */}
        <div className="pre-adm-workspace">
          <div className="pre-adm-container">
            <div className="breadcrumb">Residents &gt; New Admission Flow</div>

            {/* THANH TIẾN TRÌNH (STEPPER) TỰ CODE TAY */}
            <div className="pre-adm-stepper">
              <div className="step-item active">1 Pre-Screening</div>
              <div className="step-item">2 Admission Form</div>
              <div className="step-item">3 Initial Assessment</div>
            </div>

            {/* TIÊU ĐỀ TRANG */}
            <div className="page-title-block">
              <h1>Step 1: Pre-Admission Screening</h1>
              <p>Elena Ramos · Referral: Hospital — Sunrise Regional</p>
            </div>

            {/* LAYOUT 2 CỘT (TRÁI/PHẢI) */}
            <div className="pre-adm-grid-layout">
              {/* CỘT TRÁI: FORM ĐIỀN */}
              <div className="left-column">
                {/* Khối 1: Clinical Needs */}
                <section className="content-card">
                  <h3>Clinical Needs Assessment</h3>
                  <div className="checkbox-grid">
                    <label className="custom-checkbox">
                      <input type="checkbox" defaultChecked />
                      <span>Wound care / pressure ulcer management</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span>
                        IV therapy or complex medication administration
                      </span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span>Physical / Occupational / Speech therapy</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" defaultChecked />
                      <span>Ventilator or respiratory support</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span>Dementia or behavioral health management</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span>Hospice or palliative care coordination</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span>Bariatric care needs</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span>Isolation precautions (MRSA, C. diff, etc.)</span>
                    </label>
                  </div>
                  <div className="success-message">
                    <MdCheckCircleOutline size={18} />
                    <span>
                      <strong>
                        Facility capability check: 2 / 2 selected needs are
                        supported
                      </strong>{" "}
                      (see AD-05 → Clinical Capability)
                    </span>
                  </div>
                </section>

                {/* Khối 2: Acuity Assessment */}
                <section className="content-card">
                  <h3>Acuity Assessment</h3>
                  <div className="input-grid-2">
                    <div className="pre-adm-input-group">
                      <label>
                        Acuity Level <span className="req">*</span>
                      </label>
                      <input type="text" defaultValue="Moderate" />
                    </div>
                    <div className="pre-adm-input-group">
                      <label>Estimated Care Hours / Day</label>
                      <div className="input-with-suffix">
                        <input type="text" defaultValue="3.5" />
                        <span className="suffix">hrs</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Khối 3: Special Requirements */}
                <section className="content-card">
                  <h3>Special Requirements</h3>
                  <p className="plain-text">
                    Low-sodium diet; prefers female CNA for bathing assistance.
                  </p>
                </section>

                {/* Khối 4: Compliance Check & Override */}
                <div className="compliance-section">
                  <p className="section-label">BR-06 Compliance Check Result</p>

                  <div className="alert-warning-box">
                    <MdErrorOutline size={22} className="alert-icon" />
                    <div className="alert-text">
                      <strong>
                        FLAGGED — Clinical review required before admission.
                      </strong>
                      <p>
                        Facility acuity capacity for Moderate tier is at 90% —
                        needs DON sign-off.
                      </p>
                    </div>
                  </div>

                  <div className="pre-adm-input-group override-group">
                    <label>
                      Override Reason{" "}
                      <span className="sub-label">
                        (required, min 20 characters)
                      </span>
                    </label>
                    <textarea
                      rows="3"
                      defaultValue="DON reviewed capacity — approved with additional PT hours allocated."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* CỘT PHẢI: THÔNG TIN TĨNH */}
              <div className="right-column">
                <section className="content-card">
                  <h3>Referral</h3>
                  <div className="info-row">
                    <span className="info-label">Source</span>
                    <span className="info-value">Hospital</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Facility</span>
                    <span className="info-value">Sunrise Regional</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Referred by</span>
                    <span className="info-value">Dr. Alan Cho</span>
                  </div>
                </section>

                <section className="content-card">
                  <h3>Role</h3>
                  <p className="role-title">Admission Staff</p>
                  <p className="role-desc">Enters intake + screening only.</p>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER CỐ ĐỊNH Ở ĐÁY */}
        <footer className="pre-adm-action-footer">
          <button className="btn-back">← Back</button>
          <button className="btn-submit">Submit for Review</button>
        </footer>
      </main>
    </div>
  );
};

export default PreAdmissionScreening;

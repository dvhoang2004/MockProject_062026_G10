import React from "react";
import { Link } from "react-router-dom";
import "./InitialAssessment.css";
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
  MdDashboard,
  MdLogout,
} from "react-icons/md";

const InitialAssessment = () => {
  return (
    <div className="init-assess-layout">
      {/* SIDEBAR VỚI THẺ LINK CHUẨN */}
      <aside className="init-assess-sidebar">
        <div className="init-assess-brand">
          <MdMenu size={24} className="icon-menu" />
          <div className="brand-text">
            <strong>NHMS</strong>
            <span></span>
          </div>
        </div>
        <nav className="init-assess-menu">
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
        <div className="init-assess-footer-menu">
          <div className="menu-item">
            <div className="menu-link">
              {" "}
              <MdLogout /> Logout
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="init-assess-main">
        {/* HEADER TOP (Profile Y tá Anna Lee) */}
        <header className="init-assess-header-top">
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
        <div className="init-assess-workspace">
          <div className="init-assess-container">
            <div className="breadcrumb">Residents &gt; New Admission Flow</div>

            {/* STEPPER - BƯỚC 3 ĐANG ACTIVE */}
            <div className="init-assess-stepper">
              <div className="step-item completed">1 Pre-Screening ✓</div>
              <div className="step-item completed">2 Admission Form ✓</div>
              <div className="step-item active">3 Initial Assessment</div>
            </div>

            {/* PAGE TITLE */}
            <div className="page-title-block">
              <div className="title-row">
                <h1>Step 3: Initial Assessment</h1>
                <span className="badge-initial">Initial</span>
              </div>
              <p className="subtitle">
                Elena Ramos · Room 106-A · Version 1 of 1 ·{" "}
                <a href="#" className="link-history">
                  View Assessment History
                </a>
              </p>
            </div>

            {/* PHẦN 1: ADL SCORING */}
            <section className="content-card">
              <div className="card-header-flex">
                <h3>Activities of Daily Living (ADL Scoring)</h3>
                <span className="score-total">ADL Total: 20 / 32</span>
              </div>

              <div className="adl-table">
                <div className="adl-header-row">
                  <div className="adl-col-label"></div>
                  <div className="adl-col">0 Indep</div>
                  <div className="adl-col">1 Super</div>
                  <div className="adl-col">2 Limited</div>
                  <div className="adl-col">3 Extensive</div>
                  <div className="adl-col">4 Total</div>
                </div>

                {[
                  { label: "Bed Mobility", selected: 2 },
                  { label: "Transfer", selected: 3 },
                  { label: "Locomotion (Walk)", selected: 3 },
                  { label: "Dressing", selected: 2 },
                  { label: "Eating", selected: 1 },
                  { label: "Toilet Use", selected: 3 },
                  { label: "Personal Hygiene", selected: 3 },
                  { label: "Bathing", selected: 3 },
                ].map((item, index) => (
                  <div className="adl-row" key={index}>
                    <div className="adl-col-label">{item.label}</div>
                    {[0, 1, 2, 3, 4].map((val) => (
                      <div className="adl-col" key={val}>
                        <input
                          type="radio"
                          name={`adl-${index}`}
                          className="solid-black-radio"
                          defaultChecked={item.selected === val}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="subtotal-note">
                Subtotal (drives LOC Tier — see M1-US-00): 20 / 32
              </p>
            </section>

            {/* PHẦN 2: IADL */}
            <section className="content-card">
              <div className="card-header-flex">
                <div className="header-with-desc">
                  <h3>Instrumental ADL — Lawton (personalization only)</h3>
                  <p className="desc">
                    Not used to determine LOC tier — informs care plan
                    personalization.
                  </p>
                </div>
                <span className="score-total">IADL Total: 5 / 8</span>
              </div>

              <div className="iadl-table">
                <div className="iadl-header-row">
                  <div className="iadl-col-label"></div>
                  <div className="iadl-col">0 Dependent</div>
                  <div className="iadl-col">1 Independent</div>
                </div>

                {[
                  { label: "Telephone", selected: 1 },
                  { label: "Shopping", selected: 0 },
                  { label: "Food Preparation", selected: 1 },
                  { label: "Housekeeping", selected: 0 },
                  { label: "Laundry", selected: 1 },
                  { label: "Transportation", selected: 0 },
                  { label: "Medication Mgmt", selected: 1 },
                  { label: "Finances", selected: 1 },
                ].map((item, index) => (
                  <div className="iadl-row" key={index}>
                    <div className="iadl-col-label">{item.label}</div>
                    {[0, 1].map((val) => (
                      <div className="iadl-col" key={val}>
                        <input
                          type="radio"
                          name={`iadl-${index}`}
                          className="solid-black-radio"
                          defaultChecked={item.selected === val}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            {/* PHẦN 3: DIAGNOSIS & ALLERGIES */}
            <div className="grid-2-cols mb-24">
              <section className="content-card m-0">
                <h3>Diagnosis</h3>
                <ul className="bullet-list">
                  <li>Osteoarthritis — bilateral knees</li>
                  <li>Hypertension</li>
                  <li>GERD</li>
                </ul>
              </section>
              <section className="content-card m-0">
                <h3>Allergies</h3>
                <span className="badge-nkda">NKDA</span>
              </section>
            </div>

            {/* PHẦN 4: VITALS */}
            <section className="content-card mb-24">
              <h3>Vitals</h3>
              <div className="vitals-grid">
                <div className="init-input-group">
                  <label>BP (Sys)</label>
                  <input type="text" defaultValue="119" />
                </div>
                <div className="init-input-group">
                  <label>BP (Dia)</label>
                  <input type="text" defaultValue="76" />
                </div>
                <div className="init-input-group">
                  <label>Heart Rate</label>
                  <div className="input-with-suffix">
                    <input type="text" defaultValue="72" />
                    <span className="suffix">bpm</span>
                  </div>
                </div>
                <div className="init-input-group">
                  <label>Temp</label>
                  <div className="input-with-suffix">
                    <input type="text" defaultValue="98.4" />
                    <span className="suffix">°F</span>
                  </div>
                </div>
                <div className="init-input-group">
                  <label>Weight</label>
                  <div className="input-with-suffix">
                    <input type="text" defaultValue="142" />
                    <span className="suffix">lbs</span>
                  </div>
                </div>
                <div className="init-input-group">
                  <label>Height</label>
                  <div className="input-with-suffix">
                    <input type="text" defaultValue="63" />
                    <span className="suffix">in</span>
                  </div>
                </div>
              </div>
            </section>

            {/* PHẦN 5: COGNITIVE STATUS */}
            <section className="content-card mb-24">
              <h3>Cognitive Status</h3>
              <div className="radio-inline-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="cog"
                    className="solid-black-radio"
                    defaultChecked
                  />{" "}
                  Alert & Oriented
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="cog"
                    className="solid-black-radio"
                  />{" "}
                  Confused
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="cog"
                    className="solid-black-radio"
                  />{" "}
                  Lethargic
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="cog"
                    className="solid-black-radio"
                  />{" "}
                  Unresponsive
                </label>
              </div>
            </section>

            {/* PHẦN 6: CLINICAL NOTES */}
            <section className="content-card">
              <h3>Clinical Notes</h3>
              <p className="plain-text">
                Resident alert, cooperative; mild gait unsteadiness noted,
                walker recommended.
              </p>
            </section>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="init-assess-footer">
          <button className="btn-back">← Back</button>
          <button className="btn-submit">
            Save Assessment → triggers LOC calc
          </button>
        </footer>
      </main>
    </div>
  );
};

export default InitialAssessment;

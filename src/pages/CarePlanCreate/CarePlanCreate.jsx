import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CarePlanCreate.css";
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
  MdErrorOutline,
  MdLogout,
} from "react-icons/md";
import AddCareAreaModal from "./AddCareAreaModal";

const CarePlanCreate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCustomArea = () => {
    // Logic xử lý khi người dùng bấm thêm mới sẽ viết ở đây
    setIsModalOpen(false);
  };
  return (
    <div className="cp-create-layout">
      {/* SIDEBAR (Đã tối ưu khoảng cách khít nhau) */}
      <aside className="cp-create-sidebar">
        <div className="cp-create-brand">
          <MdMenu size={24} className="icon-menu" />
          <div className="brand-text">
            <strong>NHMS</strong>
            <span></span>
          </div>
        </div>
        <nav className="cp-create-menu">
          <div className="menu-item">
            <Link to="/dashboard-nurse" className="menu-link">
              <MdDashboard size={22} /> <span>Dashboard</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/resident-list" className="menu-link">
              <MdPeople size={22} /> <span>Residents</span>
            </Link>
          </div>
          <div className="menu-item active">
            <Link to="/careplan/list" className="menu-link">
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
        <div className="cp-create-footer-menu">
          <div className="menu-item">
            <div className="menu-link">
              {" "}
              <MdLogout size={22} /> Logout
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="cp-create-main">
        {/* HEADER TOP */}
        <header className="cp-create-header-top">
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
        <div className="cp-create-workspace">
          <div className="cp-create-container">
            <div className="breadcrumb">Care Planning &gt; New Care Plan</div>

            {/* PAGE TITLE */}
            <div className="page-header-block">
              <div className="title-row">
                <h1>New Care Plan</h1>
                <span className="badge-draft-large">Draft</span>
              </div>
              <p>Robert Hayes · Room 204B</p>
            </div>

            {/* ALERT BANNER */}
            <div className="alert-success">
              <MdErrorOutline size={20} className="alert-icon" />
              <span>
                <strong>LOC Tier 3 — Confirmed.</strong> Care plan can be
                created.
              </span>
            </div>

            {/* TWO-COLUMN GRID */}
            <div className="cp-create-grid">
              {/* CỘT TRÁI (Care Areas & Tasks) */}
              <div className="left-column">
                <h3 className="section-title">
                  Care Areas{" "}
                  <span className="text-muted">(Master Care Plan — §3.0)</span>
                </h3>

                {/* Card 1: Mobility */}
                <div className="care-area-card">
                  <div className="card-header">
                    <div className="card-title-group">
                      <h4>Mobility</h4>
                      <span className="badge-suggested">
                        Suggested from Assessment
                      </span>
                    </div>
                    <span className="btn-remove">Remove</span>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Goal:</strong>
                      <br />
                      Resident will ambulate 50 ft with walker x2/day by
                      2026-07-30.
                    </p>
                    <p className="measure-target">
                      Measure: distance log &nbsp;&nbsp; Target: 2026-07-30
                    </p>
                    <div className="bullet-task">
                      <span className="blue-dot"></span> Assist ambulation with
                      front-wheel walker, twice daily (AM/PM).
                    </div>
                  </div>
                </div>

                {/* Card 2: Skin Integrity */}
                <div className="care-area-card">
                  <div className="card-header">
                    <div className="card-title-group">
                      <h4>Skin Integrity</h4>
                      <span className="badge-suggested">
                        Suggested from Assessment
                      </span>
                    </div>
                    <span className="btn-remove">Remove</span>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Goal:</strong>
                      <br />
                      Maintain skin integrity; no stage-2 pressure injury
                      through review cycle.
                    </p>
                    <p className="measure-target">
                      Measure: Braden score &nbsp;&nbsp; Target: 2026-10-07
                    </p>
                    <div className="bullet-task">
                      <span className="blue-dot"></span> Reposition every 2
                      hours; document skin checks each shift.
                    </div>
                  </div>
                </div>

                {/* Card 3: Nutrition */}
                <div className="care-area-card">
                  <div className="card-header">
                    <div className="card-title-group">
                      <h4>Nutrition</h4>
                      <span className="badge-manual">Manual</span>
                    </div>
                    <span className="btn-remove">Remove</span>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Goal:</strong>
                      <br />
                      Maintain adequate hydration — fluid intake ≥ 1500 mL/day.
                    </p>
                    <p className="measure-target">
                      Measure: I/O log &nbsp;&nbsp; Target: ongoing
                    </p>
                    <div className="bullet-task">
                      <span className="blue-dot"></span> Encourage 1500 mL fluid
                      intake daily; monitor I/O.
                    </div>
                  </div>
                </div>

                <button
                  className="btn-add-area"
                  onClick={() => setIsModalOpen(true)}
                >
                  + Add Care Area
                </button>
                {/* Gọi Component Modal */}
                <AddCareAreaModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  onAdd={handleAddCustomArea}
                />

                {/* Assigned Tasks Table */}
                <div className="tasks-section">
                  <h3 className="section-title">
                    Assigned Tasks{" "}
                    <span className="text-muted">
                      (generated on activation)
                    </span>
                  </h3>
                  <div className="table-card">
                    <table className="tasks-table">
                      <thead>
                        <tr>
                          <th>Task</th>
                          <th>Frequency</th>
                          <th>Owner</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-dark">Ambulation assist</td>
                          <td>2x daily (AM/PM)</td>
                          <td>CNA</td>
                        </tr>
                        <tr>
                          <td className="text-dark">Reposition + skin check</td>
                          <td>q2h</td>
                          <td>CNA</td>
                        </tr>
                        <tr>
                          <td className="text-dark">Fluid intake monitoring</td>
                          <td>Each shift</td>
                          <td>CNA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Cost Estimate & Status */}
              <div className="right-column">
                {/* Cost Estimate Card */}
                <div className="side-card">
                  <div className="side-card-header">
                    <h4>Cost Estimate</h4>
                    <span className="badge-readonly">read-only</span>
                  </div>
                  <div className="cost-row">
                    <span className="text-muted-dark">LOC rate (Tier 3)</span>
                    <strong className="text-dark">$248.00 / day</strong>
                  </div>
                  <div className="cost-row">
                    <span className="text-muted-dark">
                      Room rate (Semi-private)
                    </span>
                    <strong className="text-dark">$185.00 / day</strong>
                  </div>
                  <hr className="cost-divider" />
                  <div className="cost-row total-row">
                    <span>Estimated daily</span>
                    <strong>$433.00</strong>
                  </div>
                  <div className="cost-row total-row large-total">
                    <span>Estimated monthly</span>
                    <strong>$13,163.00</strong>
                  </div>
                  <p className="card-disclaimer">
                    Simulated — not a billing transaction.
                  </p>
                </div>

                {/* Plan Status Card */}
                <div className="side-card">
                  <h4 className="side-title">Plan Status</h4>
                  <p className="status-desc">
                    Saving keeps this plan as Draft.
                    <br />
                    Submit sends it to DON for review before it becomes Active.
                  </p>
                  <p className="status-flow">
                    <strong>Draft → Pending Review → Active</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER ACTIONS */}
        <footer className="cp-create-action-footer">
          <div className="footer-left-actions"></div>
          <div className="footer-right-actions">
            <button className="btn-save-draft">Save Draft</button>
            <button className="btn-confirm">Submit for Review</button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CarePlanCreate;

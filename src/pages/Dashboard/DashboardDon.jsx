import React from "react";
import "./DashboardDon.css";
import NurseSidebar from "../../components/Sidebar/NurseSidebar";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdOutlineAccessTime,
  MdOutlineSecurity,
  MdOutlineAlarm,
  MdOutlineAssignment,
  MdErrorOutline,
  MdDashboard,
  MdPersonOutline,
  MdOutlineAssignmentTurnedIn,
  MdOutlineMedication,
  MdBarChart,
  MdLogout,
  MdMenu,
  MdPeople,
  MdAssignment,
  MdBloodtype,
  MdReportProblem,
} from "react-icons/md";
import { Link } from "react-router-dom";

const DashboardDon = () => {
  return (
    <div className="don-layout-wrapper">
      {/* 1. SIDEBAR  */}
      <NurseSidebar />

      {/* 2. MAIN CONTENT AREA ĐỘC LẬP */}
      <main className="don-main-content">
        {/* TOP HEADER */}
        <header className="don-top-header">
          <div className="don-header-left-space"></div>
          <div className="don-header-right-actions">
            <button className="don-btn-report-incident">
              + Report Incident
            </button>

            {/* Phóng to icon thông báo và dấu hỏi lên size 28 chuẩn mẫu */}
            <MdNotificationsNone className="don-header-action-icon" size={28} />
            <MdHelpOutline className="don-header-action-icon" size={28} />

            <div className="don-user-profile-block">
              <MdAccountCircle size={36} color="#94a3b8" />
              {/* Ép chữ DON nằm hàng dưới thẳng với tên Denise Carter */}
              <div className="don-user-meta-data">
                <span className="don-user-name">Denise Carter</span>
                <span className="don-user-role">DON</span>
              </div>
              <MdArrowDropDown size={20} color="#475569" />
            </div>
          </div>
        </header>

        {/* WORKSPACE AREA */}
        <div className="don-workspace-scroll">
          <div className="don-workspace-container">
            {/* Main Page Title */}
            <div className="don-page-title-section">
              <span className="don-page-breadcrumb">Dashboard</span>
              <h1 className="don-page-main-heading">Good morning, Denise</h1>
              <p className="don-page-sub-heading">
                Facility overview — Riverside Wing
              </p>
            </div>

            {/* Grid 4 thẻ KPIs */}
            <div className="don-kpi-cards-grid">
              <div className="don-kpi-card">
                <div className="don-kpi-icon-wrapper don-bg-amber">
                  <MdOutlineAccessTime size={20} className="don-text-amber" />
                </div>
                <div className="don-kpi-text-meta">
                  <span className="don-kpi-title">Pending Review</span>
                  <span className="don-kpi-number">6</span>
                </div>
              </div>

              <div className="don-kpi-card">
                <div className="don-kpi-icon-wrapper don-bg-rose">
                  <MdOutlineSecurity size={20} className="don-text-rose" />
                </div>
                <div className="don-kpi-text-meta">
                  <span className="don-kpi-title">Open Incidents</span>
                  <span className="don-kpi-number">3</span>
                </div>
              </div>

              <div className="don-kpi-card">
                <div className="don-kpi-icon-wrapper don-bg-amber">
                  <MdOutlineAlarm size={20} className="don-text-amber" />
                </div>
                <div className="don-kpi-text-meta">
                  <span className="don-kpi-title">Reassessments Due</span>
                  <span className="don-kpi-number">4</span>
                </div>
              </div>

              <div className="don-kpi-card">
                <div className="don-kpi-icon-wrapper don-bg-violet">
                  <MdOutlineAssignment size={20} className="don-text-violet" />
                </div>
                <div className="don-kpi-text-meta">
                  <span className="don-kpi-title">Compliance Alerts</span>
                  <span className="don-kpi-number">2</span>
                </div>
              </div>
            </div>

            {/* Thanh cảnh báo Alert đỏ */}
            <div className="don-global-alert-banner">
              <MdErrorOutline size={18} className="don-alert-banner-icon" />
              <span className="don-alert-banner-text">
                <strong>
                  Staffing ratio below target on Night shift (Wing B):
                </strong>{" "}
                1 : 9 (target 1 : 8)
              </span>
            </div>

            {/* Bảng Care Plans Pending Review */}
            <div className="don-data-section-card">
              <div className="don-section-card-header">
                <h3 className="don-section-card-title">
                  Care Plans Pending Review
                </h3>
                <a href="#view-all" className="don-section-header-link">
                  View all
                </a>
              </div>
              <div className="table-responsive">
                <table className="don-dashboard-table">
                  <thead>
                    <tr>
                      <th>Resident</th>
                      <th>Submitted By</th>
                      <th>Submitted</th>
                      <th>LOC Tier</th>
                      <th>Waiting</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong className="don-text-dark">Mary Coleman</strong>{" "}
                        • 118A
                      </td>
                      <td>Anna Lee, RN</td>
                      <td>2026-07-02</td>
                      <td>Tier 2</td>
                      <td>18h</td>
                      <td>
                        <a href="#review" className="don-table-action-link">
                          Review
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="don-text-dark">Elena Ramos</strong> •
                        106A
                      </td>
                      <td>Anna Lee, RN</td>
                      <td>2026-07-01</td>
                      <td>Tier 1</td>
                      <td>1d 6h</td>
                      <td>
                        <a href="#review" className="don-table-action-link">
                          Review
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="don-text-dark">Thomas Baker</strong>{" "}
                        • 220C
                      </td>
                      <td>Priya Nair, LPN</td>
                      <td>2026-07-03</td>
                      <td>Tier 3</td>
                      <td>2h</td>
                      <td>
                        <a href="#review" className="don-table-action-link">
                          Review
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="don-text-dark">Grace Kim</strong> •
                        112B
                      </td>
                      <td>Anna Lee, RN</td>
                      <td>2026-06-30</td>
                      <td>Tier 4</td>
                      <td>2d 1h</td>
                      <td>
                        <a href="#review" className="don-table-action-link">
                          Review
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Khối Grid 2 cột dưới cùng (Census và Billing) */}
            <div className="don-bottom-two-columns-grid">
              {/* Thẻ Census + LOC Mix */}
              <div className="don-data-section-card">
                <div className="don-section-card-header">
                  <h3 className="don-section-card-title">Census + LOC Mix</h3>
                  <a href="#view-residents" className="don-section-header-link">
                    View residents
                  </a>
                </div>

                <div className="don-census-summary-block">
                  <span className="don-census-small-label">Current Census</span>
                  <div className="don-census-main-number">42 / 48 beds</div>
                  <div className="don-census-percentage-text don-text-emerald">
                    87.5% occupancy
                  </div>
                </div>

                <div className="don-loc-progress-bars-stack">
                  <div className="don-loc-progress-row">
                    <div className="don-loc-row-meta">
                      <span>Tier 1 (0-8)</span>
                      <span>9</span>
                    </div>
                    <div className="don-progress-track-bg">
                      <div
                        className="don-progress-thumb don-bar-green"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="don-loc-progress-row">
                    <div className="don-loc-row-meta">
                      <span>Tier 2 (9-16)</span>
                      <span>14</span>
                    </div>
                    <div className="don-progress-track-bg">
                      <div
                        className="don-progress-thumb don-bar-blue"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="don-loc-progress-row">
                    <div className="don-loc-row-meta">
                      <span>Tier 3 (17-24)</span>
                      <span>12</span>
                    </div>
                    <div className="don-progress-track-bg">
                      <div
                        className="don-progress-thumb don-bar-orange"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="don-loc-progress-row">
                    <div className="don-loc-row-meta">
                      <span>Tier 4 (25-32)</span>
                      <span>7</span>
                    </div>
                    <div className="don-progress-track-bg">
                      <div
                        className="don-progress-thumb don-bar-red"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thẻ Billing Snapshot */}
              <div className="don-data-section-card">
                <div className="don-section-card-header">
                  <h3 className="don-section-card-title">Billing Snapshot</h3>
                  <span className="don-badge-readonly-tag">read-only</span>
                </div>

                <div className="don-billing-rows-list">
                  <div className="don-billing-item-row">
                    <span className="don-billing-item-label">
                      Est. daily revenue
                    </span>
                    <span className="don-billing-item-value">
                      <strong>$18,942.00</strong>
                    </span>
                  </div>
                  <div className="don-billing-item-row">
                    <span className="don-billing-item-label">
                      Est. monthly revenue
                    </span>
                    <span className="don-billing-item-value">
                      <strong>$575,540.00</strong>
                    </span>
                  </div>
                  <div className="don-billing-item-row">
                    <span className="don-billing-item-label">
                      Pending authorizations
                    </span>
                    <span className="don-billing-item-value">
                      <strong>3 residents</strong>
                    </span>
                  </div>
                  <div className="don-billing-item-row">
                    <span className="don-billing-item-label">
                      Medicare 100-day cap alerts
                    </span>
                    <span className="don-billing-item-value">
                      <strong>1 resident</strong>
                    </span>
                  </div>
                </div>

                <div className="don-billing-simulated-notice">
                  Simulated — not a billing transaction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardDon;

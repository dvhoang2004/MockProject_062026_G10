import React from "react";
import { Link } from "react-router-dom";
import "./CarePlanList.css";
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
  MdSearch,
  MdOutlineLayers,
  MdOutlineInsertDriveFile,
  MdOutlineSchedule,
  MdOutlineAlarm,
  MdLogout,
} from "react-icons/md";

const CarePlanList = () => {
  return (
    <div className="cp-list-layout">
      {/* SIDEBAR */}
      <aside className="cp-list-sidebar">
        <div className="cp-list-brand">
          <MdMenu size={24} className="icon-menu" />
          <div className="brand-text">
            <strong>NHMS</strong>
            <span></span>
          </div>
        </div>
        <nav className="cp-list-menu">
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
          {/* Active chuyển sang Care Planning */}
          <div className="menu-item active">
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
        <div className="cp-list-footer-menu">
          <div className="menu-item">
            <div className="menu-link">
              {" "}
              <MdLogout size={22} /> Logout
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="cp-list-main">
        {/* HEADER TOP */}
        <header className="cp-list-header-top">
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
        <div className="cp-list-workspace">
          <div className="cp-list-container">
            <div className="breadcrumb">Care Planning &gt; List</div>

            {/* PAGE TITLE */}
            <div className="page-header-block">
              <h1>Care Plans</h1>
              <p>24 plans across your assigned residents</p>
            </div>

            {/* FILTER & ACTIONS BAR */}
            <div className="toolbar-section">
              <div className="toolbar-left">
                <div className="search-box">
                  <MdSearch size={20} color="#94a3b8" />
                  <input type="text" placeholder="Search residents..." />
                </div>
                <select className="filter-select">
                  <option>Status: All</option>
                </select>
                <select className="filter-select">
                  <option>Review: All</option>
                </select>
              </div>
              <div className="toolbar-right">
                <button className="btn-board-toggle">Board</button>
                <button className="btn-primary">+ New Care Plan</button>
              </div>
            </div>

            {/* SUMMARY CARDS */}
            <div className="summary-cards-grid">
              <div className="summary-card">
                <div className="icon-box bg-blue">
                  <MdOutlineLayers size={24} color="#2563eb" />
                </div>
                <div className="card-info">
                  <span>Total plans</span>
                  <strong>24</strong>
                </div>
              </div>
              <div className="summary-card">
                <div className="icon-box bg-gray">
                  <MdOutlineInsertDriveFile size={24} color="#64748b" />
                </div>
                <div className="card-info">
                  <span>Draft</span>
                  <strong>5</strong>
                </div>
              </div>
              <div className="summary-card">
                <div className="icon-box bg-orange">
                  <MdOutlineSchedule size={24} color="#ea580c" />
                </div>
                <div className="card-info">
                  <span>Pending Review</span>
                  <strong>3</strong>
                </div>
              </div>
              <div className="summary-card">
                <div className="icon-box bg-yellow">
                  <MdOutlineAlarm size={24} color="#ca8a04" />
                </div>
                <div className="card-info">
                  <span>Review Due</span>
                  <strong>2</strong>
                </div>
              </div>
            </div>

            {/* DATA TABLE */}
            <div className="table-card">
              <table className="cp-table">
                <thead>
                  <tr>
                    <th>Resident</th>
                    <th>LOC Tier</th>
                    <th>Status</th>
                    <th>Last Review</th>
                    <th>Next Review ▲</th>
                    <th>Assigned</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-bold text-dark">Susan Wright · 114B</td>
                    <td>Tier 2</td>
                    <td>
                      <span className="badge-status needs-update">
                        Needs Update
                      </span>
                    </td>
                    <td>2026-03-30</td>
                    <td className="text-blue fw-bold">overdue</td>
                    <td>Anna Lee</td>
                    <td className="text-right">
                      <span className="action-link">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">James Porter · 210B</td>
                    <td>Tier 4</td>
                    <td>
                      <span className="badge-status review-due">
                        Review Due
                      </span>
                    </td>
                    <td>2026-04-04</td>
                    <td>2026-07-03</td>
                    <td>Anna Lee</td>
                    <td className="text-right">
                      <span className="action-link">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Robert Hayes · 204B</td>
                    <td>Tier 3</td>
                    <td>
                      <span className="badge-status active-status">Active</span>
                    </td>
                    <td>2026-04-08</td>
                    <td>2026-07-07</td>
                    <td>Anna Lee</td>
                    <td className="text-right">
                      <span className="action-link">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">David Nguyen · 222A</td>
                    <td>Tier 3</td>
                    <td>
                      <span className="badge-status active-status">Active</span>
                    </td>
                    <td>2026-05-20</td>
                    <td>2026-08-18</td>
                    <td>Anna Lee</td>
                    <td className="text-right">
                      <span className="action-link">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Mary Coleman · 118A</td>
                    <td>Tier 2</td>
                    <td>
                      <span className="badge-status pending">
                        Pending Review
                      </span>
                    </td>
                    <td>—</td>
                    <td>—</td>
                    <td>Anna Lee</td>
                    <td className="text-right">
                      <span className="action-link">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Elena Ramos · 106A</td>
                    <td>Tier 1</td>
                    <td>
                      <span className="badge-status draft">Draft</span>
                    </td>
                    <td>—</td>
                    <td>—</td>
                    <td>Anna Lee</td>
                    <td className="text-right">
                      <span className="action-link">View</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarePlanList;

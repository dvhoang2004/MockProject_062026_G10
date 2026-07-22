import React from "react";
import { Link } from "react-router-dom";
import "./DashboardCna.css";
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
  MdOutlineAssignment,
  MdOutlineAlarm,
  MdOutlinePerson,
  MdLogout,
  MdDashboard,
} from "react-icons/md";

const DashboardCna = () => {
  return (
    <div className="dash-cna-layout">
      {/* SIDEBAR */}
      <NurseSidebar />

      {/* MAIN CONTENT */}
      <main className="dash-cna-main">
        {/* HEADER TOP */}
        <header className="dash-cna-header-top">
          <div className="header-left"></div>
          <div className="header-right">
            <button className="btn-report-incident">+ Report Incident</button>
            <MdNotificationsNone className="icon-action" size={26} />
            <MdHelpOutline className="icon-action" size={26} />
            <div className="user-profile">
              <MdAccountCircle size={34} color="#94a3b8" />
              <div className="user-info">
                <span className="user-name">Marcus Rivera</span>
                <span className="user-role">CNA</span>
              </div>
              <MdArrowDropDown size={20} color="#475569" />
            </div>
          </div>
        </header>

        {/* WORKSPACE */}
        <div className="dash-cna-workspace">
          <div className="dash-cna-container">
            <div className="breadcrumb">Dashboard</div>

            {/* GREETING */}
            <div className="greeting-block">
              <h1>Good morning, Marcus</h1>
              <p>Day shift · 7:00 AM – 3:00 PM · Wing B</p>
            </div>

            {/* SUMMARY CARDS */}
            <div className="summary-cards-row">
              <div className="summary-card">
                <div className="icon-box-large bg-blue-light">
                  <MdOutlineAssignment size={28} color="#2563eb" />
                </div>
                <div className="card-data">
                  <span className="card-label">Today's Tasks</span>
                  <strong className="card-value">9 / 14</strong>
                </div>
              </div>
              <div className="summary-card">
                <div className="icon-box-large bg-red-light">
                  <MdOutlineAlarm size={28} color="#dc2626" />
                </div>
                <div className="card-data">
                  <span className="card-label">Abnormal Flags Reported</span>
                  <strong className="card-value">1</strong>
                </div>
              </div>
              <div className="summary-card">
                <div className="icon-box-large bg-green-light">
                  <MdOutlinePerson size={28} color="#16a34a" />
                </div>
                <div className="card-data">
                  <span className="card-label">Assigned Residents</span>
                  <strong className="card-value">8</strong>
                </div>
              </div>
            </div>

            {/* SHIFT INFO BANNER */}
            <div className="shift-info-banner">
              <div className="shift-left">
                <span className="text-muted-dark">Shift Info</span>
                <strong className="text-dark">
                  Day Shift · Wing B · Rooms 106-124
                </strong>
              </div>
              <div className="shift-right">
                <strong className="text-dark">7:00 AM - 3:00 PM</strong>
              </div>
            </div>

            {/* UPCOMING TASKS SECTION */}
            <div className="tasks-section-header">
              <h3>Upcoming Tasks</h3>
              <a href="#" className="link-action">
                Go to Daily Task List
              </a>
            </div>
            <div className="table-responsive">
              <div className="table-card">
                <table className="dash-cna-table">
                  <thead>
                    <tr>
                      <th>Resident</th>
                      <th>Task</th>
                      <th>Due</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold text-dark">Susan Wright · 114B</td>
                      <td>Bedside Vitals</td>
                      <td>08:00 AM</td>
                      <td>
                        <span className="badge-status badge-done">Done</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-dark">James Porter · 210B</td>
                      <td>Repositioning (2h)</td>
                      <td>08:30 AM</td>
                      <td>
                        <span className="badge-status badge-done">Done</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-dark">Robert Hayes · 204B</td>
                      <td>Bathing Assistance</td>
                      <td>09:15 AM</td>
                      <td>
                        <span className="badge-status badge-missed">
                          Missed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-dark">David Nguyen · 222A</td>
                      <td>Bedside Vitals — abnormal SpO2 flagged</td>
                      <td>10:00 AM</td>
                      <td>
                        <span className="badge-status badge-done">Done</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-dark">Mary Coleman · 118A</td>
                      <td>Ambulation Assist</td>
                      <td>11:00 AM</td>
                      <td>
                        <span className="badge-status badge-pending">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardCna;

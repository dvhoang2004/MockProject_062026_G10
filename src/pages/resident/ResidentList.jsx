import React from "react";
import { Link } from "react-router-dom";
import NurseSidebar from "../../components/Sidebar/NurseSidebar";
import "./ResidentList.css";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdSearch,
  MdTableView,
  MdAdd,
  MdOutlinePeopleAlt,
  MdOutlinePersonOutline,
  MdOutlinePersonOff,
  MdAccessTime,
  MdCheck,
} from "react-icons/md";

const ResidentList = () => {
  const residentsData = [
    {
      name: "Elena Ramos",
      room: "106-A",
      status: "Pending",
      dob: "03/12/1948 (78)",
      payer: "—",
      source: "Sunrise Regional Hosp.",
    },
    {
      name: "David Nguyen",
      room: "222-A",
      status: "Active",
      dob: "11/02/1951 (74)",
      payer: "Medicaid",
      source: "Private",
    },
    {
      name: "Mary Coleman",
      room: "118-A",
      status: "Active",
      dob: "06/19/1944 (82)",
      payer: "Medicare",
      source: "Family",
    },
    {
      name: "James Porter",
      room: "210-B",
      status: "Active",
      dob: "09/08/1939 (86)",
      payer: "Private Pay",
      source: "Self",
    },
    {
      name: "Susan Wright",
      room: "114-B",
      status: "Active",
      dob: "01/27/1946 (80)",
      payer: "Medicare",
      source: "Valley General Hosp.",
    },
    {
      name: "Robert Hayes",
      room: "204-B",
      status: "Active",
      dob: "04/15/1943 (83)",
      payer: "Medicaid",
      source: "Sunrise Regional Hosp.",
    },
  ];

  return (
    <div className="rl-layout">
      {/* 1. SIDEBAR  */}
      <NurseSidebar />

      {/* 2. MAIN CONTENT  */}
      <main className="rl-main">
        {/* HEADER TOP */}
        <header className="rl-header-top">
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

        {/* WORKSPACE  */}
        <div className="rl-workspace">
          <div className="rl-container">
            {/* TITLE & BREADCRUMB */}
            <div className="rl-page-title">
              <span className="breadcrumb">Residents &gt; List</span>
              <h1>Residents</h1>
              <p className="subtitle-text">
                24 residents · sorted by Date Added (newest first)
              </p>
            </div>

            {/* TOOLBAR */}
            <div className="rl-toolbar">
              <div className="rl-search-box">
                <MdSearch size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by name, room, or resident ID..."
                />
              </div>

              <div className="rl-dropdown">
                <span>Status: All</span>
                <MdArrowDropDown size={20} />
              </div>

              <div className="rl-dropdown">
                <span>Referral: All</span>
                <MdArrowDropDown size={20} />
              </div>

              <button className="rl-btn-table">
                <MdTableView size={18} /> Table
              </button>

              <div className="rl-add-btn-wrapper">
                <button className="rl-btn-add-disabled" disabled>
                  <MdAdd size={18} />{" "}
                  <Link to="/pre-admission" className="">
                    Add New Resident
                  </Link>
                </button>
                <span className="btn-note">
                  Visible to Admission Staff only (view-only for Nurse)
                </span>
              </div>
            </div>

            {/* STATS CARDS */}
            <div className="rl-stats-grid">
              <div className="rl-stat-card">
                <div className="icon-circle bg-blue-light text-blue">
                  <MdOutlinePeopleAlt size={22} />
                </div>
                <div className="stat-info">
                  <span className="stat-label">Total Residents</span>
                  <strong className="stat-value">24</strong>
                </div>
              </div>

              <div className="rl-stat-card active-card">
                <div className="icon-circle bg-green-light text-green">
                  <MdOutlinePersonOutline size={22} />
                </div>
                <div className="stat-info">
                  <span className="stat-label">Active</span>
                  <strong className="stat-value">18</strong>
                </div>
                <MdCheck size={18} className="check-icon" />
              </div>

              <div className="rl-stat-card">
                <div className="icon-circle bg-gray-light text-gray">
                  <MdOutlinePersonOff size={22} />
                </div>
                <div className="stat-info">
                  <span className="stat-label">Discharged</span>
                  <strong className="stat-value">4</strong>
                </div>
              </div>

              <div className="rl-stat-card">
                <div className="icon-circle bg-yellow-light text-yellow">
                  <MdAccessTime size={22} />
                </div>
                <div className="stat-info">
                  <span className="stat-label">Pending</span>
                  <strong className="stat-value">2</strong>
                </div>
              </div>
            </div>

            {/* DATA TABLE */}
            <div className="table-responsive">
              <div className="rl-table-card">
                <table className="rl-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Room</th>
                      <th>Status</th>
                      <th>DOB (Age)</th>
                      <th>Payer Source</th>
                      <th>Referral Source</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {residentsData.map((resident, idx) => (
                      <tr key={idx}>
                        <td className="fw-bold">{resident.name}</td>
                        <td>{resident.room}</td>
                        <td>
                          <span
                            className={`rl-badge badge-${resident.status.toLowerCase()}`}
                          >
                            {resident.status}
                          </span>
                        </td>
                        <td>{resident.dob}</td>
                        <td>{resident.payer}</td>
                        <td>{resident.source}</td>
                        <td>
                          <Link to="/resident/detail" className="rl-link-view">
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
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

export default ResidentList;

import React from "react";
import {
  MdSearch,
  MdTableView,
  MdAdd,
  MdMenu,
  MdNotificationsNone,
  MdHelpOutline,
  MdDashboard,
  MdPeopleOutline,
  MdAssignment,
  MdShield,
  MdBarChart,
  MdLogout,
  MdGroups,
  MdPersonOutline,
  MdAccessTime,
  MdArrowDropDown,
  MdBloodtype,
} from "react-icons/md";
import "./ResidentList.css";
import { Link } from "react-router-dom";

const ResidentList = () => {
  const residentsData = [
    {
      name: "Elena Ramos",
      room: "106-A",
      status: "Pending",
      dob: "03/12/1948",
      age: 78,
      payer: "—",
      source: "Sunrise Regional Hosp.",
    },
    {
      name: "David Nguyen",
      room: "222-A",
      status: "Active",
      dob: "11/02/1951",
      age: 74,
      payer: "Medicaid",
      source: "Private",
    },
    {
      name: "Mary Coleman",
      room: "118-A",
      status: "Active",
      dob: "06/19/1944",
      age: 82,
      payer: "Medicare",
      source: "Family",
    },
    {
      name: "James Porter",
      room: "210-B",
      status: "Active",
      dob: "09/08/1939",
      age: 86,
      payer: "Private Pay",
      source: "Self",
    },
    {
      name: "Susan Wright",
      room: "114-B",
      status: "Active",
      dob: "01/27/1946",
      age: 80,
      payer: "Medicare",
      source: "Valley General Hosp.",
    },
    {
      name: "Robert Hayes",
      room: "204-B",
      status: "Active",
      dob: "04/15/1943",
      age: 83,
      payer: "Medicaid",
      source: "Sunrise Regional Hosp.",
    },
  ];

  return (
    <div className="nhms-container">
      {/* HEADER TOP */}
      <header className="nhms-header">
        <div className="header-left">
          <button className="menu-btn">
            <MdMenu />
          </button>
          <div className="logo-area">
            <span className="logo-bold">NHMS</span>
            <span className="logo-sub">Nursing Home Management System</span>
          </div>
        </div>
        <div className="header-right">
          <span className="header-icon">
            <MdNotificationsNone />
          </span>
          <span className="header-icon">
            <MdHelpOutline />
          </span>
          <div className="user-profile">
            <div className="avatar">AL</div>
            <div className="user-info">
              <span className="user-name">Anna Lee</span>
              <span className="user-role">Nurse</span>
            </div>
            <span className="profile-arrow">
              <MdArrowDropDown />
            </span>
          </div>
        </div>
      </header>

      <div className="nhms-workspace">
        {/* SIDEBAR TRÁI */}
        <aside className="nhms-sidebar">
          <ul className="sidebar-menu">
            <Link to="/dashboard-nurse" className="menu-link">
              <li className="menu-item">
                <div className="menu-item-content">
                  <MdDashboard size={20} /> Dashboard
                </div>
              </li>
            </Link>
            <Link to="/resident-list" className="menu-link">
              <li className="menu-item active">
                <div className="menu-item-content">
                  <MdPeopleOutline size={18} /> Residents
                </div>
              </li>
            </Link>
            <Link to="/care-planning" className="menu-link">
              <li className="menu-item">
                <div className="menu-item-content">
                  <MdAssignment size={18} /> Care Planning
                </div>
              </li>
            </Link>
            <Link to="/eMAR" className="menu-link">
              <li className="menu-item disabled">
                <div className="menu-item-content">
                  <MdBloodtype size={18} /> eMAR
                </div>
                <span className="badge-soon">soon</span>
              </li>
            </Link>
            <Link to="/incident-risk" className="menu-link">
              <li className="menu-item">
                <div className="menu-item-content">
                  <MdShield size={18} /> Incident & Risk
                </div>
              </li>
            </Link>
            <Link to="/reports" className="menu-link">
              <li className="menu-item">
                <div className="menu-item-content">
                  <MdBarChart size={18} /> Reports
                </div>
              </li>
            </Link>
          </ul>
          <div className="sidebar-footer">
            <span className="menu-item">
              <div className="menu-item-content">
                <MdLogout size={18} /> Logout
              </div>
            </span>
          </div>
        </aside>

        {/* NỘI DUNG CHÍNH BÊN PHẢI */}
        <main className="nhms-main-content">
          <div className="page-header-title">
            <span className="breadcrumb">Residents &gt; List</span>
            <h2>Residents</h2>
          </div>

          {/* THANH TÌM KIẾM & BỘ LỌC */}
          <div className="filter-toolbar">
            <div className="search-box-wrapper">
              <span className="search-icon">
                <MdSearch />
              </span>
              <input
                type="text"
                placeholder="Search by name, room, or resident ID..."
                className="search-input"
              />
            </div>

            <div className="dropdown-filter">
              <label>Status:</label>
              <div className="dropdown-value">
                All <MdArrowDropDown size={20} />
              </div>
            </div>

            <div className="dropdown-filter">
              <label>Referral:</label>
              <div className="dropdown-value">
                All <MdArrowDropDown size={20} />
              </div>
            </div>

            <button className="btn-secondary">
              <MdTableView size={18} /> Table
            </button>
            <button className="btn-primary">
              <MdAdd size={18} /> Add New Resident
            </button>
          </div>

          {/* KHỐI THỐNG KÊ (4 CARDS) */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon bg-blue text-blue">
                <MdGroups size={24} />
              </div>
              <div className="stat-info">
                <div className="stat-label">Total Residents</div>
                <div className="stat-value">24</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon bg-green text-green">
                <MdPersonOutline size={24} />
              </div>
              <div className="stat-info">
                <div className="stat-label">Active</div>
                <div className="stat-value text-green">18</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon bg-gray text-gray">
                <MdPersonOutline size={24} />
              </div>
              <div className="stat-info">
                <div className="stat-label">Discharged</div>
                <div className="stat-value">4</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon bg-yellow text-yellow">
                <MdAccessTime size={24} />
              </div>
              <div className="stat-info">
                <div className="stat-label">Pending</div>
                <div className="stat-value text-yellow">2</div>
              </div>
            </div>
          </div>

          {/* BẢNG DỮ LIỆU CƯ DÂN */}
          <div className="table-wrapper">
            <table className="residents-table">
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
                    <td className="font-semibold">{resident.name}</td>
                    <td>{resident.room}</td>
                    <td>
                      <span
                        className={`status-badge ${resident.status.toLowerCase()}`}
                      >
                        {resident.status}
                      </span>
                    </td>
                    <td>
                      {resident.dob} ({resident.age})
                    </td>
                    <td>{resident.payer}</td>
                    <td>{resident.source}</td>
                    <td>
                      <button className="btn-view">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResidentList;

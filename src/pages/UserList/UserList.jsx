import React from "react";
import { FaUsers, FaCheckCircle, FaClock, FaMinusSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./UserList.css";
import UserCard from "../../components/UserCard/UserCard";

const UserList = () => {
  const mockUsers = [
    {
      userId: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      role: "User",
      status: "Active",
      tfa: "Enabled",
      lastLogin: "2023-10-01 10:00:00",
    },
    {
      userId: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      role: "Admin",
      status: "Inactive",
      tfa: "Disabled",
      lastLogin: "2023-09-28 14:30:00",
    },
  ];

  const total = mockUsers.length;
  const active = mockUsers.filter((u) => u.status === "Active").length;
  const invited = mockUsers.filter((u) => u.status === "Invited").length;
  const suspended = mockUsers.filter(
    (u) =>
      u.status === "Suspended" ||
      u.status === "Inactive" ||
      u.status === "Deactivated",
  ).length;
  const navigate = useNavigate();

  return (
    <div className="user-list-page">
      <div className="breadcrumb">Admin &gt; Users</div>
      <h1 className="page-title">User List</h1>
      <p className="page-subtitle">
        All user accounts — search by email or phone
      </p>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-icon blue">
            <FaUsers />
          </span>
          <div>
            <div className="stat-label">Total Users</div>
            <div className="stat-value">{total}</div>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon green">
            <FaCheckCircle />
          </span>
          <div>
            <div className="stat-label">Active</div>
            <div className="stat-value">{active}</div>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon yellow">
            <FaClock />
          </span>
          <div>
            <div className="stat-label">Invited</div>
            <div className="stat-value">{invited}</div>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon gray">
            <FaMinusSquare />
          </span>
          <div>
            <div className="stat-label">Suspended / Deactivated</div>
            <div className="stat-value">{suspended}</div>
          </div>
        </div>
      </div>

      <div className="toolbar">
        <input
          className="search-input"
          placeholder="Search by email or phone"
        />
        <select className="filter-select">
          <option>Role: All</option>
        </select>
        <select className="filter-select">
          <option>Status: All</option>
        </select>
        <button
          className="add-user-button"
          onClick={() => navigate("/user-list/add-user")}
        >
          + Add User
        </button>
      </div>

      <div className="table-header">
        <div className="col name">Name</div>
        <div className="col email">Email</div>
        <div className="col phone">Phone</div>
        <div className="col role">Role</div>
        <div className="col">Status</div>
        <div className="col">2FA</div>
        <div className="col lastLogin">Last Login</div>
        <div className="col"></div>
      </div>

      <div className="user-table">
        {mockUsers.map((user) => (
          <UserCard key={user.userId} props={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;

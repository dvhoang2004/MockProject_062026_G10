import React from "react";

import "./UserCard.css";

const UserCard = ({ props }) => {
  const statusColors = {
    Active: "green",
    Invited: "yellow",
    Suspended: "red",
    Deactivated: "gray",
  };

  return (
    <div className="user-card">
      <div className="col name">{props.name}</div>
      <div className="col email">{props.email}</div>
      <div className="col phone">{props.phone || "—"}</div>
      <div className="col role">{props.role}</div>
      <div className="col">
        <span className={`badge ${statusColors[props.status] || "gray"}`}>
          {props.status}
        </span>
      </div>
      <div className="col">
        <span
          className={`badge ${props.tfa === "Enabled" ? "green" : "yellow"}`}
        >
          {props.tfa}
        </span>
      </div>
      <div className="col lastLogin">{props.lastLogin || "—"}</div>
      <div className="col">
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
};

export default UserCard;

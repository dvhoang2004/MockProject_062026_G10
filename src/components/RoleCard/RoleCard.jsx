import React from "react";

import "./RoleCard.css";

const RoleCard = ({ role }) => {
  const { name, type, description } = role;

  return (
    <div className="role-card">
      <h3 className="role-name">{name}</h3>
      <span
        className={`role-tag ${type === "Internal" ? "internal" : "external"}`}
      >
        {type}
      </span>
      <p className="role-description">{description}</p>
    </div>
  );
};

export default RoleCard;

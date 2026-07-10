import React from "react";

import "./LOCCard.css";

const LOCCard = ({ loc, onEdit }) => {
  const { level, scoreRange, dailyRate, effectiveDate, lastUpdatedBy } = loc;

  return (
    <div className="loc-card">
      <div className="col level">
        <span className="tier-badge">{level}</span>
      </div>
      <div className="col scoreRange">{scoreRange}</div>
      <div className="col dailyRate">${dailyRate.toFixed(2)}</div>
      <div className="col effectiveDate">{effectiveDate}</div>
      <div className="col lastUpdatedBy">{lastUpdatedBy}</div>
      <div className="col">
        <button className="edit-button" onClick={() => onEdit && onEdit(loc)}>
          Edit Rate
        </button>
      </div>
    </div>
  );
};

export default LOCCard;

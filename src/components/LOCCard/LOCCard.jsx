import React from "react";

import "./LOCCard.css";

const LOCCard = ({ loc, onEdit }) => {
  const { level, scoreRange, dailyRate, effectiveDate, lastUpdatedBy } = loc;

  return (
    <div className="locCard">
      <div className="locPage-col locPage-col--level">
        <span className="locCard-tierBadge">{level}</span>
      </div>
      <div className="locPage-col locPage-col--scoreRange">{scoreRange}</div>
      <div className="locPage-col locPage-col--dailyRate">
        ${dailyRate.toFixed(2)}
      </div>
      <div className="locPage-col locPage-col--effectiveDate">
        {effectiveDate}
      </div>
      <div className="locPage-col locPage-col--lastUpdatedBy">
        {lastUpdatedBy}
      </div>
      <div className="locPage-col locPage-col--action">
        <button
          className="locCard-editButton"
          onClick={() => onEdit && onEdit(loc)}
        >
          Edit Rate
        </button>
      </div>
    </div>
  );
};

export default LOCCard;

import React from "react";

import "./RoomRate.css";

const RoomRate = ({ className, roomRatesMockdata }) => {
  return (
    <div className={`info-card ${className || ""}`}>
      <div className="info-card-header">
        <h2>Room Rate</h2>
        <span className="tab-tag">Tab 3 of 4</span>
      </div>
      {roomRatesMockdata.map((r) => (
        <div className="info-row" key={r.type}>
          <span className="info-label">{r.type}</span>
          <span className="info-value">${r.rate.toFixed(2)} / day</span>
        </div>
      ))}
      <p className="info-footnote">
        Effective 2026-01-01 · feeds Care Plan Cost Panel (M2-US-09, G-05).
      </p>
    </div>
  );
};

export default RoomRate;

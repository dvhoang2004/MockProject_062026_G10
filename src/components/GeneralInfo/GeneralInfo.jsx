import React from "react";

import "./GeneralInfo.css";

const GeneralInfo = ({ className, generalInfoMockdata }) => {
  return (
    <div className={`info-card ${className || ""}`}>
      <div className="info-card-header">
        <h2>General Info</h2>
        <span className="tab-tag">Tab 1 of 4</span>
      </div>
      <div className="info-row">
        <span className="info-label">Facility name</span>
        <span className="info-value">{generalInfoMockdata.name}</span>
      </div>
      <div className="info-row">
        <span className="info-label">facility_id</span>
        <span className="info-value">
          {generalInfoMockdata.facilityId} (read-only)
        </span>
      </div>
      <div className="info-row">
        <span className="info-label">Timezone</span>
        <span className="info-value">{generalInfoMockdata.timezone}</span>
      </div>
      <div className="info-row">
        <span className="info-label">Target state</span>
        <span className="info-value">{generalInfoMockdata.targetState}</span>
      </div>
      <div className="info-row">
        <span className="info-label">License #</span>
        <span className="info-value">{generalInfoMockdata.licenseNumber}</span>
      </div>
    </div>
  );
};

export default GeneralInfo;

import React from "react";

import "./ClinicalCapability.css";

const ClinicalCapability = ({ className, capabilitiesMockdata }) => {
  return (
    <div className={`clinical-card ${className || ""}`}>
      <div className="info-card-header">
        <h2>Facility Clinical Capability</h2>
        <span className="tab-tag">Tab 4 of 4</span>
      </div>
      <p className="clinical-description">
        Used by BR-06 (Pre-Admission Screening, M1-US-04) to check an
        applicant's clinical needs against what this facility can actually
        support.
      </p>

      <div className="clinical-grid">
        {capabilitiesMockdata.map((c) => (
          <div className="clinical-row" key={c.label}>
            <span className="clinical-label">{c.label}</span>
            <span className={`badge ${c.supported ? "green" : "gray"}`}>
              {c.supported ? "Supported" : "Not Supported"}
            </span>
          </div>
        ))}
      </div>

      <p className="info-footnote">
        Bariatric care needs facility-wide bed weight limit: 300 lb (no
        bariatric-rated equipment on site).
      </p>
    </div>
  );
};

export default ClinicalCapability;

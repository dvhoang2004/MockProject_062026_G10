import React from "react";

import "./LOC.css";
import LOCCard from "../../components/LOCCard/LOCCard";
import { mockLOCs } from "./mockData.js";

const LOCPage = () => {
  const handleEdit = (loc) => {
    // Placeholder for edit functionality
    console.log("Edit rate for", loc.level);
  };

  return (
    <div className="loc-page">
      <div className="breadcrumb">Admin &gt; LOC Rates</div>
      <h1 className="page-title">LOC Rate Table</h1>
      <p className="page-subtitle">
        Daily rate per Level of Care tier — score ranges are fixed by the
        clinical scoring model
      </p>

      <div className="info-banner">
        <span className="info-icon">!</span>
        <span>
          4 tiers are fixed by the scoring model and cannot be added or removed.
          Only Daily Rate and Effective Date are editable.
        </span>
      </div>

      <div className="table-header">
        <div className="col level">Level</div>
        <div className="col scoreRange">Score Range</div>
        <div className="col dailyRate">Daily Rate</div>
        <div className="col effectiveDate">Effective Date</div>
        <div className="col lastUpdatedBy">Last Updated By</div>
        <div className="col"></div>
      </div>

      <div className="loc-table">
        {mockLOCs.map((loc) => (
          <LOCCard key={loc.id} loc={loc} onEdit={handleEdit} />
        ))}
      </div>

      <p className="footnote">
        Levels cannot be added or deleted here — score-range thresholds are
        defined by the ADL/IADL scoring model and match M1-US-08 LOC
        Classification.
      </p>
    </div>
  );
};

export default LOCPage;

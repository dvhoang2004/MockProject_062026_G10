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
    <div className="locPage">
      <div className="locPage-breadcrumb">Admin &gt; LOC Rates</div>
      <h1 className="locPage-title">LOC Rate Table</h1>
      <p className="locPage-subtitle">
        Daily rate per Level of Care tier — score ranges are fixed by the
        clinical scoring model
      </p>

      <div className="locPage-infoBanner">
        <span className="locPage-infoIcon">!</span>
        <span>
          4 tiers are fixed by the scoring model and cannot be added or removed.
          Only Daily Rate and Effective Date are editable.
        </span>
      </div>

      <div className="locPage-tableHeader">
        <div className="locPage-col locPage-col--level">Level</div>
        <div className="locPage-col locPage-col--scoreRange">Score Range</div>
        <div className="locPage-col locPage-col--dailyRate">Daily Rate</div>
        <div className="locPage-col locPage-col--effectiveDate">
          Effective Date
        </div>
        <div className="locPage-col locPage-col--lastUpdatedBy">
          Last Updated By
        </div>
        <div className="locPage-col locPage-col--action"></div>
      </div>

      <div className="locPage-table">
        {mockLOCs.map((loc) => (
          <LOCCard key={loc.id} loc={loc} onEdit={handleEdit} />
        ))}
      </div>

      <p className="locPage-footnote">
        Levels cannot be added or deleted here — score-range thresholds are
        defined by the ADL/IADL scoring model and match M1-US-08 LOC
        Classification.
      </p>
    </div>
  );
};

export default LOCPage;

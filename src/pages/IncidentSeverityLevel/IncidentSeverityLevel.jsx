import React from "react";

import "./IncidentSeverityLevel.css";
import { severityLevels } from "./incidentSeverityMockData";

const severityColor = {
  Minor: "gray",
  Moderate: "yellow",
  Major: "orange",
  Critical: "red",
};

const IncidentSeverityPage = () => {
  const handleEdit = (level) => {
    // Placeholder for edit functionality. In a real application, this could open a modal or navigate to an edit page.
    console.log("Edit", level.name);
  };

  return (
    <div className="incident-severity-page">
      <div className="breadcrumb">Admin &gt; Incident Severity</div>
      <h1 className="page-title">Incident Severity Levels</h1>
      <p className="page-subtitle">
        Taxonomy used across Incident & Risk (M7) — 4 levels, fixed
      </p>

      <div className="info-banner">
        <span className="info-icon">!</span>
        <span>
          Fixed 4-level taxonomy, referenced across all M7 Incident wireframes.
          Only descriptions are editable.
        </span>
      </div>

      <div className="table-header">
        <div className="col level">Level</div>
        <div className="col description">Description</div>
        <div className="col example">Example</div>
        <div className="col"></div>
      </div>

      <div className="severity-table">
        {severityLevels.map((level) => (
          <div className="severity-row" key={level.id}>
            <div className="col level">
              <span className={`badge ${severityColor[level.name]}`}>
                {level.name}
              </span>
            </div>
            <div className="col description">{level.description}</div>
            <div className="col example">{level.example}</div>
            <div className="col">
              <button className="edit-button" onClick={() => handleEdit(level)}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="footnote">
        Levels cannot be added or deleted here. Chart-lock (BR-07) triggers on
        every incident regardless of severity — severity only determines the
        external-reporting deadline (see SLA Configuration, AD-09).
      </p>
    </div>
  );
};

export default IncidentSeverityPage;

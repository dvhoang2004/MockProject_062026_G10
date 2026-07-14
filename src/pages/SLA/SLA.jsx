import React from "react";

import "./SLA.css";

const SLA_DATA = [
  {
    severity: "Critical",
    color: "red",
    externalReportRequired: "Yes",
    deadline: "24 hours",
    regulatory: "CA Dept. of Public Health",
  },
  {
    severity: "Major",
    color: "orange",
    externalReportRequired: "Yes",
    deadline: "24 hours",
    regulatory: "CA Dept. of Public Health",
  },
  {
    severity: "Moderate",
    color: "yellow",
    externalReportRequired: "Yes",
    deadline: "48 hours",
    regulatory: "CA Dept. of Public Health",
  },
  {
    severity: "Minor",
    color: "gray",
    externalReportRequired: "No",
    deadline: "— (not required)",
    regulatory: "—",
  },
];

const SLA = () => {
  const handleEdit = (severity) => {
    // Placeholder for edit functionality. In a real application, this could open a modal or navigate to an edit page.
    console.log("Edit", severity);
  };

  return (
    <div className="sla-page">
      <div className="breadcrumb">Admin &gt; SLA Config</div>
      <h1 className="page-title">SLA Configuration</h1>
      <p className="page-subtitle">
        Regulatory reporting deadlines by incident severity (NFR-06)
      </p>

      <div className="info-banner">
        <span className="info-icon">!</span>
        <span>
          Deadlines fixed to AD-08 severity tiers. Simulated — nothing is
          transmitted externally (NFR-05).
        </span>
      </div>

      <div className="table-header">
        <div className="col severity">Severity</div>
        <div className="col external">External Report Required</div>
        <div className="col deadline">Reporting Deadline</div>
        <div className="col regulatory">Regulatory Body</div>
        <div className="col"></div>
      </div>

      <div className="sla-table">
        {SLA_DATA.map((sla) => (
          <div className="sla-row" key={sla.severity}>
            <div className="col severity">
              <span className={`badge ${sla.color}`}>{sla.severity}</span>
            </div>
            <div className="col external">{sla.externalReportRequired}</div>
            <div className="col deadline">{sla.deadline}</div>
            <div className="col regulatory">{sla.regulatory}</div>
            <div className="col">
              {sla.externalReportRequired === "No" ? (
                <span className="na-text">N/A</span>
              ) : (
                <button
                  className="edit-button"
                  onClick={() => handleEdit(sla.severity)}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="footnote">
        Only Deadline and Regulatory Body are editable. Values match M7 Incident
        List (SLA Countdown), Incident Detail, and Submit External Report modal
        (S6) — e.g. Major=24h, Moderate=48h window.
      </p>
    </div>
  );
};

export default SLA;

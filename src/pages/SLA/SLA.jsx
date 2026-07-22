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
    <div className="slaPage">
      <div className="slaPage-breadcrumb">Admin &gt; SLA Config</div>
      <h1 className="slaPage-title">SLA Configuration</h1>
      <p className="slaPage-subtitle">
        Regulatory reporting deadlines by incident severity (NFR-06)
      </p>

      <div className="slaPage-infoBanner">
        <span className="slaPage-infoIcon">!</span>
        <span>
          Deadlines fixed to AD-08 severity tiers. Simulated — nothing is
          transmitted externally (NFR-05).
        </span>
      </div>

      <div className="slaPage-tableHeader">
        <div className="slaPage-col slaPage-col--severity">Severity</div>
        <div className="slaPage-col slaPage-col--external">
          External Report Required
        </div>
        <div className="slaPage-col slaPage-col--deadline">
          Reporting Deadline
        </div>
        <div className="slaPage-col slaPage-col--regulatory">
          Regulatory Body
        </div>
        <div className="slaPage-col slaPage-col--action"></div>
      </div>

      <div className="slaPage-table">
        {SLA_DATA.map((sla) => (
          <div className="slaPage-row" key={sla.severity}>
            <div className="slaPage-col slaPage-col--severity">
              <span className={`slaPage-badge slaPage-badge--${sla.color}`}>
                {sla.severity}
              </span>
            </div>
            <div className="slaPage-col slaPage-col--external">
              {sla.externalReportRequired}
            </div>
            <div className="slaPage-col slaPage-col--deadline">
              {sla.deadline}
            </div>
            <div className="slaPage-col slaPage-col--regulatory">
              {sla.regulatory}
            </div>
            <div className="slaPage-col slaPage-col--action">
              {sla.externalReportRequired === "No" ? (
                <span className="slaPage-naText">N/A</span>
              ) : (
                <button
                  className="slaPage-editButton"
                  onClick={() => handleEdit(sla.severity)}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="slaPage-footnote">
        Only Deadline and Regulatory Body are editable. Values match M7 Incident
        List (SLA Countdown), Incident Detail, and Submit External Report modal
        (S6) — e.g. Major=24h, Moderate=48h window.
      </p>
    </div>
  );
};

export default SLA;

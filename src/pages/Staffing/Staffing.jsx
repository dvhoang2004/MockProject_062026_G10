import React from "react";
import "./Staffing.css";
import { minimumRequirement, shifts, complianceData } from "./staffingMockData";

const Staffing = () => {
  const sumOfShifts = shifts.reduce((sum, s) => sum + s.subtotal, 0);
  const { targetState, minHours, regulationRef } = minimumRequirement;
  const {
    census,
    scheduledHours,
    actualRatio,
    minimumRatio,
    isCompliant,
    usedBy,
  } = complianceData;

  return (
    <div className="staffing-page">
      <div className="breadcrumb">Admin &gt; Staffing</div>
      <h1 className="page-title">Staffing Ratio Configuration</h1>
      <p className="page-subtitle">
        {targetState} SNF minimum: {minHours} direct care hours per resident per
        day ({regulationRef.split(" ")[0]})
      </p>

      {/* Minimum Requirement */}
      <div className="card">
        <h2 className="card-title">Minimum Requirement</h2>
        <div className="min-req-grid">
          <div className="field-group">
            <label>Target State</label>
            <input type="text" value={targetState} readOnly />
          </div>
          <div className="field-group">
            <label>Minimum Direct Care Hours</label>
            <div className="input-with-suffix">
              <input type="text" value={minHours} readOnly />
              <span className="suffix">hrs/resident/day</span>
            </div>
          </div>
          <div className="field-group">
            <label>Regulation Reference</label>
            <input type="text" value={regulationRef} readOnly />
          </div>
        </div>
      </div>

      {/* Shift Breakdown */}
      <h2 className="section-title">Shift Breakdown</h2>
      <div className="shift-table-header">
        <div className="col shift">Shift</div>
        <div className="col cna">Required CNA hrs</div>
        <div className="col nurse">Required Nurse hrs</div>
        <div className="col subtotal">Subtotal</div>
      </div>
      <div className="shift-table">
        {shifts.map((shift) => (
          <div className="shift-row" key={shift.id}>
            <div className="col shift">{shift.label}</div>
            <div className="col cna">{shift.cnaHours} hrs</div>
            <div className="col nurse">{shift.nurseHours} hrs</div>
            <div className="col subtotal">{shift.subtotal} hrs</div>
          </div>
        ))}
      </div>
      <div className="sum-row">
        <span className="sum-label">Sum of shifts</span>
        <span className="sum-value">
          {sumOfShifts.toFixed(1)} hrs/resident/day
        </span>
      </div>

      {/* Compliance */}
      <div
        className={`compliance-card ${isCompliant ? "compliant" : "non-compliant"}`}
      >
        <h2 className="compliance-title">Current Compliance (simulated)</h2>
        <p className="compliance-line">
          Census: {census} residents · Scheduled direct care hours:{" "}
          {scheduledHours} hrs/day
        </p>
        <p className="compliance-line">
          = {actualRatio} hrs/resident/day →{" "}
          {isCompliant ? "✓ Compliant" : "✗ Not Compliant"} (≥ {minimumRatio}{" "}
          minimum, BR-01)
        </p>
        <p className="compliance-usedby-label">Used by:</p>
        <p className="compliance-line">{usedBy.join(" · ")}</p>
      </div>
    </div>
  );
};

export default Staffing;

import React, { useState } from "react";
import "./Modal.css";

export default function SubmitReportModal({ isOpen, onClose }) {
  const [isChecked, setIsChecked] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Submit External Report</h2>
        <p>Confirms this incident has been reported to the applicable regulatory body.</p>

        <div className="modal-info-box">
          <div className="info-row">
            <span className="label">Regulatory body</span>
            <span className="value">CA Dept. of Public Health</span>
          </div>
          <div className="info-row">
            <span className="label">Report deadline</span>
            <span className="value">2026-07-04 09:15 (24h, Major)</span>
          </div>
        </div>

        <div className="warning-box">
          Simulated action — no data is actually transmitted externally (NFR-05).
        </div>

        <label className="checkbox-container">
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={(e) => setIsChecked(e.target.checked)} 
          />
          <span>I confirm this incident has been reported to the appropriate regulatory body outside this system.</span>
        </label>

        <div className="modal-actions">
          <button className="btn-cancel" onClick={() => {
    console.log("Nút Cancel đã được bấm!"); 
    onClose(); 
}}>
  Cancel
</button>
          <button 
            className="btn-submit" 
            disabled={!isChecked}
            onClick={() => { alert("Report submitted successfully!"); onClose(); }}
          >
            Mark as Reported
          </button>
        </div>
      </div>
    </div>
  );
}
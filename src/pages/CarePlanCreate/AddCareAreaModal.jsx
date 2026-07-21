import React from "react";
import "./AddCareAreaModal.css"; // Tách phần CSS của modal sang file này

const AddCareAreaModal = ({ isOpen, onClose, onAdd }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">Add Custom Care Area</h3>
        <p className="modal-desc">
          Use this for a clinical need not covered by the suggested Care Areas.
        </p>

        <label className="modal-label">Care Area Name</label>
        <input
          type="text"
          className="modal-input"
          placeholder="e.g. Psychosocial, Pain Management..."
        />

        <div className="modal-badge-wrapper">
          <span className="badge-category">Category: Other</span>
        </div>

        <p className="modal-note">
          A blank Care Area is added below with this name — <br />
          add ≥1 goal + ≥1 intervention before saving (UC-M2-01 EX2).
        </p>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-submit-modal" onClick={onAdd}>
            Add Care Area
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCareAreaModal;

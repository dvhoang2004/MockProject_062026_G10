import React, { useState, useEffect } from "react";
import "./AddHolidayModal.css";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const emptyForm = {
  name: "",
  dateType: "Fixed Date",
  month: "",
  day: "",
  repeatsAnnually: true,
};

const AddHolidayModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (isOpen) {
      setForm(initialData ? { ...emptyForm, ...initialData } : emptyForm);
    }
  }, [isOpen, initialData]);

  const isEditMode = Boolean(initialData);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Placeholder: no real API call yet, just simulate success
    console.log("Save Changes clicked successfully:", form);
    onSave && onSave(form);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      console.log("Exit modal");
    }
  };

  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="add-holiday-modal">
        <h2 className="modal-title">
          {isEditMode ? "Edit State Holiday" : "Add State Holiday"}
        </h2>
        <p className="modal-subtitle">
          Changes apply to future occurrences only — historical audit log
          entries are preserved (HOL-BR-04).
        </p>

        <div className="form-group">
          <label>
            Holiday Name <span className="required">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="e.g. Cesar Chavez Day"
          />
        </div>

        <div className="form-group">
          <label>Date Type</label>
          <select
            value={form.dateType}
            onChange={(e) => handleChange("dateType", e.target.value)}
          >
            <option value="Fixed Date">
              Fixed Date (recurs same day every year)
            </option>
            <option value="Floating Rule">
              Floating Rule (e.g. 4th Friday of September)
            </option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Month</label>
            <select
              value={form.month}
              onChange={(e) => handleChange("month", e.target.value)}
            >
              <option value="">Select month...</option>
              {MONTHS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Day</label>
            <input
              type="number"
              min="1"
              max="31"
              value={form.day}
              onChange={(e) => handleChange("day", e.target.value)}
              placeholder="e.g. 31"
            />
          </div>
        </div>

        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={form.repeatsAnnually}
            onChange={(e) => handleChange("repeatsAnnually", e.target.checked)}
          />
          Repeats every year on this date
        </label>

        <p className="modal-footnote">
          HOL-BR-02: this date must not already be used by another active State
          Holiday. For a floating date (e.g. "4th Friday of September"), switch
          Date Type to "Floating Rule" instead.
        </p>

        {isEditMode && (
          <p className="modal-last-updated">
            Last updated by Victor Alvarez, System Admin on 07/13/2026 09:42.
          </p>
        )}

        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="save-button" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHolidayModal;

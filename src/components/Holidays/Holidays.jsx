import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";

import "./Holidays.css";
import StateHolidayCard from "./StateHolidayCard/StateHolidayCard";
import AddHolidayModal from "./AddHolidayModal/AddHolidayModal";

const Holidays = ({ stateHolidays, federalHolidays }) => {
  const [holidays, setHolidays] = useState(stateHolidays);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingHoliday, setEditingHoliday] = useState(null);

  // Placeholder: toggling active state locally only, not persisted to backend yet
  const handleToggle = (id) => {
    setHolidays((prev) =>
      prev.map((h) => (h.id === id ? { ...h, active: !h.active } : h)),
    );
    console.log("Toggled holiday active state successfully:", id);
  };

  const handleAddHoliday = () => {
    setEditingHoliday(null);
    setIsModalOpen(true);
  };

  const handleEdit = (id) => {
    const holiday = holidays.find((h) => h.id === id);
    setEditingHoliday(holiday);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingHoliday(null);
  };

  // Placeholder: replace with actual API call (create/update holiday) later
  const handleSaveHoliday = (formData) => {
    if (editingHoliday) {
      console.log("Holiday updated successfully:", formData);
    } else {
      console.log("Holiday added successfully:", formData);
    }
    handleCloseModal();
  };

  const half = Math.ceil(federalHolidays.length / 2);
  const leftColumn = federalHolidays.slice(0, half);
  const rightColumn = federalHolidays.slice(half);

  return (
    <div className="holidays-tab">
      <div className="state-holidays-card">
        <div className="state-holidays-header">
          <div className="state-holidays-title-group">
            <FiCalendar className="calendar-icon" />
            <div>
              <h2 className="state-holidays-title">
                State Holidays Configuration (Active State: California)
              </h2>
              <p className="state-holidays-subtitle">
                Manage custom holidays mandated by the state legislature.
                Changes affect shift/audit logs and holiday warning badges only
                — does not change SLA or staffing minimums.
              </p>
            </div>
          </div>
          <button className="add-holiday-button" onClick={handleAddHoliday}>
            + Add State Holiday
          </button>
        </div>

        <div className="holiday-table-header">
          <div className="col holiday-name">Holiday Name</div>
          <div className="col holiday-date">Date (Month/Day)</div>
          <div className="col holiday-repeat">Repeat Annually</div>
          <div className="col holiday-active">Active</div>
          <div className="col holiday-actions">Actions</div>
        </div>

        <div className="holiday-table">
          {holidays.map((h) => (
            <StateHolidayCard
              key={h.id}
              holiday={h}
              onToggle={handleToggle}
              onEdit={handleEdit}
            />
          ))}
        </div>

        <p className="holiday-footnote">
          HOL-BR-02: no 2 State Holidays on the same date · HOL-BR-03: cannot
          hard-delete a Holiday already referenced in audit log — toggle off
          (Deactivate) only, no delete.
          <br />
          Last updated by Victor Alvarez, System Admin on 07/13/2026 09:42.
        </p>
      </div>

      <div className="federal-holidays-card">
        <h2 className="federal-holidays-title">
          Federal Holidays (System-Defined, read-only)
        </h2>
        <p className="federal-holidays-subtitle">
          Fixed by federal law - seeded once in Demo Data Seeder (AD-10,
          HOL-BR-01). Shown for reference only so badges elsewhere can be
          verified; not editable.
        </p>

        <div className="federal-holidays-grid">
          <div className="federal-column">
            {leftColumn.map((h) => (
              <div className="federal-row" key={h.id}>
                <span className="federal-name">{h.name}</span>
                <span className="federal-date">{h.date}</span>
              </div>
            ))}
          </div>
          <div className="federal-column">
            {rightColumn.map((h) => (
              <div className="federal-row" key={h.id}>
                <span className="federal-name">{h.name}</span>
                <span className="federal-date">{h.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddHolidayModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveHoliday}
        initialData={editingHoliday}
      />
    </div>
  );
};

export default Holidays;

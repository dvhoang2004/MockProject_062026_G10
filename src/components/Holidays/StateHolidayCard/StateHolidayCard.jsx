import React from "react";
import "./StateHolidayCard.css";

const StateHolidayCard = ({ holiday, onToggle, onEdit }) => {
  const { id, name, date, repeatAnnually, active } = holiday || {};

  return (
    <div className="state-holiday-row">
      <div className="col state-holiday-name">{name}</div>
      <div className="col state-holiday-date">{date}</div>
      <div className="col state-holiday-repeat">{repeatAnnually}</div>
      <div className="col state-holiday-active">
        <button
          type="button"
          className={`toggle-switch ${active ? "on" : "off"}`}
          onClick={() => onToggle && onToggle(id)}
          aria-pressed={active}
        >
          <span className="toggle-knob" />
        </button>
      </div>
      <div className="col state-holiday-actions">
        <button className="edit-link" onClick={() => onEdit && onEdit(id)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default StateHolidayCard;

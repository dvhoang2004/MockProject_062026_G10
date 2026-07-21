import React from "react";
import "./EquipmentCard.css";

const statusClass = {
  "In Service": "green",
  "Under Maintenance": "yellow",
  "Out of Service": "gray",
};

const EquipmentCard = ({ item, onView }) => {
  const {
    name,
    category,
    assetTag,
    qtyInUse,
    qtyTotal,
    status,
    assignedTo,
    unitValue,
  } = item;

  return (
    <div className="equipment-row">
      <div className="col equipment-name">{name}</div>
      <div className="col equipment-category">{category}</div>
      <div className="col equipment-assetTag">{assetTag}</div>
      <div className="col equipment-qty">
        {qtyInUse}/{qtyTotal}
      </div>
      <div className="col equipment-status">
        <span className={`badge ${statusClass[status] || "gray"}`}>
          {status}
        </span>
      </div>
      <div className="col equipment-assignedTo">{assignedTo}</div>
      <div className="col equipment-unitValue">
        ${unitValue.toLocaleString()}
      </div>
      <div className="col equipment-action">
        <button className="view-link" onClick={() => onView && onView(item)}>
          View
        </button>
      </div>
    </div>
  );
};

export default EquipmentCard;

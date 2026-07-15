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
      <div className="col name">{name}</div>
      <div className="col category">{category}</div>
      <div className="col assetTag">{assetTag}</div>
      <div className="col qty">
        {qtyInUse}/{qtyTotal}
      </div>
      <div className="col status">
        <span className={`badge ${statusClass[status] || "gray"}`}>
          {status}
        </span>
      </div>
      <div className="col assignedTo">{assignedTo}</div>
      <div className="col unitValue">${unitValue.toLocaleString()}</div>
      <div className="col action">
        <button className="view-link" onClick={() => onView && onView(item)}>
          View
        </button>
      </div>
    </div>
  );
};

export default EquipmentCard;

import React from "react";
import "./ConsumableSupplyCard.css";

const statusClass = {
  OK: "green",
  "Low Stock": "red",
};

const ConsumableSupplyCard = ({ supply }) => {
  const {
    name,
    category,
    stockOnHand,
    reorderThreshold,
    unitCost,
    privatePayRate,
    status,
  } = supply;

  return (
    <div className="supply-row">
      <div className="col supply-name">{name}</div>
      <div className="col supply-category">{category}</div>
      <div className="col supply-stockOnHand">{stockOnHand}</div>
      <div className="col supply-reorderThreshold">{reorderThreshold}</div>
      <div className="col supply-unitCost">{unitCost}</div>
      <div className="col supply-privatePayRate">{privatePayRate}</div>
      <div className="col supply-status">
        <span className={`badge ${statusClass[status] || "gray"}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default ConsumableSupplyCard;

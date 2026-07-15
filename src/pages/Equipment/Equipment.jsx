import React from "react";
import {
  FiLayers,
  FiUser,
  FiClock,
  FiCreditCard,
  FiCalendar,
} from "react-icons/fi";
import "./Equipment.css";
import EquipmentCard from "../../components/EquipmentCard/EquipmentCard";
import ConsumableSupplyCard from "../../components/ConsumableSupplyCard/ConsumableSupplyCard";
import {
  dmeStats,
  dmeItems,
  consumableSupplies,
  holidayWarning,
} from "./equipmentMockData";

const EquipmentPage = () => {
  const handleAddEquipment = () => {
    // Placeholder: no real API call yet
    console.log("Add Equipment clicked");
  };

  const handleView = (item) => {
    console.log("View equipment", item.id);
  };

  const inUsePercentText = `${dmeStats.inUse} of ${dmeStats.totalItems} units currently in use`;

  return (
    <div className="equipment-page">
      <div className="breadcrumb">Admin &gt; Equipment &amp; Supply</div>
      <h1 className="page-title">Equipment &amp; Supply Inventory</h1>
      <p className="page-subtitle">
        Durable Medical Equipment (DME) asset register and Consumable Supplies
        stock — see Master Plan §9.1 for billing model
      </p>

      <h2 className="section-title">Durable Medical Equipment (DME)</h2>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-icon blue">
            <FiLayers />
          </span>
          <div>
            <div className="stat-label">Total DME Items</div>
            <div className="stat-value">{dmeStats.totalItems}</div>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon green">
            <FiUser />
          </span>
          <div>
            <div className="stat-label">In Use</div>
            <div className="stat-value">{dmeStats.inUse}</div>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon yellow">
            <FiClock />
          </span>
          <div>
            <div className="stat-label">Under Maintenance</div>
            <div className="stat-value">{dmeStats.underMaintenance}</div>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon purple">
            <FiCreditCard />
          </span>
          <div>
            <div className="stat-label">Total Asset Value</div>
            <div className="stat-value">
              ${dmeStats.totalAssetValue.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <p className="in-use-note">{inUsePercentText}</p>

      <div className="toolbar">
        <select className="filter-select">
          <option>Category: All</option>
        </select>
        <select className="filter-select">
          <option>Status: All</option>
        </select>
        <button className="add-equipment-button" onClick={handleAddEquipment}>
          + Add Equipment
        </button>
      </div>

      <div className="equipment-table-header">
        <div className="col name">Item</div>
        <div className="col category">Category</div>
        <div className="col assetTag">Asset Tag</div>
        <div className="col qty">Qty (In Use/Total)</div>
        <div className="col status">Status</div>
        <div className="col assignedTo">Assigned To</div>
        <div className="col unitValue">Unit Value</div>
        <div className="col action"></div>
      </div>

      <div className="equipment-table">
        {dmeItems.map((item) => (
          <EquipmentCard key={item.id} item={item} onView={handleView} />
        ))}
      </div>

      <p className="footnote">
        Unit Value is an internal reference for depreciation/maintenance
        planning only. DME used inside the facility is bundled into the per-diem
        rate (CMS SNF Consolidated Billing, §9.1) — it is never billed per-item
        to Medicare Part A.
      </p>

      <div className="consumables-card">
        <h2 className="section-title">Consumable Supplies</h2>
        <p className="consumables-subtitle">
          Unit Cost = internal COGS tracking. Private-Pay Rate = simulated
          billing rate for residents not on Medicare Part A (§9.1, NFR-05).
        </p>

        <div className="supply-table-header">
          <div className="col name">Item</div>
          <div className="col category">Category</div>
          <div className="col stockOnHand">Stock on Hand</div>
          <div className="col reorderThreshold">Reorder Threshold</div>
          <div className="col unitCost">Unit Cost</div>
          <div className="col privatePayRate">Private-Pay Rate</div>
          <div className="col status">Status</div>
        </div>

        <div className="supply-table">
          {consumableSupplies.map((supply) => (
            <ConsumableSupplyCard key={supply.id} supply={supply} />
          ))}
        </div>

        <div className="holiday-warning-banner">
          <FiCalendar className="holiday-icon" />
          <span>{holidayWarning}</span>
        </div>
      </div>
    </div>
  );
};

export default EquipmentPage;

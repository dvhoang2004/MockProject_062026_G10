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
    <div className="equipmentPage">
      <div className="equipmentPage-breadcrumb">
        Admin &gt; Equipment &amp; Supply
      </div>
      <h1 className="equipmentPage-title">Equipment &amp; Supply Inventory</h1>
      <p className="equipmentPage-subtitle">
        Durable Medical Equipment (DME) asset register and Consumable Supplies
        stock — see Master Plan §9.1 for billing model
      </p>

      <h2 className="equipmentPage-sectionTitle">
        Durable Medical Equipment (DME)
      </h2>

      <div className="equipmentPage-statsRow">
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

      <p className="equipmentPage-note">{inUsePercentText}</p>

      <div className="equipmentPage-toolbar">
        <select className="filter-select">
          <option>Category: All</option>
        </select>
        <select className="filter-select">
          <option>Status: All</option>
        </select>
        <button
          className="equipmentPage-addEquipmentButton"
          onClick={handleAddEquipment}
        >
          + Add Equipment
        </button>
      </div>

      <div className="equipmentPage-tableHeader">
        <div className="col equipment-name">Item</div>
        <div className="col equipment-category">Category</div>
        <div className="col equipment-assetTag">Asset Tag</div>
        <div className="col equipment-qty">Qty (In Use/Total)</div>
        <div className="col equipment-status">Status</div>
        <div className="col equipment-assignedTo">Assigned To</div>
        <div className="col equipment-unitValue">Unit Value</div>
        <div className="col equipment-action"></div>
      </div>

      <div className="equipmentPage-table">
        {dmeItems.map((item) => (
          <EquipmentCard key={item.id} item={item} onView={handleView} />
        ))}
      </div>

      <p className="equipmentPage-footnote">
        Unit Value is an internal reference for depreciation/maintenance
        planning only. DME used inside the facility is bundled into the per-diem
        rate (CMS SNF Consolidated Billing, §9.1) — it is never billed per-item
        to Medicare Part A.
      </p>

      <div className="equipmentPage-consumablesCard">
        <h2 className="equipmentPage-sectionTitle">Consumable Supplies</h2>
        <p className="equipmentPage-consumablesSubtitle">
          Unit Cost = internal COGS tracking. Private-Pay Rate = simulated
          billing rate for residents not on Medicare Part A (§9.1, NFR-05).
        </p>

        <div className="equipmentPage-supplyTableHeader">
          <div className="col supply-name">Item</div>
          <div className="col supply-category">Category</div>
          <div className="col supply-stockOnHand">Stock on Hand</div>
          <div className="col supply-reorderThreshold">Reorder Threshold</div>
          <div className="col supply-unitCost">Unit Cost</div>
          <div className="col supply-privatePayRate">Private-Pay Rate</div>
          <div className="col supply-status">Status</div>
        </div>

        <div className="equipmentPage-supplyTable">
          {consumableSupplies.map((supply) => (
            <ConsumableSupplyCard key={supply.id} supply={supply} />
          ))}
        </div>

        <div className="equipmentPage-holidayWarningBanner">
          <FiCalendar className="equipmentPage-holidayIcon" />
          <span>{holidayWarning}</span>
        </div>
      </div>
    </div>
  );
};

export default EquipmentPage;

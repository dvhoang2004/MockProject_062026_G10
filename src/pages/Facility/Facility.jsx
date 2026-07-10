import React, { useState } from "react";

import "./Facility.css";
import GeneralInfo from "../../components/GeneralInfo/GeneralInfo";
import RoomsWings from "../../components/RoomsWings/RoomsWings";
import RoomRate from "../../components/RoomRate/RoomRate";
import ClinicalCapability from "../../components/ClinicalCapability/ClinicalCapability";
import {
  mockRooms,
  generalInfoMockdata,
  roomRatesMockdata,
  capabilitiesMockdata,
} from "./facilityMockData";

const TABS = [
  { key: "general", label: "General Info" },
  { key: "rooms", label: "Rooms & Wings" },
  { key: "rate", label: "Room Rate" },
  { key: "clinical", label: "Clinical Capability" },
];

const navChoices = {
  general: "General Info",
  rooms: "Rooms & Wings",
  rate: "Room Rate",
  clinical: "Clinical Capability",
};

const FacilityPage = () => {
  const [activeTab, setActiveTab] = useState("rooms");

  const renderTab = () => {
    switch (activeTab) {
      case "general":
        return <GeneralInfo generalInfoMockdata={generalInfoMockdata} />;
      case "rooms":
        return <RoomsWings mockRooms={mockRooms} />;
      case "rate":
        return <RoomRate roomRatesMockdata={roomRatesMockdata} />;
      case "clinical":
        return (
          <ClinicalCapability capabilitiesMockdata={capabilitiesMockdata} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="facility-page">
      <div className="breadcrumb">
        Admin &gt; Facility &gt; {navChoices[activeTab]}
      </div>
      <h1 className="page-title">Facility Settings</h1>
      <p className="page-subtitle">
        NHMS Demo Skilled Nursing Facility · facility_id FAC-0042 · Target
        state: California
      </p>

      <div className="tabs">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">{renderTab()}</div>
    </div>
  );
};

export default FacilityPage;

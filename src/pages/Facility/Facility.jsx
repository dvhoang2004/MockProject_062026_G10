import React, { useState } from "react";

import "./Facility.css";
import GeneralInfo from "../../components/GeneralInfo/GeneralInfo";
import RoomsWings from "../../components/RoomsWings/RoomsWings";
import RoomRate from "../../components/RoomRate/RoomRate";
import ClinicalCapability from "../../components/ClinicalCapability/ClinicalCapability";
import Holidays from "../../components/Holidays/Holidays";
import {
  mockRooms,
  generalInfoMockdata,
  roomRatesMockdata,
  capabilitiesMockdata,
  stateHolidaysMockdata,
  federalHolidaysMockdata,
} from "./facilityMockData";

const TABS = [
  { key: "general", label: "Facility Info" },
  { key: "holidays", label: "Holidays" },
];

const navChoices = {
  general: "Facility Info",
  holidays: "Holidays",
};

const FacilityPage = () => {
  const [activeTab, setActiveTab] = useState("general");

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
            className={`tab-button ${activeTab === tab.key ? "active-tab" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeTab === "general" ? (
          <div className="facility-info-grid">
            <RoomsWings className="item-1" mockRooms={mockRooms} />
            <GeneralInfo
              className="item-2"
              generalInfoMockdata={generalInfoMockdata}
            />
            <RoomRate
              className="item-3"
              roomRatesMockdata={roomRatesMockdata}
            />
            <ClinicalCapability
              className="item-4"
              capabilitiesMockdata={capabilitiesMockdata}
            />
          </div>
        ) : (
          <Holidays
            stateHolidays={stateHolidaysMockdata}
            federalHolidays={federalHolidaysMockdata}
          />
        )}
      </div>
    </div>
  );
};

export default FacilityPage;

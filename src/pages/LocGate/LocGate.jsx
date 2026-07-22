import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NurseSidebar from "../../components/Sidebar/NurseSidebar";
import "./LocGate.css";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdMenu,
  MdDashboard,
  MdPeople,
  MdAssignment,
  MdBloodtype,
  MdReportProblem,
  MdBarChart,
  MdErrorOutline,
  MdLockOutline,
  MdArrowForward,
  MdLogout,
} from "react-icons/md";

const CarePlanLocked = () => {
  const navigate = useNavigate();
  return (
    <div className="cp-locked-layout">
      {/* SIDEBAR */}
      <NurseSidebar />
      {/* MAIN CONTENT */}
      <main className="cp-locked-main">
        {/* HEADER TOP */}
        <header className="cp-locked-header-top">
          <div className="header-left"></div>
          <div className="header-right">
            <MdNotificationsNone className="icon-action" size={26} />
            <MdHelpOutline className="icon-action" size={26} />
            <div className="user-profile">
              <MdAccountCircle size={34} color="#94a3b8" />
              <div className="user-info">
                <span className="user-name">Anna Lee</span>
                <span className="user-role">Nurse</span>
              </div>
              <MdArrowDropDown size={20} color="#475569" />
            </div>
          </div>
        </header>

        {/* WORKSPACE */}
        <div className="cp-locked-workspace">
          <div className="cp-locked-container">
            <div className="breadcrumb">Care Planning &gt; New Care Plan</div>

            {/* PAGE TITLE */}
            <div className="page-header-block">
              <h1>New Care Plan</h1>
              <div className="subtitle-row">
                <p>Elena Ramos · Room 106A</p>
                <span className="badge-warning-outline">
                  LOC: Suggested (Tier 1)
                </span>
              </div>
            </div>

            {/* ALERT BANNER */}
            <div className="alert-warning-banner">
              <MdErrorOutline size={20} className="alert-icon" />
              <span>
                <strong>
                  Level of Care is not yet Confirmed for this resident.
                </strong>
              </span>
            </div>

            {/* LOCKED STATE CARD */}
            <div className="locked-card-wrapper">
              <div className="locked-card">
                <MdLockOutline
                  size={48}
                  color="#475569"
                  className="lock-icon"
                />
                <h2>Care plan creation is locked</h2>
                <p className="locked-desc">
                  A resident's Level of Care must be Confirmed before
                  <br />a care plan can be created for them (gate LC-G4).
                </p>

                {/* Nút bấm mờ kèm Tooltip */}
                <div className="tooltip-wrapper">
                  <div className="tooltip-box">
                    Confirm LOC classification first.
                  </div>
                  <button className="btn-disabled" disabled>
                    Create Care Plan
                  </button>
                </div>

                {/* Nút chuyển hướng */}
                <span
                  className="rpd-link-action"
                  onClick={() => navigate("/loc/classification")}
                  style={{ cursor: "pointer" }}
                >
                  <button className="btn-redirect">
                    Go to LOC Classification <MdArrowForward size={16} />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarePlanLocked;

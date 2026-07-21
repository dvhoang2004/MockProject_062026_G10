// ChartLockConfirmation.jsx
import "./ChartLockConfirmation.css";
import { chartLockData } from "../CarePlanning/Dailytask/data";
import { RiLock2Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

function ChartLockConfirmation() {
  const { patient, incident, message, buttons } = chartLockData;

  return (
    <div className="chart-lock-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        Incident &amp; Risk &gt; Chart Lock Confirmation
      </div>

      {/* Main Card */}
      <div className="lock-card">
        {/* Icon */}
        <div className="lock-icon">
          <RiLock2Line />
        </div>

        {/* Title */}
        <h1>{message.title}</h1>

        {/* Description */}
        <p className="lock-description">
          {patient.name}'s chart was automatically locked
          <br />
          at {incident.date} {incident.time} ({incident.rule}).
        </p>

        {/* Incident Reference */}
        <div className="reference-card">
          <div className="reference-header">
            <span>Incident reference</span>

            <strong>{incident.reference}</strong>
          </div>

          <p>{message.detail}</p>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button className="back-btn">
            {buttons.back}
          </button>

          <button className="view-btn">
            {buttons.view}

            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChartLockConfirmation;
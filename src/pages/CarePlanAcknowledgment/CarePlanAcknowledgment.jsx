// CarePlanAcknowledgment.jsx

import "./CarePlanAcknowledgment.css";
import { acknowledgmentData } from "../CarePlanning/Dailytask/data";

function CarePlanAcknowledgment() {
  const { patient, role, acknowledgment, sections } =
    acknowledgmentData;

  return (
    <div className="ack-page">
      {/* Header */}
      <div className="ack-header">
        <div className="breadcrumb">
          Pending Acknowledgment &gt; {patient.name}
        </div>

        <h1>
          Care Plan Acknowledgment — {patient.name}
        </h1>

        <p className="sub-title">
          Submitted by Anna Lee, RN • Pending Review •{" "}
          {patient.submitDate}
        </p>
      </div>

      {/* Content */}
      <div className="ack-layout">
        {/* Left */}
        <div className="ack-left">
          {/* Read only */}
          <div className="readonly-card">
            <span>
              Read-only — care plan content cannot be edited
              here.
            </span>

            <span className="readonly-badge">
              Read-only
            </span>
          </div>

          {/* Care Sections */}
          {sections.map(function (section) {
            return (
              <div
                className="care-card"
                key={section.id}
              >
                <div className="care-header">
                  <h2>{section.title}</h2>

                  <span
                    className={`status ${section.statusClass}`}
                  >
                    {section.status}
                  </span>
                </div>

                <p className="goal">
                  {section.goal}
                </p>

                <ul>
                  {section.tasks.map(function (
                    task,
                    index
                  ) {
                    return (
                      <li key={index}>{task}</li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Right */}
        <div className="ack-right">
          {/* Role */}
          <div className="side-card">
            <h2>Your Role</h2>

            <h3>{role.title}</h3>

            <p>{role.name}</p>

            <p>{role.license}</p>

            <p>NPI {role.npi}</p>
          </div>

          {/* Acknowledge */}
          <div className="side-card">
            <h2>IDT Acknowledgment</h2>

            <p className="ack-text">
              Your e-signature is recorded
              immutably and shown to DON.
            </p>

            <button className="esign-btn">
              Acknowledge &amp; e-Sign
            </button>

            <div className="signed-info">
              <span className="label">
                Dietary status:
              </span>

              <div className="signed-row">
                <span>
                  {acknowledgment.dietaryStatus}
                </span>

                <span className="signed-badge">
                  {acknowledgment.signedStatus}
                </span>
              </div>

              <strong>
                {acknowledgment.signedBy}
              </strong>

              <small>
                {acknowledgment.signedTime}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarePlanAcknowledgment;
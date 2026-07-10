// RecordVitals.jsx

import "./RecordVitals.css";
import { recordVitalsData } from "../CarePlanning/Dailytask/data";

const RecordVitals = () => {
  const { patient, recorder, vitals, abnormal } = recordVitalsData;

  return (
    <div className="record-vitals-page">
      {/* Header */}
      <div className="page-header">
        <div className="breadcrumb">
          Care Planning <span>&gt;</span> Bedside Vitals
        </div>

        <h1>Record Vitals — {patient.name}</h1>

        <p className="sub-title">
          {patient.room} • {patient.task} • due {patient.due}
        </p>
      </div>

      {/* Content */}
      <div className="record-layout">
        {/* Left */}
        <div className="left-card">
          <div className="card-title">Bedside Vitals</div>

          <div className="card-desc">
            Enter measured values. Out-of-range readings are flagged.
          </div>

          <div className="vitals-grid">
            {/* Systolic */}
            <div className="field">
              <label>Blood Pressure (systolic)</label>

              <div className="input-group">
                <input
                  type="text"
                  defaultValue={vitals.systolic}
                />
                <span>mmHg</span>
              </div>
            </div>

            {/* Diastolic */}
            <div className="field">
              <label>Blood Pressure (diastolic)</label>

              <div className="input-group">
                <input
                  type="text"
                  defaultValue={vitals.diastolic}
                />
                <span>mmHg</span>
              </div>
            </div>

            {/* Heart Rate */}
            <div className="field">
              <label>Heart Rate</label>

              <div className="input-group">
                <input
                  type="text"
                  defaultValue={vitals.heartRate}
                />
                <span>bpm</span>
              </div>
            </div>

            {/* SpO2 */}
            <div className="field">
              <label>SpO2</label>

              <div className="input-group abnormal-input">
                <input
                  type="text"
                  defaultValue={vitals.spo2}
                />
                <span>%</span>
              </div>

              <small className="error-text">
                Abnormal — supervising nurse will be notified.
              </small>
            </div>

            {/* Temperature */}
            <div className="field temperature">
              <label>Temperature</label>

              <div className="input-group">
                <input
                  type="text"
                  defaultValue={vitals.temperature}
                />
                <span>°F</span>
              </div>
            </div>

            {/* Notes */}
            <div className="field notes">
              <label>Notes</label>

              <textarea
                rows="4"
                defaultValue={vitals.notes}
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="right-panel">
          <div className="recorder-card">
            <h3>Recorder</h3>

            <h4>{recorder.name}</h4>

            <p>{recorder.captured}</p>

            <div className="info-row">
              <span>Timestamp</span>
              <strong>{recorder.timestamp}</strong>
            </div>

            <div className="info-row">
              <span>Linked task</span>
              <strong>{recorder.linkedTask}</strong>
            </div>
          </div>

          <div className="alert-card">
            <h3>{abnormal.title}</h3>

            <p>{abnormal.message1}</p>

            <p>{abnormal.message2}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-action">
        <button className="cancel-btn">
          Cancel
        </button>

        <button className="save-btn">
          Save &amp; Mark Done
        </button>
      </div>
    </div>
  );
};

export default RecordVitals;
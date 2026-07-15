import "./ReportIncident.css";
import { incidentData } from "../CarePlanning/Dailytask/data";

function ReportIncident() {
  const {  reporter, form, workflow, warning } = incidentData;

  return (
    <div className="incident-page">
      {/* Header */}
      <div className="incident-header">
        <div className="breadcrumb">
          Incident & Risk &gt; Report Incident
        </div>

        <h1>Report New Incident</h1>

        <p className="sub-title">
          Complete all required fields. Submitting will auto-lock the
          resident's chart (BR-07).
        </p>
      </div>

      {/* Content */}
      <div className="incident-layout">
        {/* Left */}
        <div className="incident-left">
          <div className="incident-card">
            <h2>Incident Details</h2>

            <div className="form-grid">
              {/* Resident */}
              <div className="form-group">
                <label>
                  Resident <span>*</span>
                </label>

                <input
                  type="text"
                  value={form.resident}
                  readOnly
                />
              </div>

              {/* Incident Type */}
              <div className="form-group">
                <label>
                  Incident Type <span>*</span>
                </label>

                <select defaultValue={form.incidentType}>
                  <option>Fall</option>
                  <option>Medication Error</option>
                  <option>Injury</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Severity */}
              <div className="form-group">
                <label>
                  Severity <span>*</span>
                </label>

                <select defaultValue={form.severity}>
                  <option>Minor</option>
                  <option>Moderate</option>
                  <option>Major</option>
                </select>
              </div>

              {/* Date */}
              <div className="form-group">
                <label>
                  Date / Time of Incident <span>*</span>
                </label>

                <input
                  type="text"
                  value={form.incidentDate}
                  readOnly
                />
              </div>

              {/* Location */}
              <div className="form-group full-width">
                <label>
                  Location <span>*</span>
                </label>

                <input
                  type="text"
                  value={form.location}
                  readOnly
                />
              </div>

              {/* Description */}
              <div className="form-group full-width">
                <label>
                  Description <span>*</span>
                </label>

                <textarea
                  rows="4"
                  defaultValue={form.description}
                />
              </div>

              {/* Witnesses */}
              <div className="form-group full-width">
                <label>Witnesses (optional)</label>

                <input
                  type="text"
                  value={form.witnesses}
                  readOnly
                />
              </div>

              {/* Immediate Action */}
              <div className="form-group full-width">
                <label>Immediate Action Taken</label>

                <textarea
                  rows="4"
                  defaultValue={form.actionTaken}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="incident-right">
          {/* Reporter */}
          <div className="side-card">
            <h2>Reporting Party</h2>

            <h3>{reporter.name}</h3>

            <p>{reporter.captured}</p>

            <div className="info-row">
              <span>Timestamp</span>
              <strong>{reporter.timestamp}</strong>
            </div>
          </div>

          {/* Workflow */}
          <div className="side-card">
            <h2>What happens next</h2>

            <ol>
              {workflow.map(function (item, index) {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          </div>

          {/* Warning */}
          <div className="warning-card">
            {warning}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-action">
        <button className="cancel-btn">
          Cancel
        </button>

        <button className="submit-btn">
          Report Incident
        </button>
      </div>
    </div>
  );
}

export default ReportIncident;
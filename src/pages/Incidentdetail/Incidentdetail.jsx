import { useState } from "react";
import "./Incidentdetail.css";
import { incidentDetailData } from "../../pages/CarePlanning/Dailytask/data";


import SubmitReportModal from "../../pages/Incidentdetail/Submitexternalreport/SubmitexternalreportModal";
// import UnlockChartModal from "../../pages/Incidentdetail/Chartunlock";


import { TbChartLine } from "react-icons/tb";
import { RiShieldCheckLine } from "react-icons/ri";

export default function IncidentDetail() {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);

  const {
    incident,
    reportDetails,
    attachments,
    timeline,
    sla,
    chartStatus,
    donActions,
  } = incidentDetailData;

  return (
    <div className="incident-page">
      {/* BREADCRUMB */}
      <p className="breadcrumb">
        Incident & Risk &gt; Incident List &gt; {incident.id}
      </p>

      {/* HEADER */}
      <div className="title-row">
        <h1>Incident {incident.id} — {incident.resident}</h1>
        <span className="badge orange">{incident.status}</span>
        <span className="badge red">{incident.severity}</span>
      </div>

      <p className="sub-title">
        Fall • {incident.room} • Reported by {incident.reporter} • {incident.incidentDate}
      </p>

      {/* CONTENT */}
      <div className="content">
        {/* LEFT COLUMN */}
        <div className="left">
          <div className="card">
            <h3>Report Details (read-only)</h3>
            <div className="detail-row"><strong>Location</strong><span>{reportDetails.location}</span></div>
            <div className="detail-row"><strong>Description</strong><span>{reportDetails.description}</span></div>
            <div className="detail-row"><strong>Witnesses</strong><span>{reportDetails.witnesses}</span></div>
            <div className="detail-row"><strong>Immediate action</strong><span>{reportDetails.immediateAction}</span></div>
          </div>

          <div className="attachment">
            <h3>Attachments (simulated)</h3>
            <div className="attachment-list">
              {attachments.map((file) => (
                <button key={file.id} className="attachment-btn">
                  <span className="file-icon">{file.type === "pdf" ? "📄" : "🖼"}</span>
                  {file.name}
                </button>
              ))}
            </div>
          </div>

          <div className="timeline">
            <h3>Timeline</h3>
            {timeline.map((item) => (
              <div className="timeline-item" key={item.id}>
                <div className={`dot ${item.active ? "active" : ""}`}></div>
                <div className="timeline-content">
                  <b>{item.title}</b>
                  <p>{item.user} • {item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right">
          <div className="card green">
            <h4>{sla.title}</h4>
            <h2>{sla.remaining}</h2>
            <p>Report by {sla.reportBy}</p>
            <small>{sla.note}</small>
          </div>

          <div className="card status-card">
            <h4>
                <TbChartLine style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Chart Status
            </h4>
            <div className="status-row">
              <span className="badge red">{chartStatus.status}</span>
              <span className="status-time">{chartStatus.since}</span>
            </div>
          </div>

          {/* DON ACTIONS */}
          <div className="card">
            <h4>DON Actions</h4>
            {donActions.map((action) => (
              <button
                key={action.id}
                className={`action-btn ${action.type}`}
                disabled={action.type === "disabled"}
                onClick={() => {
                  if (action.label === "Submit External Report") setIsSubmitModalOpen(true);
                  if (action.label === "Unlock Chart") setIsUnlockModalOpen(true);
                }}
              >
                {action.label === "Submit External Report" && <RiShieldCheckLine style={{marginRight: '6px'}} />}
                {action.label}
              </button>
            ))}
            <p className="unlock-note">Unlock chart to enable (UC-M7-10).</p>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <SubmitReportModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />
      {/* <UnlockChartModal 
        isOpen={isUnlockModalOpen} 
        onClose={() => setIsUnlockModalOpen(false)} 
      /> */}
    </div>
  );
}
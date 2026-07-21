import "./IncidentdetailNurse.css";

export default function IncidentDetail() {
  return (
    <div className="incident-page">
      <p className="incident-breadcrumb">
        Incident & Risk &gt; Incident List &gt; #INC-2044
      </p>

      <div className="incident-title-row">
        <h1>Incident #INC-2044 – Robert Hayes</h1>
        <span className="incident-badge orange">Open</span>
        <span className="incident-badge red">Major</span>
      </div>

      <p className="incident-sub-title">
        Fall • Room 204B • Reported by Anna Lee, RN • 2026-07-03 09:15
      </p>

      <div className="incident-content">
        {/* LEFT */}
        <div className="incident-left">
          <div className="incident-card">
            <h3>Report Details (read-only)</h3>

            <div className="incident-detail-row">
              <strong>Location</strong>
              <span>Room 204B — bathroom</span>
            </div>

            <div className="incident-detail-row">
              <strong>Description</strong>
              <span>
                Resident found on bathroom floor near the toilet; c/o right hip pain.
              </span>
            </div>

            <div className="incident-detail-row">
              <strong>Witnesses</strong>
              <span>Marcus Rivera, CNA</span>
            </div>

            <div className="incident-detail-row">
              <strong>Immediate action</strong>
              <span>
                Assisted resident to bed, vitals taken, physician notified.
              </span>
            </div>
          </div>

          {/* Attachment */}
          <div className="incident-attachment">
            <h3>Attachments (simulated)</h3>
            <div className="attachment-chips">
              <button className="attachment-chip">
                <span className="icon">📄</span> incident_form_signed.pdf
              </button>
              <button className="attachment-chip">
                <span className="icon">📄</span> photo_bruise.jpg
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="incident-timeline">
            <h3>Timeline</h3>

            <div className="incident-timeline-item">
              <div className="incident-dot active"></div>
              <div>
                <b>Chart unlocked — reason: dislocation reduced, resident stable</b>
                <p>Denise Carter, DON • 2026-07-03 10:15</p>
              </div>
            </div>

            <div className="incident-timeline-item">
              <div className="incident-dot"></div>
              <div>
                <b>Documentation marked complete</b>
                <p>Anna Lee, RN • 2026-07-03 10:05</p>
              </div>
            </div>

            <div className="incident-timeline-item">
              <div className="incident-dot"></div>
              <div>
                <b>Progress note: reduced right hip dislocation; resident stabilized</b>
                <p>Anna Lee, RN • 2026-07-03 09:50</p>
              </div>
            </div>

            <div className="incident-timeline-item">
              <div className="incident-dot"></div>
              <div>
                <b>Progress note: Dr. Alan Cho examined resident; suspected right hip dislocation</b>
                <p>Anna Lee, RN • 2026-07-03 09:34</p>
              </div>
            </div>

            <div className="incident-timeline-item">
              <div className="incident-dot"></div>
              <div>
                <b>Chart auto-locked (BR-07)</b>
                <p>System • 2026-07-03 09:22</p>
              </div>
            </div>

            <div className="incident-timeline-item">
              <div className="incident-dot"></div>
              <div>
                <b>DON notified - SLA countdown started</b>
                <p>System • 2026-07-03 09:20</p>
              </div>
            </div>

            <div className="incident-timeline-item">
              <div className="incident-dot"></div>
              <div>
                <b>Incident reported</b>
                <p>Anna Lee, RN • 2026-07-03 09:15</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="incident-right">
          <div className="incident-card incident-sla">
            <h4>SLA – Regulatory Reporting</h4>
            <h2>14h remaining</h2>
            <p>Report by 2026-07-04 09:15</p>
            <small>NF-06 · 24–48h regulatory window</small>
          </div>

          <div className="incident-card incident-status-card">
            <h3>Chart Status</h3>
            <span className="incident-badge green">Unlocked</span>
            <p style={{ marginTop: "8px" }}>Since 10:15</p>
          </div>

        

          <div className="incident-card">
            <h3>DON Actions</h3>
            <button className="incident-action-btn primary">
              Add Progress Note
            </button>
            <button className="incident-action-btn">
              Request DON Review
            </button>
          
            <p className="incident-unlock-note">
            Chart unlock and incident resolution are DON-only actions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
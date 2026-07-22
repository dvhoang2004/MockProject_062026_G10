import "./IncidentList.css";
import { incidentListData } from "../../pages/CarePlanning/Dailytask/data";

import {
  FiAlertTriangle,
  FiClock,
  FiLock,
  FiCheckCircle,
  FiEye,
} from "react-icons/fi";

export default function IncidentList() {
  const { summary, filters, cards, incidents } = incidentListData;

  const renderIcon = (title) => {
    switch (title) {
      case "Open":
        return <FiAlertTriangle />;

      case "Overdue (SLA)":
        return <FiClock />;

      case "Chart Locked":
        return <FiLock />;

      case "Resolved (month)":
        return <FiCheckCircle />;

      default:
        return null;
    }
  };

  return (
    <div className="incident-list-page">
      {/* ================= HEADER ================= */}

      <div className="page-header">
        <p className="breadcrumb">
          Incident &amp; Risk &gt; Incident List
        </p>

        <h1>Incidents</h1>

        <div className="header-row">
          <p className="summary-text">
            {summary.total} incidents this month • {summary.open} open
          </p>

          <button className="report-btn">
            + Report Incident
          </button>
        </div>
      </div>

      {/* ================= FILTER ================= */}

      <div className="filter-row">
        <select defaultValue={filters.status}>
          <option>All Status</option>
          <option>Open</option>
          <option>Submitted</option>
          <option>Resolved</option>
        </select>

        <select defaultValue={filters.severity}>
          <option>All Severity</option>
          <option>Critical</option>
          <option>Major</option>
          <option>Moderate</option>
          <option>Minor</option>
        </select>
      </div>

      {/* ================= SUMMARY CARDS ================= */}

      <div className="summary-grid">
        {cards.map((card) => (
          <div className="summary-card" key={card.id}>
            <div className={`summary-icon ${card.color}`}>
              {renderIcon(card.title)}
            </div>

            <div className="summary-info">
              <p>{card.title}</p>

              <h2>{card.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* ================= TABLE ================= */}

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Resident</th>
              <th>Type</th>
              <th>Severity</th>
              <th>Reported</th>
              <th>SLA Countdown ▲</th>
              <th>Status</th>
              <th>Chart</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
                    {incidents.map((item) => (
              <tr key={item.id}>
                <td className="resident-cell">
                  <strong>{item.resident}</strong>
                  <br />
                  <span>{item.room}</span>
                </td>

                <td>{item.type}</td>

                <td>
                  <span
                    className={`severity-badge ${item.severityClass}`}
                  >
                    {item.severity}
                  </span>
                </td>

                <td>{item.reported}</td>

                <td>
                  <span className={`sla ${item.slaClass}`}>
                    {item.sla}
                  </span>
                </td>

                <td>
                  <span
                    className={`status-badge ${item.statusClass}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  <span
                    className={`chart-badge ${item.chartClass}`}
                  >
                    {item.chart}
                  </span>
                </td>

                <td>
                  <button className="view-btn">
                    <FiEye />
                    <span>View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
import "./Reassessment.css";
import { reassessmentData } from "../CarePlanning/Dailytask/data";

function Reassessment() {
  return (
    <div className="reassessment-page">
      {/* Header */}
      <div className="page-header">
        <div className="breadcrumb">
          Care Planning <span>&gt;</span> Reassessments
        </div>

        <h1>Reassessments</h1>

        <p>
          Care plans reaching their review cycle or flagged for change
        </p>
      </div>

      {/* Warning */}
      <div className="warning-banner">
        <span className="warning-icon">!</span>
        <span>
          3 care plans require reassessment — 1 overdue (escalated).
        </span>
      </div>

      {/* Table */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Resident</th>
              <th>Trigger</th>
              <th>Due date ▲</th>
              <th>Overdue</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {reassessmentData.map(function (item) {
              return (
                <tr key={item.id}>
                  <td className="resident">{item.name}</td>

                  <td>{item.trigger}</td>

                  <td>{item.dueDate}</td>

                  <td
                    className={
                      item.overdue === "4 days"
                        ? "overdue-red"
                        : ""
                    }
                  >
                    {item.overdue}
                  </td>

                  <td>
                    <span className={`status ${item.statusClass}`}>
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button className="action-btn">
                      {item.action}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Escalation */}
      <div className="escalation-card">
        <div className="danger-icon">!</div>

        <div>
          <h3>
            Escalation: Robert Hayes reassessment is past its grace period.
          </h3>

          <p>
            Starting a reassessment opens the Initial Assessment form
            pre-filled from the prior version.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reassessment;
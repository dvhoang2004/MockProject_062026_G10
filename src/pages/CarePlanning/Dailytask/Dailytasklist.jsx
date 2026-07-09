import "./Dailytasklist.css";
import { useState } from "react";
import dailyTasks from "./data";

function DailyTasks() {
  const [data, setData] = useState(dailyTasks);

  const { date, shift, residents } = data;

  // Tính progress
  const total = residents.reduce(
    (sum, resident) => sum + resident.tasks.length,
    0
  );

  const completed = residents.reduce(
    (sum, resident) =>
      sum +
      resident.tasks.filter((task) => task.status === "Done").length,
    0
  );

  const percent = total ? (completed / total) * 100 : 0;

  // Đổi trạng thái
  const handleStatusChange = (residentId, taskId, newStatus) => {
    setData((prev) => ({
      ...prev,
      residents: prev.residents.map((resident) => {
        if (resident.id !== residentId) return resident;

        return {
          ...resident,
          tasks: resident.tasks.map((task) =>
            task.id === taskId
              ? {
                  ...task,
                  status: newStatus,
                }
              : task
          ),
        };
      }),
    }));
  };

  return (
    <div className="daily-task">
      <div className="header">
        <div>
          <p className="breadcrumb">
            Care Planning &gt; Daily Tasks
          </p>

          <h1>Today's Tasks</h1>

          <p className="sub">
            {date} · {shift}
          </p>
        </div>

        <div className="progress-card">
          <p>Shift progress</p>

          <h2>
            {completed} / {total} tasks done
          </h2>

          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {residents.map((resident) => (
        <div
          className="resident-card"
          key={resident.id}
        >
          <div className="resident-header">
            <h3>
              {resident.name} • Room {resident.room}
            </h3>

            <span
              className={`resident-status ${resident.status.toLowerCase()}`}
            >
              {resident.status}
            </span>
          </div>

          {resident.tasks.length === 0 ? (
            <div className="empty-plan">
              <h4>No active care plan</h4>

              <p>
                Tasks appear here once the DON approves the plan.
              </p>
            </div>
          ) : (
            resident.tasks.map((task) => (
              <div
                className="task-row"
                key={task.id}
              >
                <div className="task-title">
                  {task.title}
                </div>

                <div className="task-time">
                  due {task.due}

                  {task.overdue && (
                    <span className="warning">❗</span>
                  )}
                </div>

                <div className="actions">
                  {["Done", "Missed", "Refused"].map((status) => (
                    <button
                      key={status}
                      onClick={() =>
                        handleStatusChange(
                          resident.id,
                          task.id,
                          status
                        )
                      }
                      className={
                        task.status === status
                          ? `btn active ${status.toLowerCase()}`
                          : "btn"
                      }
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default DailyTasks;
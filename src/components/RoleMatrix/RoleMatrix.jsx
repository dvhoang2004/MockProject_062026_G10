import React from "react";

import "./RoleMatriX.css";

const PERMISSION_LABELS = {
  full: "Full",
  view: "View",
  none: "—",
};

const Legend = [
  { id: "full", label: "Full", access: "create/edit" },
  { id: "view", label: "View", access: "read-only" },
  { id: "none", label: "None", access: "hidden/no access" },
];

const RoleMatrixCard = ({ roles, screens }) => {
  return (
    <div className="role-matrix-card">
      <h2 className="matrix-title">Permission Matrix</h2>
      <div className="matrix-legend">
        <p>Legend:</p>
        {Legend.map((item) => (
          <span key={item.id} className="legend-item">
            <span className={`badge ${item.id}`}>
              {item.label} = {item.access}
            </span>
          </span>
        ))}
      </div>

      <div className="matrix-table-wrapper">
        <table className="matrix-table">
          <thead>
            <tr>
              <th>Screen</th>
              {roles.map((role) => (
                <th key={role}>{role}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {screens.map((screen) => (
              <tr key={screen.id}>
                <td className="screen-name">
                  {screen.id} {screen.name}
                </td>
                {roles.map((role) => {
                  const cell = screen.access[role];
                  if (!cell) {
                    return <td key={role}>—</td>;
                  }
                  return (
                    <td key={role}>
                      <span className={`badge ${cell.level}`}>
                        {PERMISSION_LABELS[cell.level]}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleMatrixCard;

import React, { useState } from "react";
import "./DataSeeder.css";

const initialDatasets = [
  {
    id: 1,
    name: "Residents (sample)",
    records: "~20",
    lastSeeded: "2026-07-01 09:00",
    status: "Seeded",
  },
  {
    id: 2,
    name: "Care Plans (sample)",
    records: "~15",
    lastSeeded: "2026-07-01 09:00",
    status: "Seeded",
  },
  {
    id: 3,
    name: "Incidents (sample)",
    records: "~8",
    lastSeeded: null,
    status: "Not Seeded",
  },
  {
    id: 4,
    name: "Medications (sample)",
    records: "~40",
    lastSeeded: "2026-06-28 14:00",
    status: "Seeded",
  },
];

const DataSeeder = () => {
  const [datasets, setDatasets] = useState(initialDatasets);

  /**
   * @param {string} id : The ID of the dataset to load.
   * @return {void} : Updates the status of the dataset with the given ID to "Seeded" and sets the last seeded timestamp to the current date and time.
   */
  const handleLoad = (id) => {
    setDatasets((prev) =>
      prev.map((d) =>
        d.id === id
          ? {
              ...d,
              status: "Seeded",
              lastSeeded: new Date()
                .toISOString()
                .slice(0, 16)
                .replace("T", " "),
            }
          : d,
      ),
    );
  };

  /**
   * @param {string} id : The ID of the dataset to clear.
   * @return {void} : Updates the status of the dataset with the given ID to "Not Seeded" and clears the last seeded timestamp.
   */
  const handleClear = (id) => {
    setDatasets((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, status: "Not Seeded", lastSeeded: null } : d,
      ),
    );
  };

  /**
   * @return {void} : Resets all datasets to their initial state.
   */
  const handleResetAll = () => {
    setDatasets(initialDatasets);
  };

  return (
    <div className="data-seeder-page">
      <div className="breadcrumb">Admin &gt; Data</div>
      <h1 className="page-title">Demo Data Seeder</h1>
      <p className="page-subtitle">
        Load fixture datasets for demos and testing
      </p>

      <div className="warning-banner">
        <div className="warning-content">
          <span className="warning-icon">!</span>
          <span>
            Dev / Staging only — not available in Production. All actions are
            simulated (NFR-05).
          </span>
        </div>
        <button className="reset-all-button" onClick={handleResetAll}>
          Reset All Demo Data
        </button>
      </div>

      <div className="table-header">
        <div className="col dataset">Dataset</div>
        <div className="col records">Records</div>
        <div className="col lastSeeded">Last Seeded</div>
        <div className="col seeder-status">Status</div>
        <div className="col action"></div>
        <div className="col action"></div>
      </div>

      <div className="dataset-table">
        {datasets.map((d) => (
          <div className="dataset-row" key={d.id}>
            <div className="col dataset">{d.name}</div>
            <div className="col records">{d.records}</div>
            <div className="col lastSeeded">{d.lastSeeded || "—"}</div>
            <div className="col seeder-status">
              <span
                className={`badge ${d.status === "Seeded" ? "green" : "gray"}`}
              >
                {d.status}
              </span>
            </div>
            <div className="col action">
              <button
                className="action-button"
                onClick={() => handleLoad(d.id)}
              >
                Load
              </button>
            </div>
            <div className="col action">
              <button
                className="action-button"
                onClick={() => handleClear(d.id)}
              >
                Clear
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="footnote">
        Medications dataset is fixture-only reference data used by resident
        profile records — it does not imply a separate M3 eMAR screen, which
        remains out of scope for this MVP ("coming soon").
      </p>
    </div>
  );
};

export default DataSeeder;

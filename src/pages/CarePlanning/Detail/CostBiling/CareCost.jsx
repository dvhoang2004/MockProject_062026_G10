// CareCost.jsx

import "./CareCost.css";
import { careCostData } from "../../Dailytask/data";

import { TbChartLine } from "react-icons/tb";
import { RiShieldCheckLine } from "react-icons/ri";

function CareCost() {
  const { patient, badges, breakdown, medicare } = careCostData;

  return (
    <div className="care-cost-page">
      {/* Header */}
      <div className="page-header">
        <div className="breadcrumb">
          Care Planning &gt; Detail &gt; #CP-1042 &gt; Cost / Billing
        </div>

        <div className="header-top">
          <h1>Estimated Care Cost</h1>

          <div className="top-badges">
            <span className="role-badge">Role: DON</span>
            <span className="readonly-badge">O Read-only</span>
          </div>
        </div>
      </div>

      {/* Patient */}
      <div className="patient-card">
        <div>
          <h2>{patient.name}</h2>

          <p>
            {patient.room} (Semi-private) &nbsp;•&nbsp; Care Plan #
            {patient.planId}
          </p>
        </div>

        <div className="patient-badges">
          <span className="loc-badge">{badges.loc}</span>

          <span className="active-badge">
            {badges.status}
          </span>
        </div>
      </div>

      {/* Summary */}
      <div className="summary-grid">
        {/* Estimated Day */}
        <div className="summary-card">
          <div className="icon blue">
            <TbChartLine />
          </div>

          <div className="summary-content">
            <p>Estimated / day</p>

            <h2>$470.00</h2>
          </div>
        </div>

        {/* Estimated Month */}
        <div className="summary-card">
          <div className="icon green">
            <TbChartLine />
          </div>

          <div className="summary-content">
            <p>Estimated / month</p>

            <h2>$14,100.00</h2>
          </div>
        </div>

        {/* Medicare */}
        <div className="summary-card">
          <div className="icon orange">
            <RiShieldCheckLine />
          </div>

          <div className="summary-content">
            <div className="summary-header">
              <p>Medicare Part A</p>

              <span>alert @90</span>
            </div>

            <h2>
              Day {medicare.day} / {medicare.maxDay}
            </h2>
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <h3 className="section-title">Cost breakdown</h3>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>COST ITEM</th>
              <th>SOURCE</th>
              <th>RATE / DAY</th>
            </tr>
          </thead>

          <tbody>
            {breakdown.map(function (item) {
              return (
                <tr key={item.id}>
                  <td className="cost-name">
                    {item.name}
                  </td>

                  <td>
                    <span className={`source ${item.type}`}>
                      {item.code}
                    </span>

                    <span className="source-text">
                      {item.source}
                    </span>
                  </td>

                  <td className="price">
                    {item.rate}
                  </td>
                </tr>
              );
            })}

            <tr className="subtotal">
              <td>Subtotal per day</td>

              <td></td>

              <td className="subtotal-price">
                {patient.subtotal}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Medicare Banner */}
      <div className="medicare-banner">
        <strong>Medicare Part A (SNF):</strong> Day {medicare.day} of{" "}
        {medicare.maxDay} covered &nbsp; • &nbsp; alert at Day{" "}
        {medicare.alertDay} &nbsp; • &nbsp; coverage locks at Day{" "}
        {medicare.maxDay}
      </div>

      <div className="page-footer">
        M2-US-09 — Care Plan Cost / Billing Panel
      </div>
    </div>
  );
}

export default CareCost;
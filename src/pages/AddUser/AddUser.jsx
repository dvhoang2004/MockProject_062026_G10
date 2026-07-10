import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AddUser.css";

const ROLES = [
  "CNA",
  "Nurse",
  "DON",
  "NHA",
  "Admission",
  "Billing",
  "System Admin",
];

const AddUser = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [facility, setFacility] = useState("None");

  const handleCancel = () => {
    console.log("Cancel");
    navigate("/user-list");
  };

  const handleCreate = () => {
    console.log({ fullName, email, phone, role, facility });
  };

  return (
    <div className="add-user-page">
      <div className="breadcrumb">Admin &gt; Users &gt; Add User</div>
      <h1 className="page-title">Add User</h1>
      <p className="page-subtitle">
        New accounts start as Invited — user completes activation via emailed
        link
      </p>

      <div className="add-user-content">
        <div className="form-card">
          <h2 className="section-title">Account Details</h2>

          <div className="form-row">
            <div className="form-group">
              <label>
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Priya Shah"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                placeholder="name@nhms.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone (E.164)</label>
              <input
                type="text"
                placeholder="+1 415-555-0100"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p className="hint">
                Optional now — required when user activates account
              </p>
            </div>
            <div className="form-group">
              <label>
                Role <span className="required">*</span>
              </label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select role...</option>
                {ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="available-roles">
            Available roles: {ROLES.join(" · ")}
          </p>

          <div className="divider" />

          <div className="form-row">
            <div className="form-group">
              <label>Status</label>
              <input type="text" value="Invited" disabled />
              <p className="hint">
                System-set on creation — becomes Active after user completes
                activation
              </p>
            </div>
            <div className="form-group">
              <label>Assigned Facility (optional)</label>
              <select
                value={facility}
                onChange={(e) => setFacility(e.target.value)}
              >
                <option value="None">None</option>
              </select>
            </div>
          </div>

          <div className="divider" />

          <p className="footnote">
            Identity field contract: Email must be unique and RFC-5322 valid;
            Phone must be E.164 and unique once set. Same fields, same
            validation across all steps.
          </p>
        </div>

        <div className="side-card">
          <h2 className="section-title">What happens next</h2>
          <ol className="steps-list">
            <li>User receives an invite link by email</li>
            <li>Sets password + confirms phone</li>
            <li>2FA status becomes Enabled</li>
            <li>Status changes Invited → Active</li>
          </ol>
          <div className="info-box">
            Login accepts whichever identifier was registered — Email OR Phone.
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="create-button" onClick={handleCreate}>
          Create User
        </button>
      </div>
    </div>
  );
};

export default AddUser;

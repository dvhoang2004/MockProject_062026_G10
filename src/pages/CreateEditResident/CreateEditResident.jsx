import React, { useState, useEffect } from "react";
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdWarningAmber,
  MdCheckCircle,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import "./CreateEditResident.css";
import NurseSidebar from "../../components/Sidebar/NurseSidebar";

const CreateEditResident = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [poaOnFile, setPoaOnFile] = useState(false);
  const [dnrActive, setDnrActive] = useState(false);

  // 1. STATE CHO CÁC Ô NHẬP LIỆU
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ssn, setSsn] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [isDuplicateName, setIsDuplicateName] = useState(false); // State Duplicate alert management

  // ==========================================
  // [AREA API 1]: POPULATE DATA ON EDIT
  // ==========================================
  useEffect(() => {
    if (isEdit) {
      /* REMOVE THE COMMENT FOR THIS SECTION ONCE THE API IS AVAILABLE
      fetch(`https://api.du-an.com/residents/${id}`)
        .then(response => response.json())
        .then(data => {
          setFirstName(data.firstName);
          setLastName(data.lastName);
          setSsn(data.ssn);
          setEmergencyContact(data.emergencyContact);
        })
        .catch(err => console.error("Lỗi lấy dữ liệu:", err));
      */

      // --- MOCK DATA (DELETE WHEN HAVE API) ---
      setFirstName("Elena");
      setLastName("Ramos");
      setSsn("123-45-6789");
      setEmergencyContact("Diane Ramos (Daughter)");
      // -------------------------------------------------
    }
  }, [id, isEdit]);

  // ==========================================
  // [API AREA 2]: NAME DUPLICATE CHECK
  // ==========================================
  useEffect(() => {
    // Only perform the check when the user has entered both First and Last Name.
    if (firstName.trim() !== "" && lastName.trim() !== "") {
      /*  REMOVE THE COMMENT FOR THIS SECTION ONCE THE API IS AVAILABLE
      fetch(`https://api.du-an.com/check-duplicate?first=${firstName}&last=${lastName}`)
        .then(response => response.json())
        .then(data => {
          // Giả sử API trả về { isDuplicate: true/false }
          setIsDuplicateName(data.isDuplicate); 
        })
        .catch(err => console.error("Lỗi check trùng lặp:", err));
      */

      // --- MOCK LOGIC (DELETE WHEN HAVE API) ---
      if (
        firstName.trim().toLowerCase() === "elena" &&
        lastName.trim().toLowerCase() === "ramos"
      ) {
        setIsDuplicateName(true);
      } else {
        setIsDuplicateName(false);
      }
      // -------------------------------------------------
    } else {
      setIsDuplicateName(false);
    }
  }, [firstName, lastName]);

  // 3. LOGIC AUTOMATED ASSESSMENT (GREEN TICK)
  const isRequiredComplete = firstName.trim() !== "" && lastName.trim() !== "";
  const isSsnValid = ssn.trim().length === 11;
  const isEmergencyContactAdded = emergencyContact.trim() !== "";

  return (
    <div className="cer-layout">
      {/* SIDEBAR  */}
      <NurseSidebar />

      {/* MAIN COTENT */}
      <main className="cer-main">
        {/* HEADER TOP (Chuẩn hóa) */}
        <header className="cer-header-top">
          <div className="header-left"></div>
          <div className="header-right">
            <MdNotificationsNone className="icon-action" size={26} />
            <MdHelpOutline className="icon-action" size={26} />
            <div className="user-profile">
              <MdAccountCircle size={34} color="#94a3b8" />
              <div className="user-info">
                <span className="user-name">Priya Shah</span>
                <span className="user-role">Admission Staff</span>
              </div>
              <MdArrowDropDown size={20} color="#475569" />
            </div>
          </div>
        </header>

        {/* WORKSPACE */}
        <div className="cer-workspace">
          <div className="cer-container">
            {/* PAGE HEADER */}
            <div className="cer-page-header">
              <span className="cer-breadcrumb">
                Residents &gt; {isEdit ? "Edit Resident" : "Create Resident"}
              </span>
              <div className="cer-title-row">
                <h2>{isEdit ? "Edit Resident" : "Create Resident"}</h2>
                {isEdit && <span className="cer-badge-pending">Pending</span>}
              </div>
              {isEdit && (
                <span className="cer-subtitle">Elena Ramos • Room 106-A</span>
              )}
            </div>

            {/* FORM GRID (Left: Form, Right: Widget) */}
            <div className="cer-grid-layout">
              {/* LEFT COLUMN: FORM */}
              <div className="cer-form-column">
                {/* Section 1: Personal Info */}
                <section className="cer-card">
                  {isEdit && (
                    <div className="cer-status-box">
                      <span className="cer-status-initials">ER</span>
                    </div>
                  )}
                  <h3>Personal Information</h3>
                  <div className="cer-input-grid-3">
                    <div className="cer-input-group">
                      <label>
                        First Name <span className="cer-required">*</span>
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Thử gõ 'Elena'..."
                      />
                    </div>
                    <div className="cer-input-group">
                      <label>
                        Last Name <span className="cer-required">*</span>
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Thử gõ 'Ramos'..."
                      />
                    </div>
                    <div className="cer-input-group">
                      <label>
                        Date of Birth <span className="cer-required">*</span>
                      </label>
                      <input type="text" />
                    </div>
                    <div className="cer-input-group">
                      <label>Gender</label>
                      <input type="text" />
                    </div>
                    <div className="cer-input-group">
                      <label>
                        SSN <span className="cer-required">*</span>
                      </label>
                      <input
                        type="text"
                        value={ssn}
                        onChange={(e) => setSsn(e.target.value)}
                        placeholder="XXX-XX-XXXX"
                      />
                    </div>
                    <div className="cer-input-group">
                      <label>Marital Status</label>
                      <input type="text" />
                    </div>
                    <div className="cer-input-group">
                      <label>
                        Status <span className="cer-required">*</span>
                      </label>
                      <input type="text" />
                    </div>
                    <div className="cer-input-group">
                      <label>
                        Referral Source <span className="cer-required">*</span>
                      </label>
                      <input type="text" />
                    </div>
                    <div className="cer-input-group">
                      <label>Referring Facility</label>
                      <input type="text" />
                    </div>
                  </div>
                </section>

                {/* Section 2: Contact & Address */}
                <section className="cer-card">
                  <h3>Contact & Address</h3>
                  <div className="cer-input-grid-2">
                    <div className="cer-input-group">
                      <label>
                        Phone <span className="cer-required">*</span>
                      </label>
                      <input type="text" />
                    </div>
                    <div className="cer-input-group">
                      <label>Address</label>
                      <input type="text" />
                    </div>
                    <div className="cer-input-group">
                      <label>
                        Emergency Contact{" "}
                        <span className="cer-required">*</span>
                      </label>
                      <input
                        type="text"
                        value={emergencyContact}
                        onChange={(e) => setEmergencyContact(e.target.value)}
                      />
                    </div>
                    <div className="cer-input-group">
                      <label>
                        Emergency Phone <span className="cer-required">*</span>
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                </section>

                {/* Section 3: POA */}
                <section className="cer-card">
                  <div className="cer-section-header">
                    <h3>Authorized Representative / POA</h3>
                    <div
                      className="cer-toggle-wrapper"
                      onClick={() => setPoaOnFile(!poaOnFile)}
                    >
                      <div
                        className={`cer-toggle-switch ${poaOnFile ? "active" : ""}`}
                      >
                        <div className="cer-toggle-knob"></div>
                      </div>
                      <span className="cer-toggle-label">POA on file</span>
                    </div>
                  </div>
                  <div className="cer-input-grid-2">
                    <div className="cer-input-group">
                      <label>POA Name</label>
                      <input type="text" disabled={!poaOnFile} />
                    </div>
                    <div className="cer-input-group">
                      <label>Relationship</label>
                      <input type="text" disabled={!poaOnFile} />
                    </div>
                  </div>
                </section>

                {/* Section 4: Insurance */}
                <section className="cer-card">
                  <h3>Insurance / Payer</h3>
                  <div className="cer-input-grid-2">
                    <div className="cer-input-group">
                      <label>
                        Payer Source <span className="cer-required">*</span>
                      </label>
                      <input type="text" />
                    </div>
                    <div className="cer-input-group">
                      <label>Payer Type</label>
                      <input type="text" />
                    </div>
                    <div className="cer-input-group">
                      <label>Medicare Number</label>
                      <input type="text" />
                    </div>
                    <div className="cer-input-group">
                      <label>Insurance Provider</label>
                      <input type="text" />
                    </div>
                    <div className="cer-input-group">
                      <label>Auth Start Date</label>
                      <input type="text" />
                    </div>
                    <div className="cer-input-group">
                      <label>Auth End Date</label>
                      <input type="text" />
                    </div>
                  </div>
                </section>

                {/* Section 5: DNR */}
                <section className="cer-card">
                  <h3>Do Not Resuscitate (DNR)</h3>
                  <div
                    className="cer-toggle-wrapper mt-8"
                    onClick={() => setDnrActive(!dnrActive)}
                  >
                    <div
                      className={`cer-toggle-switch ${dnrActive ? "active" : ""}`}
                    >
                      <div className="cer-toggle-knob"></div>
                    </div>
                    <span className="cer-toggle-label">
                      {dnrActive
                        ? "Yes — DNR is active"
                        : "No — DNR not active"}
                    </span>
                  </div>
                </section>
              </div>

              {/* RIGHT COLUMN: WIDGETS */}
              <div className="cer-widget-column">
                {/* Cảnh báo trùng tên */}
                {isDuplicateName && (
                  <div className="cer-alert-card animate-fade-in">
                    <MdWarningAmber className="cer-alert-icon" />
                    <div className="cer-alert-text">
                      <h4>Similar resident name exists.</h4>
                      <p>Please verify before saving.</p>
                    </div>
                  </div>
                )}

                {/* Validation Card */}
                <div className="cer-widget-card">
                  <h3>Validation</h3>
                  <ul className="cer-validation-list">
                    <li>
                      <MdCheckCircle
                        className="cer-check-icon"
                        style={{
                          color: isRequiredComplete ? "#2563eb" : "#cbd5e1",
                        }}
                      />
                      Required fields complete
                    </li>
                    <li>
                      <MdCheckCircle
                        className="cer-check-icon"
                        style={{ color: isSsnValid ? "#2563eb" : "#cbd5e1" }}
                      />
                      SSN format valid
                    </li>
                    <li>
                      <MdCheckCircle
                        className="cer-check-icon"
                        style={{
                          color: isEmergencyContactAdded
                            ? "#2563eb"
                            : "#cbd5e1",
                        }}
                      />
                      Emergency contact required
                    </li>
                  </ul>
                </div>

                {/* Role Card */}
                <div className="cer-widget-card">
                  <span className="cer-role-badge">Role</span>
                  <h4 className="cer-role-title">Admission Staff</h4>
                  <p className="cer-role-desc">
                    Can create/edit intake fields.
                    <br />
                    Clinical fields are read-only here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER FIXED ACTION */}
        <div className="cer-footer-actions">
          <div className="cer-footer-left">
            {isEdit && <button className="cer-btn-outline">Discharge</button>}
            {isEdit && (
              <button className="cer-btn-outline">Change Status</button>
            )}
          </div>
          <div className="cer-footer-right">
            <button className="cer-btn-outline">Cancel</button>
            <button className="cer-btn-primary">
              {isEdit ? "Save Changes" : "Create Resident"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateEditResident;

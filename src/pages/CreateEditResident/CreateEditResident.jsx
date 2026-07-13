import React, { useState, useEffect } from "react";
import {
  MdMenu,
  MdNotificationsNone,
  MdHelpOutline,
  MdAccountCircle,
  MdArrowDropDown,
  MdDashboard,
  MdPeopleOutline,
  MdAssignment,
  MdBloodtype,
  MdReportProblem,
  MdBarChart,
  MdLogout,
  MdWarningAmber,
  MdCheckCircle,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import "./CreateEditResident.css";

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
  const [isDuplicateName, setIsDuplicateName] = useState(false); // State quản lý cảnh báo trùng

  // ==========================================
  // [KHU VỰC API 1]: ĐỔ DỮ LIỆU KHI EDIT
  // ==========================================
  useEffect(() => {
    if (isEdit) {
      /* BỎ GHI CHÚ ĐOẠN NÀY KHI CÓ API
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

      // --- MOCK DATA (Xóa đoạn này khi đã ghép API) ---
      setFirstName("Elena");
      setLastName("Ramos");
      setSsn("123-45-6789");
      setEmergencyContact("Diane Ramos (Daughter)");
      // -------------------------------------------------
    }
  }, [id, isEdit]);

  // ==========================================
  // [KHU VỰC API 2]: KIỂM TRA TRÙNG LẶP TÊN
  // ==========================================
  useEffect(() => {
    // Chỉ kiểm tra khi người dùng đã nhập cả First và Last Name
    if (firstName.trim() !== "" && lastName.trim() !== "") {
      /* BỎ GHI CHÚ ĐOẠN NÀY KHI CÓ API
      fetch(`https://api.du-an.com/check-duplicate?first=${firstName}&last=${lastName}`)
        .then(response => response.json())
        .then(data => {
          // Giả sử API trả về { isDuplicate: true/false }
          setIsDuplicateName(data.isDuplicate); 
        })
        .catch(err => console.error("Lỗi check trùng lặp:", err));
      */

      // --- MOCK LOGIC (Xóa đoạn này khi đã ghép API) ---
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

  // 3. LOGIC TỰ ĐỘNG ĐÁNH GIÁ (TICK XANH)
  const isRequiredComplete = firstName.trim() !== "" && lastName.trim() !== "";
  const isSsnValid = ssn.trim().length === 11;
  const isEmergencyContactAdded = emergencyContact.trim() !== "";

  return (
    <div className="nhms-container">
      {/* HEADER TOP */}
      <header className="nhms-header">
        <div className="header-left">
          <button className="menu-btn">
            <MdMenu />
          </button>
          <div className="logo-area">
            <span className="logo-bold">NHMS</span>
            <span className="logo-sub">Nursing Home Management System</span>
          </div>
        </div>
        <div className="header-right">
          <span className="header-icon">
            <div className="notification-dot"></div>
            <MdNotificationsNone />
          </span>
          <span className="header-icon">
            <MdHelpOutline />
          </span>
          <div className="user-profile">
            <MdAccountCircle className="avatar" />
            <div className="user-info">
              <span className="user-name">Priya Shah</span>
              <span className="user-role">Admission Staff</span>
            </div>
            <span className="profile-arrow">
              <MdArrowDropDown />
            </span>
          </div>
        </div>
      </header>

      <div className="nhms-workspace">
        {/* SIDEBAR TRÁI */}
        <aside className="nhms-sidebar">
          <ul className="sidebar-menu">
            <Link to="/dashboard-nurse" className="menu-link">
              <li className="menu-item">
                <div className="menu-item-content">
                  <MdDashboard size={20} /> Dashboard
                </div>
              </li>
            </Link>
            <Link to="/residents-detail" className="menu-link">
              <li className="menu-item active">
                <div className="menu-item-content">
                  <MdPeopleOutline size={18} /> Residents
                </div>
              </li>
            </Link>
            <Link to="/care-planning" className="menu-link">
              <li className="menu-item">
                <div className="menu-item-content">
                  <MdAssignment size={18} /> Care Planning
                </div>
              </li>
            </Link>
            <Link to="/emar" className="menu-link">
              <li className="menu-item disabled">
                <div className="menu-item-content">
                  <MdBloodtype size={18} /> eMAR
                </div>
                <span className="badge-soon">soon</span>
              </li>
            </Link>
            <Link to="/incident-risk" className="menu-link">
              <li className="menu-item">
                <div className="menu-item-content">
                  <MdReportProblem size={18} /> Incident & Risk
                </div>
              </li>
            </Link>
            <Link to="/reports" className="menu-link">
              <li className="menu-item">
                <div className="menu-item-content">
                  <MdBarChart size={18} /> Reports
                </div>
              </li>
            </Link>
          </ul>
          <div className="sidebar-footer">
            <span className="menu-item">
              <div className="menu-item-content">
                <MdLogout size={18} /> Logout
              </div>
            </span>
          </div>
        </aside>

        {/* NỘI DUNG CHÍNH BÊN PHẢI */}
        <main className="edit-resident-main">
          <div className="edit-scroll-area">
            <div className="page-header">
              <span className="breadcrumb">
                Residents &gt; {isEdit ? "Edit Resident" : "Create Resident"}
              </span>
              <div className="title-row">
                <h2>{isEdit ? "Edit Resident" : "Create Resident"}</h2>
                {isEdit && <span className="badge-pending">Pending</span>}
              </div>
              {isEdit && (
                <span className="subtitle">Elona Ramos • Room 106-A</span>
              )}
            </div>

            <div className="edit-grid">
              {/* CỘT TRÁI: FORM */}
              <div className="form-column">
                <section className="form-card relative-card">
                  {isEdit && (
                    <div className="status-box">
                      <span className="status-initials">ER</span>
                    </div>
                  )}

                  <h3>Personal Information</h3>
                  <div className="input-grid-3-cols">
                    <div className="create-edit-input-group">
                      <label>
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Thử gõ 'Elena'..."
                      />
                    </div>
                    <div className="create-edit-input-group">
                      <label>
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Thử gõ 'Ramos'..."
                      />
                    </div>
                    <div className="create-edit-input-group">
                      <label>
                        Date of Birth <span className="required">*</span>
                      </label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>Gender</label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>
                        SSN <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={ssn}
                        onChange={(e) => setSsn(e.target.value)}
                        placeholder="XXX-XX-XXXX"
                      />
                    </div>
                    <div className="create-edit-input-group">
                      <label>Marital Status</label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>
                        Status <span className="required">*</span>
                      </label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>
                        Referral Source <span className="required">*</span>
                      </label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>Referring Facility</label>
                      <input type="text" />
                    </div>
                  </div>
                </section>

                <section className="form-card">
                  <h3>Contact & Address</h3>
                  <div className="input-grid">
                    <div className="create-edit-input-group">
                      <label>
                        Phone <span className="required">*</span>
                      </label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>Address</label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>
                        Emergency Contact <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={emergencyContact}
                        onChange={(e) => setEmergencyContact(e.target.value)}
                      />
                    </div>
                    <div className="create-edit-input-group">
                      <label>
                        Emergency Phone <span className="required">*</span>
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                </section>

                <section className="form-card">
                  <div className="section-header">
                    <h3>Authorized Representative / POA</h3>
                    <div className="toggle-wrapper">
                      <div
                        className={`toggle-switch ${poaOnFile ? "active" : ""}`}
                        onClick={() => setPoaOnFile(!poaOnFile)}
                      >
                        <div className="toggle-knob"></div>
                      </div>
                      <span className="toggle-label">POA on file</span>
                    </div>
                  </div>
                  <div className="input-grid">
                    <div className="create-edit-input-group">
                      <label>POA Name</label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>Relationship</label>
                      <input type="text" />
                    </div>
                  </div>
                </section>

                <section className="form-card">
                  <h3>Insurance / Payer</h3>
                  <div className="input-grid">
                    <div className="create-edit-input-group">
                      <label>
                        Payer Source <span className="required">*</span>
                      </label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>Payer Type</label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>Medicare Number</label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>Insurance Provider</label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>Auth Start Date</label>
                      <input type="text" />
                    </div>
                    <div className="create-edit-input-group">
                      <label>Auth End Date</label>
                      <input type="text" />
                    </div>
                  </div>
                </section>

                <section className="form-card">
                  <h3>Do Not Resuscitate (DNR)</h3>
                  <div className="toggle-wrapper mt-8">
                    <div
                      className={`toggle-switch ${dnrActive ? "active" : ""}`}
                      onClick={() => setDnrActive(!dnrActive)}
                    >
                      <div className="toggle-knob"></div>
                    </div>
                    <span className="toggle-label">No — DNR not active</span>
                  </div>
                </section>
              </div>

              {/* CỘT PHẢI: WIDGETS */}
              <div className="widget-column">
                {/* HIỂN THỊ CẢNH BÁO NẾU PHÁT HIỆN TRÙNG TÊN */}
                {isDuplicateName && (
                  <div className="alert-card warning animate-fade-in">
                    <MdWarningAmber className="alert-icon" />
                    <div className="alert-text">
                      <h4>Similar resident name exists.</h4>
                      <p>Please verify before saving.</p>
                    </div>
                  </div>
                )}

                <div className="widget-card">
                  <h3>Validation</h3>
                  <ul className="validation-list">
                    <li>
                      <MdCheckCircle
                        className="check-icon"
                        style={{
                          color: isRequiredComplete ? "#2563eb" : "#d1d5db",
                          transition: "color 0.3s",
                        }}
                      />
                      Required fields complete
                    </li>
                    <li>
                      <MdCheckCircle
                        className="check-icon"
                        style={{
                          color: isSsnValid ? "#2563eb" : "#d1d5db",
                          transition: "color 0.3s",
                        }}
                      />
                      SSN format valid
                    </li>
                    <li>
                      <MdCheckCircle
                        className="check-icon"
                        style={{
                          color: isEmergencyContactAdded
                            ? "#2563eb"
                            : "#d1d5db",
                          transition: "color 0.3s",
                        }}
                      />
                      Emergency contact required
                    </li>
                  </ul>
                </div>

                <div className="widget-card role-card">
                  <span className="role-badge">Role</span>
                  <h4>Admission Staff</h4>
                  <p>
                    Can create/edit intake fields.
                    <br />
                    Clinical fields are read-only here.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions-footer">
            <div className="footer-left">
              {isEdit && <button className="btn-outline">Discharge</button>}
              {isEdit && <button className="btn-outline">Change Status</button>}
            </div>
            <div className="footer-right">
              <button className="btn-outline">Cancel</button>
              <button className="btn-primary">
                {isEdit ? "Save Changes" : "Create Resident"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateEditResident;

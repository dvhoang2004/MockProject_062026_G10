import React from "react";
import { useNavigate } from "react-router-dom";

import "./AccountActivation.css";

const AccountActivation = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    //true -> navigate to 2 step verification page, false -> show error message
    navigate("/verification");
  };

  return (
    <section className="account-activation-container">
      <form className="account-activation-form" onSubmit={handleSubmit}>
        {/* Header */}
        <div className="account-activation-header">
          <p className="logo-box">N</p>
          <h2>Activate your account</h2>
        </div>

        <div className="alert-badge">
          Invited by Administrator &bull; link valid 72h
        </div>

        {/* Account Activation Inputs */}
        <div className="form-inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="j.rivera@facility.org"
              readOnly
            />
          </div>

          <div>
            <label htmlFor="password">
              Set password <span className="required">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="At least 8 chars, mixed case + number"
              required
            />
          </div>

          <div>
            <label htmlFor="confirm-password">
              Confirm password <span className="required">*</span>
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Re-enter password"
              required
            />
          </div>

          <div>
            <label htmlFor="phone">
              Phone number <span className="required">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 555 000 1234"
              required
            />
          </div>

          <div className="checkbox-container">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">
              I accept the Terms of Use & Privacy Policy
            </label>
          </div>

          <button type="submit" className="form-submit">
            Activate account
          </button>
        </div>
      </form>
    </section>
  );
};

export default AccountActivation;

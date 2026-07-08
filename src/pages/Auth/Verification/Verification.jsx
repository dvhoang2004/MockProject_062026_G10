import React from "react";
import { Link } from "react-router-dom";

import "./Verification.css";

const Verification = () => {
  return (
    <section className="verification-container">
      <form className="verification-form">
        {/* Header */}
        <div className="verification-header">
          <p className="logo-box">N</p>
          <h2>Two-step verification</h2>
          <p className="verification-subtext">
            Enter the 6-digit code sent to your phone <br />
            <strong>ending in &bull;&bull; 34</strong>
          </p>
        </div>

        {/* OTP */}
        <div className="otp-inputs">
          <input
            type="text"
            maxLength="1"
            defaultValue="4"
            className="active"
          />
          <input type="text" maxLength="1" defaultValue="1" />
          <input type="text" maxLength="1" defaultValue="7" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </div>

        {/* Resend Code */}
        <div className="resend-container">
          <p>Didn't get a code?</p>
          <button type="button" className="resend-link">
            Resend code (00:29)
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="form-submit">
          Verify
        </button>

        {/* Switch Account */}
        <div className="verification-footer">
          <Link to="/login" className="switch-account-link">
            Use a different account
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Verification;

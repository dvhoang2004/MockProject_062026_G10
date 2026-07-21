import React from "react";
import { Link } from "react-router-dom";

import "./Verification.css";

const Verification = () => {
  return (
    <section className="otpVerify-page">
      <form className="otpVerify-form">
        {/* Header */}
        <div className="otpVerify-header">
          <p className="otpVerify-logo">N</p>
          <h2 className="otpVerify-title">Two-step verification</h2>
          <p className="otpVerify-subtext">
            Enter the 6-digit code sent to your phone <br />
            <strong>ending in &bull;&bull; 34</strong>
          </p>
        </div>

        {/* OTP */}
        <div className="otpVerify-inputs">
          <input
            type="text"
            maxLength="1"
            className="otpVerify-input otpVerify-input--active"
          />
          <input type="text" maxLength="1" className="otpVerify-input" />
          <input type="text" maxLength="1" className="otpVerify-input" />
          <input type="text" maxLength="1" className="otpVerify-input" />
          <input type="text" maxLength="1" className="otpVerify-input" />
          <input type="text" maxLength="1" className="otpVerify-input" />
        </div>

        {/* Resend Code */}
        <div className="otpVerify-resend">
          <p className="otpVerify-resendText">Didn't get a code?</p>
          <button type="button" className="otpVerify-resendBtn">
            Resend code (00:29)
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="otpVerify-submitBtn">
          Verify
        </button>

        {/* Switch Account */}
        <div className="otpVerify-footer">
          <Link to="/login" className="otpVerify-switchLink">
            Use a different account
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Verification;

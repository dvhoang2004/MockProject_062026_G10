import React from "react";

import "./Login.css";

const Login = () => {
  return (
    <section className="login-container">
      <form className="login-form">
        {/* Header */}
        <div className="login-header">
          <p>N</p>
          <h2>Sign in to NHMS</h2>
          <p>Nursing Home Management System</p>
        </div>
        {/* Form Inputs: User Credentials */}
        <div className="login-form-inputs">
          <div>
            <label htmlFor="email-phone">Email or Phone</label>
            <input
              type="text"
              id="email-phone"
              name="username"
              placeholder="name@facility.org or +1 555 000 1234"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-form-submit">
            Sign In
          </button>
          <footer className="login-footer">
            <p>Accounts are provisioned by your administrator.</p>
            <p>Need access? Contact your NHMS admin.</p>
          </footer>
        </div>
      </form>
    </section>
  );
};

export default Login;

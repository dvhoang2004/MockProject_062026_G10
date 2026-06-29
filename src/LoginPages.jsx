import React from "react";
import { useForm } from "react-hook-form";
import "./login.css";

// Import trực tiếp tài nguyên từ thư mục assets
import logoImg from "./assets/logo.png";
import bgImg from "./assets/login-bg.jpg";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginSubmit = (data) => {
    // Comment in English to follow the team's coding convention [cite: 137]
    // TODO: Connect Axios client with Backend Auth Service endpoint [cite: 118, 175]
    console.log("Submitted Form Data:", data);
  };

  const handleBackToHome = () => {
    // Handle navigation back to Landing Page/Home screen
    console.log("Navigating back to home...");
  };

  return (
    <div className="login-container">
      {/* NỬA BÊN TRÁI: FORM ĐĂNG NHẬP */}
      <div className="login-left-side">
        {/* Nút mũi tên quay lại ở đầu góc trái của form */}
        <button
          type="button"
          className="btn-back-home"
          onClick={handleBackToHome}
          aria-label="Back to home"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back</span>
        </button>

        <div className="login-form-wrapper">
          <div className="login-header">
            {/* Ảnh LOGO kế thừa từ assets */}
            <div className="login-logo-container">
              <img
                src={logoImg}
                alt="Nursing Home Logo"
                className="login-logo-img"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="login-brand">NURSING HOME PORTAL</div>
            <div className="login-subtitle">
              Care Management System for US Facilities
            </div>
          </div>

          <form onSubmit={handleSubmit(handleLoginSubmit)}>
            <div className="form-group">
              <label>Username or Email</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
              </div>
              {errors.username && (
                <span className="error-message">{errors.username.message}</span>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
              {errors.password && (
                <span className="error-message">{errors.password.message}</span>
              )}
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" {...register("rememberMe")} />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-submit">
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* NỬA BÊN PHẢI: HÌNH ẢNH MINH HỌA LỚN FULL SCREEN */}
      <div className="login-right-side">
        <img
          src={bgImg}
          alt="Nursing Home Facility"
          className="login-side-image"
        />
      </div>
    </div>
  );
}

export default LoginPage;

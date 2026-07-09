import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate, useLocation } from "react-router-dom";

import "./LoginPage.css";
import FacebookLogin from "../../assets/facebook-login.jpg";
import GoogleLogin from "../../assets/google-login.jpg";

const schema = z.object({
  email: z.string().email({ message: "Invalid email!" }).min(3),
  password: z
    .string()
    .min(6, { message: "Password must have at least 6 characters!" }),
});

const LoginPage = () => {
  const [formError, setFormError] = useState("");
  const user = [
    {
      id: 0,
      isAdmin: true,
      email: "h1@gmail.com",
      password: "123456",
    },
    {
      id: 1,
      isAdmin: false,
      email: "user@gmail.com",
      password: "654321",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const location = useLocation();

  /**
   * Handle login form submission.
   * @param {{ email: string, password: string }} formData - Login form data.
   * @returns {Promise<void>}
   */
  const onSubmit = (formData) => {
    const foundUser = user.find(
      (u) => u.email === formData.email && u.password === formData.password,
    );

    if (!foundUser) {
      setFormError("User not found!");
      return;
    }

    if (foundUser.isAdmin) {
      console.log("Admin login");
    } else {
      console.log("User login");
    }
  };

  return (
    <section className="align-center form-page">
      <form className="authentication-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <div className="form-inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-text"
              placeholder="example@gmail.com"
              {...register("email")}
            />
            {isSubmitted && errors.email && (
              <em className="form-error">{errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-text"
              placeholder="Your Password"
              {...register("password")}
            />
            {isSubmitted && errors.password && (
              <em className="form-error">{errors.password.message}</em>
            )}
          </div>

          {formError && <em className="form-error">{formError}</em>}

          <button type="submit" className="form-submit">
            Submit
          </button>
        </div>
        <div className="form-footer">
          <p>
            <a href="/">Forgot your password?</a>
          </p>
          <p>
            Don't have an account? <a href="/">Sign up</a>
          </p>
          <p>Other options</p>
          <div className="form-other-options">
            <div className="form-facebook-login">
              <img src={FacebookLogin} alt="Facebook Login" />
              <p>Facebook</p>
            </div>
            <div className="form-google-login">
              <img src={GoogleLogin} alt="Google Login" />
              <p>Google</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;

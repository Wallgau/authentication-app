import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="login-page">
      <h1>Log In</h1>
      <label htmlFor="email-login">Email:</label>
      <input
        name="email-login"
        id="email-login"
        placeholder="anyone@gmail.com"
      />
      <label htmlFor="password-signup">Password:</label>
      <input
        name="password-signup"
        id="password-signup"
        placeholder="Password"
      />
      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        name="confirm-password"
        id="confirm-password"
        placeholder="Confirm Password"
      />
      <hr />
      <button type="submit">Sign Up</button>
    </div>
  );
};

export default SignUpPage;

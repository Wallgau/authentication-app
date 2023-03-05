import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogInPage = () => {
  return (
    <div className="login-page">
      <h1>Log In</h1>
      <label htmlFor="email-login">Email:</label>
      <input
        name="email-login"
        id="email-login"
        placeholder="anyone@gmail.com"
      />
      <label htmlFor="password-login">Password:</label>
      <input name="password-login" id="password-login" placeholder="Password" />
      <hr />
      <button type="submit">Log In</button>
      <Link to="/forgotpassword">Forgot Password</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default LogInPage;

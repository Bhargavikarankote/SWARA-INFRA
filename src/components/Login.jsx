import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Import the CSS file

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the page the user tried to access before being redirected
  const redirectTo = location.state?.from || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(); // Mark the user as logged in
    navigate(redirectTo); // Redirect to the intended page
  };

  return (
    <div className="unique-login-container">
      <h1 className="unique-login-heading">Login</h1>
      <form className="unique-login-form" onSubmit={handleSubmit}>
        <label className="unique-login-label">Username:</label>
        <input
          className="unique-login-input"
          type="text"
          required
          placeholder="Enter your username"
        />
        <label className="unique-login-label">Password:</label>
        <input
          className="unique-login-input"
          type="password"
          required
          placeholder="Enter your password"
        />
        <button className="unique-login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

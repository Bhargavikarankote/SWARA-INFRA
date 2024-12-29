import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import '../styles/Auth.css'; // Shared CSS for authentication

const Auth = ({ handleLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['user']);
  const navigate = useNavigate();

  // Check if user is already registered (stored in cookies)
  useEffect(() => {
    if (cookies.user) {
      try {
        const storedUser = JSON.parse(cookies.user);
        setName(storedUser.name || '');
        setEmail(storedUser.email || '');
      } catch (error) {
        console.error("Error parsing cookies data:", error);
      }
    }
  }, [cookies]);

  // Handle login (and registration, as we are using the same form for both)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data in cookies for next visit
    const userData = { name, email, password };

    try {
      setCookie('user', JSON.stringify(userData), { path: '/' });
    } catch (error) {
      console.error("Error setting cookies:", error);
    }

    handleLogin();
    navigate('/');  // Redirect to home or any other page after login
  };

  return (
    <div className="unique-auth-container">
      <h1 className="unique-auth-heading">Login / Register</h1>
      <form className="unique-auth-form" onSubmit={handleSubmit}>
        <label className="unique-auth-label">Name:</label>
        <input
          className="unique-auth-input"
          type="text"
          required
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="unique-auth-label">Email:</label>
        <input
          className="unique-auth-input"
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="unique-auth-label">Phone No:</label>
        <input
          className="unique-auth-input"
          type="no"
          required
          placeholder="Enter your phone no"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="unique-auth-button" type="submit">
          Login / Register
        </button>
      </form>
    </div>
  );
};

export default Auth;

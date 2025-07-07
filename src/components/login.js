// login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password');
      return;
    }
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    navigate('/dashboard');
  };

  const handleForgotPassword = () => {
    alert("Oops! Password recovery isn't implemented — this is a demo 😅");
  };

  return (
    <div className="login-container">
      <h2>Login to Task Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <div className="forgot-password">
        <button onClick={handleForgotPassword}>Forgot Password?</button>
      </div>
    </div>
  );
}

export default Login;

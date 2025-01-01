import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); 

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
  
    console.log('Sending login data:', data); // Add this log
  
    setErrorMessage(''); // Clear previous errors
  
    try {
      alert("Login Successfully !")
      navigate('/header');
      const response = await axios.post('http://localhost:5000/bio/Login', data);
      console.log('Login response:', response); // Add this log
      localStorage.setItem('authToken', response.data.token);
      
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };
  

  return (
    <div className="mt1">
      <div className="login-container">
        <div className="login-form">
          <h2>Login to Your Gym Account</h2>
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <FaUserAlt className="icon" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <div className="footer">
            <p>Don't have an account? <a href='/signup'>Signup</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

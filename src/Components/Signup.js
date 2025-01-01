import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import './Signup.css';
// import { Link } from 'react-scroll';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if passwords match
    if (password !== confirmpassword) {
      setErrorMessage("Passwords don't match.");
      return;
    } 
    alert("Signup Successfully !")
    navigate('/login');
    const data = { email, password,confirmpassword };

   
    setErrorMessage(''); // Clear previous error message

    try {
      // Debugging: log the data being sent
      console.log('Sending data:', data);

      const response = await axios.post('http://localhost:5000/yoyo/Signup', data);
      console.log('Signup successful:', response.data);
     

      // If the signup is successful, show a success message or redirect to login
      alert('Signup successful!');
      // Optionally, redirect to login page here
      // window.location.href = '/login'; // Example redirect

    } catch (error) {
      console.error('Signup failed:', error);
      
      // Handle error responses from the backend
      setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    } 
  };

  return (
    <div className="mt2">
      <div className="login-container">
        <div className="login-form">
          <h2>Create Your Gym Account</h2>
          <form onSubmit={onSubmit}>
            {/* Email Input */}
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

            {/* Password Input */}
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

            {/* Confirm Password Input */}
            <div className="input-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="login-btn" >
              {'Signup'}
            </button>
          </form>

          {/* Error message display */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}

          {/* Footer with login redirect */}
          <div className="footer">
            <p>Already have an account? <a href='http://localhost:3000/login'> Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

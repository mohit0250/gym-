import React, { useState } from 'react';
import axios from "axios";
import Navbar from './Navbar';

const Contact = () => {
  // Define state to hold form data
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [massage, setmassage] = useState("");  

  const [errorMessage, setErrorMessage] = useState(''); 

  const onSubmit = async (e) => {
    e.preventDefault(); 

    // Create the data object to be sent to the backend
    const data = { name, email, massage };
    
    setErrorMessage(''); // Reset previous error message

    try {
      setname('');
      setemail('');
      setmassage('');
      alert("Form submitted successfully!");
      // Sending data to the backend using axios
      const response = await axios.post('http://localhost:5000/api/Contact', data);
      console.log("Form submitted:", response);

      // Display success message
     
      
      // Clear the form fields
    
    } catch (error) {
      console.error('There was an error submitting the form', error);
      setErrorMessage('There was an error submitting the form. Please try again.');
    }
    

  };

  return (<>
    <Navbar /> 
    <div id="contact">
      <h1>CONTACT US</h1>
      <form onSubmit={onSubmit}>
        {/* Name Input */}
        <input 
          type="text" 
          placeholder="Full Name" 
          value={name} 
          onChange={(e) => setname(e.target.value)} 
          required 
        />

        {/* Email Input */}
        <input 
          type="email" 
          placeholder="Enter Your E-Mail" 
          value={email} 
          onChange={(e) => setemail(e.target.value)} 
          required 
        />

        {/* Message Textarea */}
        <textarea
          placeholder="Write Here...."
          value={massage} 
          onChange={(e) => setmassage(e.target.value)} 
          required
        />

        {/* Submit Button */}
        <input 
          type="submit" 
          value={"Send"} 
          className="inputbtn" 
        />
      </form>

      {/* Display error message if there was a problem */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div></>
  );
};

export default Contact;

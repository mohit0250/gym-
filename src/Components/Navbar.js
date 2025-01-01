import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from '../images/logo.png'
const Navbar = () => {
  const[nav,setnav]=useState(false)
  const changeBackground=()=>{
    if(window.scrollY>=50){
      setnav(true)
    }
    else{
      setnav(false)
    }
  }
  window.addEventListener('scroll',changeBackground);
  return (
    <nav className={nav?"nav active":"nav"}>
      <Link to='#' className='logo'>
      <img src={logo} alt=''/></Link>
      <ul>
        <li><Link to="/header">Home</Link></li>
        <li><Link to="/feature">Feature</Link></li>
        <li><Link to="/offer">Offer</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;

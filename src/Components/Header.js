import React from 'react'
import Navbar from './Navbar';
import '../style.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (<>    <Navbar /> 
    <div id='main'>
<div className='header-heading'>
  <h2>STEP UP YOUR</h2>
  <h1><span>FITNESS</span> WITH US</h1>
  <p className='details'>Build Your Body And Fitness With Professional Touch</p>
  <div className='header-btns'>
    <Link to='/offer'><button href='#' className='header-btn'>JOIN US</button></Link>
  </div>
</div>
    </div></>

  )
}
export default Header;
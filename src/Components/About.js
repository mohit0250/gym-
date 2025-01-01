import React from 'react'
import aboutimage from '../images/about.png'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const About = () => {
  return (<>
      <Navbar /> 
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Loren ipsum dolor sit, amet consectetur adipisicing elit. facere 
                repellat necessitatibus dolar ut nesciut hic ipsum laboriosam soluta?
                Fugit . soluta culpa possimus facere fugiat assumendla.
            </p>
            <Link to={"https://99designs.com/inspiration/websites/gym"}><button >READ MORE</button></Link>
        </div>
    </div></>

  )
}

export default About
import React from 'react'
import Featurebox from './Featurebox';
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import Navbar from './Navbar';

const Feature = () => {
  return (<>
    <Navbar /> 
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox image={fimage1} title='WeightLifting'/>
            <Featurebox image={fimage2} title='Specific Muscle'/>
            <Featurebox image={fimage3} title='Flex Your Muscle'/>
      
        </div>
    </div></>
  )
}
export default Feature;
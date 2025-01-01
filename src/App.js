import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {
  return (<>
    <BrowserRouter> 
     
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

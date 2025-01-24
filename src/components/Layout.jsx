import React from 'react';
import { Routes, Route, Link } from "react-router";  // Correct import
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Layout = () => {
  return (
      <>
         <div 
         style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          justifyContent: 'center',
          gap : 24,
          alignItems: 'center',
          fontSize: '30px',
          fontStyle: 'italic',
          cursor: 'pointer',
          background : 'black',
          padding: '10px'
        }}>
        <Link to={'/'} style={{ color: 'white',textDecoration: 'none' }}>
          <div>Home</div>
        </Link>
        <Link to={'/about'} style={{color: 'white', textDecoration: 'none' }}>
          <div>About</div>
        </Link>
        <Link to={'/contact'} style={{color: 'white', textDecoration: 'none' }}>
          <div>Contact</div>
        </Link>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </>
  );
}

export default Layout;

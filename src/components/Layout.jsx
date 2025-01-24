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
        }}>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <div>Home</div>
        </Link>
        <Link to={'/about'} style={{ textDecoration: 'none' }}>
          <div>About</div>
        </Link>
        <Link to={'/contact'} style={{ textDecoration: 'none' }}>
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

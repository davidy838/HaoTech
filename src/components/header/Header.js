import React from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to detect window width
  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth < 768); // Change the width breakpoint as needed
  };

  // Event listener for window resize
  useEffect(() => {
    handleWindowSizeChange(); // Check initial width
    window.addEventListener('resize', handleWindowSizeChange); // Listen for resize events
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange); // Clean up event listener on component unmount
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to='/'>
          <img className="main-logo" src={isMobile ? "/images/mobile.png" : "/images/log-1.png"} alt="logo" onClick={scrollToTop} />
        </Link>
        <div className="info-container">
          <div className="quote-container">
            <i className="header-icon fas fa-clipboard"></i>
            <h4>Need a quote?</h4>
            <h2>BOOK US NOW</h2>
          </div>
          <div className="phone-container">
            <i className="header-icon fas fa-phone-alt"></i>
            <h4>Call us now</h4>
            <a className="mob" href="tel:7804899768">(780)-489-9768</a>
          </div>
        </div>
      </div>
      <Navbar scrollToTop={scrollToTop} />
    </header>
  );
}

export default Header;

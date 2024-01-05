import React from 'react';
import './HeroSection.css';
import JobCards from '../job-cards/JobCards';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-container">
        <div className="image-container">
          <img className="cta-image" src="/images/cta-image1.jpg" alt="" />
          <div className="main-text-cont">
            <h2 className="main-title" style={{ color: 'white' }} >Accreditated Master Electrician</h2>
            <h3 className="strapline">Welcome to HaoTech Electrical LTD</h3>
          </div>
          {/* <img className="nic-logo" src="/images/nic-logo.jpg" alt="" /> */}
        </div>
        <div className="areas-list-container">
          <div className="intro">
            <h2 className="black-heading">HaoTech Electrical LTD</h2>
            <p className="areas-text">We're dedicated to meeting all your electrical needs with a professional approach. Don't hesitate to reach out about any electrical worries you might have. We're eager to connect with you and assist you with our expertise!</p>
          </div>
          <div className="areas">
            <h2 className="black-heading">Areas Covered:</h2>
            <ul className="areas-list">
              <li className="areas-list-item">Edmonton and Surrounding Areas</li>
              <li className="areas-list-item">Leduc</li>
              <li className="areas-list-item">Grande Prairie</li>
            </ul>
          </div>
          <p className="areas-text-2"></p>
          <div className="call-us-cont">
            <h1 className="call-us-now">Call us now:</h1>
            <a className="number" href="tel:7804899768">(780)-489-9768</a>
          </div>
        </div>
        < JobCards />
      </div>
    </section>
  );
}

export default HeroSection;

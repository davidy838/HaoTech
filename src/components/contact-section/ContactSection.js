import React from 'react';
import './ContactSection.css';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

function ContactSection({ isHomePage }) {
  return (
    <section className={isHomePage ? "contact-section" : "contact-section-standalone"}>
      <div className="contact-section-container">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-info-container">
          <div className="contact-text-cont">
            <p>Hi, I am Jason, director of HaoTech and a seasoned master electrician with a decade of experience. We offer exceptional services for both commercial and residential projects. With vast experience and an unwavering commitment to precision and quality, we cater to diverse electrical needs. From residential wiring to intricate commercial endeavors, rely on HaoTech Electrical for superior expertise and service excellence.</p>
          </div>
          <div className="contact-details-cont">
            <div className="contact-details">
              <p>Jason Ouyang</p>
              <div className="phone cont">
                <i className="fas fa-phone-alt"></i>
                <a href="tel:7804899768">(780)-489-9768</a>
              </div>
              <div className="email cont">
                <i className="far fa-envelope"></i>
                <a href="mailto:jason.yang@haotechelectrical.com">jason.yang@haotechelectrical.com</a>
              </div>
              {/* <div className="social-media-links-container">
                <Link
                  className='social-link'
                  to={'//www.facebook.com/ashleygambrillelectrical'}
                  target='_blank'
                  aria-label='Facebook'
                >
                  <FaFacebookSquare />
                </Link>
                <Link
                  className='social-link'
                  to={'//www.instagram.com/ashleygambrillelectrical'}
                  target='_blank'
                  aria-label='Instagram'
                >
                  <FaInstagram />
                </Link>
              </div> */}
            </div>
            <img className="contact-logo" src="/images/footer.png" alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

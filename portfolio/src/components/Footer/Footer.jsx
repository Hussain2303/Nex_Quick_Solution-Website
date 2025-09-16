import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1: About */}
        <div className="footer-section about">
          <h3>DoctorConsult</h3>
          <p>Your trusted platform for online medical consultations. Get professional health advice at your fingertips.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Consult a Doctor</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p><FaEnvelope className="icon" /> doctorconsult@gmail.com</p>
          <p><FaPhone className="icon" /> +92 300 1234567</p>
        </div>

        {/* Column 4: Social */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 DoctorConsult. All Rights Reserved. | Designed by <span>Muhammad Ommer</span></p>
      </div>
    </footer>
  );
}

export default Footer;

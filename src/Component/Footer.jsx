import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer-conatiner'>
      <div className="social-links">
        <a href="" className='social-link'>Twitter</a>
        <a href="" className='social-link'>LinkedIn</a>
        <a href="" className='social-link'>Telegram</a>
        <a href="" className='social-link'>Instagram</a>
      </div>
      <div className='footer-text'>
        <p>GDSC E-Commerce Website 2024</p>
      </div>
      <div className="follow-us">
        <p className="follow-text">Follow Us For more!</p>
      </div>
      <div className="additional-info">
        <p className="info-text">All rights reserved &copy; 2024</p>
      </div>
    </div>
  );
};

export default Footer;

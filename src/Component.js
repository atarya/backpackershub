import React from 'react';

// Header Component
const Header = () => (
<div >
  <div className="header">
    <h1>BENUS DARJEELING HOME</h1>
    <p className='byline'>A Backpackers Hub</p>
  </div>
  <hr /> {/* This line is added right after the header */}
  {/* Other content follows */}
</div>

);

// Body Component, updated with clickable phone numbers
const Body = () => (
  <div className="body">
    <div className="info">
      <div className="address">
        <p>Golai Bazar, Lebong</p>
        <p>Darjeeling, West Bengal</p>
        <p>734105</p>
      </div>
      <div className="contact">
        <p>Email:<a href="mailto:benus@stayindarjeeling.com">benus@stayindarjeeling.com</a></p>
      </div>
    </div>
    <hr />
    <div className="book-now">
    <div className="availability">
      <p className="blinking">Beds Available from Rs 299/- Only</p>
    </div>
    <p>
      <span>CALL NOW:</span>
      <span><a href="tel:+91-7063036791">+91-7063036791</a></span>
      <span><a href="tel:+91-8388009037">+91-8388009037</a></span>
    </p>
    </div>
  </div>
);

// Footer Component with clickable link
const Footer = () => (
  <div className="footer">
    <p className="footerText">
      <a href="https://www.anupamarya.com" target="_blank" rel="noopener noreferrer">anupamarya.com</a> | 2024
    </p>
  </div>
);

// Make sure to export and use the Footer component accordingly
export { Header, Body, Footer };


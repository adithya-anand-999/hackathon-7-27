import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">Event <span className="highlight">Finder</span></span>
      </div>
      <div className="navbar-buttons">
        <button className="search-button">Search Events</button>
        <button className="ai-button">Use AI</button>
      </div>
    </nav>
  );
}


export default Navbar
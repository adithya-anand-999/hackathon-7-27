import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">Event <span className="highlight">Finder</span></span>
      </div>
      <button className="search-button">Search Events</button>
    </nav>
  )
}

export default Navbar
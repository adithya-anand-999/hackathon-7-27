import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleAIButtonClick = () => {
    navigate('/ai');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">Event <span className="highlight">Finder</span></span>
      </div>
      <div className="navbar-buttons">
        <button className="search-button">Search Events</button>
        {/* <button className="ai-button" >Use AI</button> */}
        <button className="ai-button" onClick={handleAIButtonClick}>Use AI</button>
      </div>
    </nav>
  );
}


export default Navbar
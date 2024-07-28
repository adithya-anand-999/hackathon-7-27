import React from 'react';
import eventfinder from '../../assets/eventfinder.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero">
        <div className="header">
          <h1>Event <span className="highlight">Finder</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
        </div>
        <div className="image-section">
          <img src={eventfinder} alt="Event Finder" />
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search events..." />
        <button type="button"><span role="img" aria-label="search">🔍</span></button>
        <button type="button"><span role="img" aria-label="location">📍</span></button>
        <button type="button"><span role="img" aria-label="add">➕</span></button>
      </div>
      <div className="types-of-events">
        <h2>TYPES OF EVENTS</h2>
        <div className="event-types">
          <div className="event-type">MUSIC</div>
          <div className="event-type">FESTIVITIES</div>
          <div className="event-type">FUNDRAISER</div>
          <div className="event-type">CONCERT</div>
          <div className="event-type">NETWORKING</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
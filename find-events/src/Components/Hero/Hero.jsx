import React from 'react';
import eventfinder from '../../assets/eventfinder.png';
import './Hero.css';

const eventTypes = [
  { name: 'MUSIC', image: require('../../assets/music.jpg') },
  { name: 'FESTIVITIES', image: require('../../assets/festivities.jpg') },
  { name: 'FUNDRAISER', image: require('../../assets/fundraiser.jpg') },
  { name: 'CONCERT', image: require('../../assets/concert.jpg') },
  { name: 'NETWORKING', image: require('../../assets/social.jpg') }
];

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
        <input type="text" placeholder="Search..." />
        <div className="search-icons">
          <span className="search-icon">🔍</span>
          <span className="location-icon">📍</span>
          <span className="add-icon">➕</span>
        </div>
      </div>
      <div className="event-types">
      <h2>Types of Events</h2>
      <div className="event-types-container">
        {eventTypes.map((type, index) => (
          <div className="event-type" key={index}>
            <div className="image-placeholder">
              <img src={type.image} alt={type.name} className="event-image" />
            </div>
            <p>{type.name}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Hero;
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
          <p>At Event Finder, our goal is to help you discover the best local events tailored to your interests. Whether you're looking for a music concert, an art exhibition, a food festival, or a sports event, we've got you covered. Our intelligent system, powered by Gemini, analyzes nearby events and matches them with your interests. Gemini goes beyond just finding events - it ranks them based on your preferences, ensuring you get personalized and highly relevant suggestions.</p>
          <p>Join us and explore the vibrant world of local events tailored just for you.</p>
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
import React from 'react';
import './EventTypes.css';

const eventTypes = [
  { name: 'MUSIC', image: require('../../Assets/music.jpg') },
  { name: 'FESTIVITIES', image: require('../../Assets/festivities.jpg') },
  { name: 'FUNDRAISER', image: require('../../Assets/fundraiser.jpg') },
  { name: 'CONCERT', image: require('../../Assets/concert.jpg') },
  { name: 'NETWORKING', image: require('../../Assets/social.jpg') }
];

const EventTypes = () => {
  return (
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
  );
};

export default EventTypes;

import React from 'react';
import './EventTypes.css';

const eventTypes = [
  { name: 'MUSIC', image: '../../Assets/music.jpg' },
  { name: 'FESTIVITIES', image: '../../Assets/festivities.jpg' },
  { name: 'FUNDRAISER', image: '../../Assets/fundraiser.jpg' },
  { name: 'CONCERT', image: '../../Assets/concert.jpg' },
  { name: 'NETWORKING', image: '../../Assets/social.jpg' }
];

const EventTypes = () => {
  return (
    <div className="event-types">
      <h2>Types of Events</h2>
      <div className="event-types-container">
        {eventTypes.map((type, index) => (
          <div className="event-type" key={index}>
            <div className="image-placeholder">
              {/* Placeholder for image */}
            </div>
            <p>{type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTypes;

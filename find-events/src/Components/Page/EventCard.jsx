import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.name} className="event-image" />
      <div className="event-info">
        <h3>{event.name}</h3>
        <p>{event.location}</p>
        <p>{event.description}</p>
        <p>{event.date}</p>
      </div>
    </div>
  );
};

export default EventCard;
import React from 'react';
import eventsData from './eventsData';
import EventCard from './EventCard';
import './Page.css';

const Page = () => {
  return (
    <div className="page-container">
      <h2>Events near: </h2>
      <div className="events-grid">
        {eventsData.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Page;
// frontend/src/Components/Page/EventList.jsx
import React, { useEffect, useState } from 'react';
import EventCard from './EventCard'; // Correct import path
import './EventList.css';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/events/geopoint?lat=29.76&long=95.37'); // Replace with desired lat and long
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;

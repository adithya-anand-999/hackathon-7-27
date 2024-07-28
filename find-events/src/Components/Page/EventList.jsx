import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import eventsData from './eventsData'; // Fallback static data

const EventList = ({ location }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`/api/events?location=${location}`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents(eventsData); // Use fallback data if fetch fails
      }
    };

    fetchEvents();
  }, [location]);

  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;

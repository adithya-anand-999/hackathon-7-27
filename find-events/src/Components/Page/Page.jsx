import React from 'react';
import EventList from './EventList';
import './Page.css';

const Page = () => {
  return (
    <div className="page-container">
      <h2>Events</h2>
      <EventList location="San Francisco" />
    </div>
  );
};

export default Page;

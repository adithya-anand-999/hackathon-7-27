// src/Components/Page/EventFinderHeading.jsx
import React from 'react';
import './EventFinderHeading.css'; // Correct path for the CSS file
import headerImage from '../../Assets/eventfinder.png'; 
// Correct path for the image file

const EventFinderHeading = () => {
    return (
        <div className="event-finder-heading">
            <div className="event-header">
                <div className="header-text">
                    <h1>Event <span>Finder</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="header-image">
                    <img src={headerImage} alt="Event Finder Header" />
                </div>
            </div>
        </div>
    );
};

export default EventFinderHeading;

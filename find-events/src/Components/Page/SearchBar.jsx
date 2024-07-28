import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <div className="search-icons">
        <span className="search-icon">🔍</span>
        <span className="location-icon">📍</span>
        <span className="add-icon">➕</span>
      </div>
    </div>
  );
};

export default SearchBar;

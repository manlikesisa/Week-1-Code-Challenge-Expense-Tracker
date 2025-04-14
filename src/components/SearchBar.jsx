import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search expenses"
        onChange={(e) => onSearch(e.target.value)}
        style={{ margin: '1rem 0', padding: '0.5rem', width: '100%' }}
      />
    </div>
  );
};

export default SearchBar;

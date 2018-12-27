import React from 'react';

import Card from '../../Card';
import Search from '../../Search';

import './venue.css';

const Venue = props => {
  const {
    venues,
    handleDrop,
    searchWord,
    handleClick,
    onAddFavorite,
    handleInputChange
  } = props;

  return (
    <div className="venues">
      <p className="search-header">Search by city name:</p>
      <Search searchWord={searchWord} handleInputChange={handleInputChange} handleClick={handleClick} />

      <div className="card-wrapper">
        {venues && venues.map((item, i) => {
          return <Card key={i} venue={item.venue} handleDrop={handleDrop} addFavorite={onAddFavorite} />
        })}
      </div>
    </div>
  )
}

export default Venue;

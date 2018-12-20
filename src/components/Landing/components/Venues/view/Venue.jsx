import React from 'react';
import Spinner from '../../Spinner';
import Card from '../../Card';
import Search from '../../Search';

import './venue.css';

const Venue = props => {
  const { searchWord, venues, handleInputChange, handleClick, fetching } = props;

  return (
    <div>
      <Search searchWord={searchWord} handleInputChange={handleInputChange} handleClick={handleClick} />

      <h3>Venues:</h3>

      <div className="card-wrapper">
        <Spinner fetching={fetching} className="spinner" />
        {venues && venues.map((item, i) => {
          return <Card key={i} name={item.venue.name} />
        })}
      </div>
    </div>
  )
}

export default Venue;
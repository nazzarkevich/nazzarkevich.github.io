import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FavoriteView = props => {
  const {
    venue,
    hover,
    deleteFavorite,
    handleMouseOut,
    handleMouseOver
  } = props;

  return (
    <div className="favorite-item">
      <div className="delete-icon">
        {
          hover
            ? <FontAwesomeIcon
              size="4x"
              color='red'
              className="icon"
              icon='times-circle'
              onMouseLeave={handleMouseOut}
              onClick={deleteFavorite(venue)}
            />
            : <FontAwesomeIcon
              size="4x"
              color='gold'
              icon='bookmark'
              onMouseOver={handleMouseOver}
            />
        }
      </div>

      <h4>{venue.location.city}</h4>
      <h3>{venue.name}</h3>
    </div>
  );
};

export default FavoriteView;
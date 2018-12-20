import React from 'react';

import './card.css';

const Card = props => {
  const { name } = props;

  return (
    <div className="card">
      <p>{name}</p>
    </div>
  );
};

export default Card;
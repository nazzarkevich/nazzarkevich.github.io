import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './target.css';

const Target = props => {
  const { connectDropTarget, hovered } = props;
  const backgroundColor = hovered ? 'lightgreen' : 'white';

  return connectDropTarget(
    <div className="target">
      <Link to={'/favorites'} >
        <FontAwesomeIcon icon='bookmark' color={backgroundColor} size="5x" />
      </Link>
      <h5>Drag here</h5>
    </div>
  )

};

export default Target;
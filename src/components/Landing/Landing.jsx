import React from 'react';

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import Venues from './components/Venues';
import Target from './components/Target';
import Spinner from './components/Spinner';

import './components/Venues/view/venue.css';

const Landing = props => {
  const { fetching } = props;

  return (
    <div>
      <span className="spinner-wrapper">
        <Spinner fetching={fetching} className="spinner" />
      </span>

      <h2 className="search-venues"> * VENUES SEARCH *</h2>

      <div className="venues-wrapper">
        <Target />
        <Venues />
      </div>
    </div>
  )
}

export default DragDropContext(HTML5Backend)(Landing);
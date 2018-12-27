import { combineReducers } from 'redux';

import venueList from './venue.r';
import favoriteList from './favorites.r';

export default combineReducers({
  venueList,
  favoriteList
});
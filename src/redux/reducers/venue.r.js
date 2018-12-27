import {
  FETCH_VENUES,
  REMOVE_VENUE,
  FETCH_VENUES_SUCCESS,
  FETCH_VENUES_FAILURE
} from '../actions/venue.ct';

const initialState = {
  venues: [],
  fetching: false
}

const venueList = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_VENUE:
      const venues = state.venues.filter(item => item.venue.name !== action.payload.name);

      return {
        venues,
        fetching: false
      }

    case FETCH_VENUES:
      return {
        ...state,
        fetching: true
      }

    case FETCH_VENUES_SUCCESS:
      return {
        ...state,
        fetching: false,
        venues: action.payload.venues
      }

    case FETCH_VENUES_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload.error
      }

    default:
      return state;
  }
}

export default venueList;

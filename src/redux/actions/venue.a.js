import { FETCH_VENUES, FETCH_VENUES_SUCCESS, FETCH_VENUES_FAILURE } from './venue.ct';

export const fetchVenues = () => ({
  type: FETCH_VENUES
});

export const fetchVenuesSuccess = venues => ({
  type: FETCH_VENUES_SUCCESS,
  payload: { venues }
});

export const fetchVenuesFailure = error => ({
  type: FETCH_VENUES_FAILURE,
  payload: { error }
});

export const fetchAllVenues = city => dispatch => {
  dispatch(fetchVenues());

  const url = `https://api.foursquare.com/v2/venues/explore?near=${city}&section=food&client_id=${process.env.REACT_APP_FORSQ_CLIENT_ID}&client_secret=${process.env.REACT_APP_FORSQ_CLIENT_SECRET}&v=20181018`;
  fetch(url)
    .then(res => res.json())
    .then(data => dispatch(fetchVenuesSuccess(data.response.groups[0].items)));
}
import Venues from './Venues';
import { connect } from 'react-redux';
import { fetchAllVenues, removeVenue } from '../../../../redux/actions/venue.a';
import { addFavorite } from '../../../../redux/actions/favorites.a';

const mapStateToProps = state => {
  console.log('REDUX STATE', state);

  return {
    venues: state.venueList.venues,
    fetching: state.venueList.fetching
  }
};

const mapDispatchToProps = dispatch => ({
  onFetchVenues: city => dispatch(fetchAllVenues(city)),
  onRemoveVenue: name => dispatch(removeVenue(name)),
  onAddFavorite: item => dispatch(addFavorite(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Venues);
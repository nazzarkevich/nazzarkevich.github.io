import Venues from './Venues';
import { connect } from 'react-redux';
import { fetchAllVenues } from '../../../../redux/actions/venue.a';

const mapStateToProps = state => {
  console.log(state);

  return {
    venues: state.venue.venues,
    fetching: state.venue.fetching
  }
};

const mapDispatchToProps = dispatch => ({
  onFetchVenues: (city) => dispatch(fetchAllVenues(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(Venues);
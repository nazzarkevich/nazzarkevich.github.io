import Landing from './Landing';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    fetching: state.venueList.fetching
  }
};

export default connect(mapStateToProps)(Landing);

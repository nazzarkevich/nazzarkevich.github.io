import React, { Component } from 'react';

import VenueView from './view';

class Venues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWord: ''
    }
  }

  handleInputChange = e => {
    const { value } = e.target;

    this.setState({ searchWord: value });
  }

  handleClick = () => {
    const { searchWord } = this.state;
    const { onFetchVenues } = this.props;

    onFetchVenues(searchWord);
  }

  render() {
    const { venues, searchWord, fetching } = this.props;

    return (
      <VenueView
        venues={venues}
        fetching={fetching}
        searchWord={searchWord}
        handleClick={this.handleClick}
        handleInputChange={this.handleInputChange}
      />
    )
  }
}

export default Venues;
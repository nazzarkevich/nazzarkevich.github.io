import React, { Component } from 'react';

import FavoriteView from './view';

import './view/favorite.css';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  deleteFavorite = item => () => {
    const { onRemoveFavorite } = this.props;

    onRemoveFavorite(item);
  }

  handleMouseOver = () => {
    this.setState({ hover: true });
  }

  handleMouseOut = () => {
    this.setState({ hover: false });
  }

  render() {
    const { hover } = this.state;
    const { favorites } = this.props;

    const favortiteList = favorites
      .map((item, i) => <FavoriteView
        key={i}
        venue={item}
        hover={hover}
        deleteFavorite={this.deleteFavorite}
        handleMouseOut={this.handleMouseOut}
        handleMouseOver={this.handleMouseOver}
      />);

    return (
      <div className="favorite-wrapper">
        <h2 className="favorite-venues">* FAVORITE VENUES *</h2>
        {
          favorites.length > 0
            ? favortiteList
            : <h3>Add something to your favorites !</h3>
        }
      </div>
    );
  }

};

export default Favorites;
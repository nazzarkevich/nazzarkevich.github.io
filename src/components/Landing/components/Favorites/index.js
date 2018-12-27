import Favorites from './Favorites';
import { connect } from 'react-redux';

import { addFavorite, removeFavorite } from '../../../../redux/actions/favorites.a';

const mapStateToProps = state => {
  return {
    favorites: state.favoriteList.favorites,
  }
};

const mapDispatchToProps = dispatch => ({
  onAddFavorite: item => dispatch(addFavorite(item)),
  onRemoveFavorite: item => dispatch(removeFavorite(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

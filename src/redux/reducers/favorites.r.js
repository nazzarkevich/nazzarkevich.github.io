import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favorites.ct';

const initialState = {
  favorites: [],
}

const favoriteList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const { payload: { item } } = action;
      const updatedList = [...state.favorites, item];

      return {
        ...state,
        favorites: [...updatedList]
      }

    case REMOVE_FAVORITE:
      const { payload: { item: deletedItem } } = action;
      const { favorites } = state;

      const newList = favorites.filter(bookmark => bookmark.name !== deletedItem.name);

      return {
        ...state,
        favorites: [...newList]
      }

    default:
      return state;
  }
}

export default favoriteList;

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = [thunk];

const enhancers = compose(applyMiddleware(...middlewares));
const store = createStore(rootReducer, enhancers);

export default store;

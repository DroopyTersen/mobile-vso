import { createStore, applyMiddleware } from 'redux';
import { promiseMiddleware } from './middleware';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import initialState from './initialState';

var createStoreWithMiddleware = applyMiddleware(
	promiseMiddleware, 
	createLogger())
(createStore);

export default function configureStore(state) {
	state = state || initialState;
	const store = createStoreWithMiddleware(rootReducer, state)

	if (module.hot) {
	  // Enable Webpack hot module replacement for reducers
	  module.hot.accept('../reducers', () => {
	    const nextRootReducer = require('../reducers')
	    store.replaceReducer(nextRootReducer)
	  })
	}

	return store;
}
 
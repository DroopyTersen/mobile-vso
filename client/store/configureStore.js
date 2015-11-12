import { createStore, applyMiddleware } from 'redux'
import { promiseMiddleware } from '../_utils/middleware';
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

var createStoreWithMiddleware = applyMiddleware(
	promiseMiddleware, 
	createLogger())
(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState)

	if (module.hot) {
	  // Enable Webpack hot module replacement for reducers
	  module.hot.accept('../reducers', () => {
	    const nextRootReducer = require('../reducers')
	    store.replaceReducer(nextRootReducer)
	  })
	}

	return store;
}

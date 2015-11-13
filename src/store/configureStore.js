var { createStore, applyMiddleware } 	= require('redux')
var { promiseMiddleware } 				= require('./middleware')

var createLogger 	= require('redux-logger')
var rootReducer 	= require('../reducers')
var initialState 	= require('./initialState')

var createStoreWithMiddleware = applyMiddleware( promiseMiddleware, createLogger() )(createStore);

function configureStore(state) {
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

module.exports = configureStore;
var actions 			= require('../actions')
var { combineReducers } = require('redux')
var initialState 		= require('../store/initialState')
var myTasks 			= require('./myTasksReducer')

var view = function(state, action) {
	state = state || "myTasks";
	if (action.type === actions.ui.navigate.type) {
		return action.payload;
	}
	return state;
};

var vso = function(state, action) {
	state = state || initialState.vso;

	return state;
}
var viewBag = function(state, action) {
	state = state || {};
	if (action.type === actions.ui.pageLoaded.type) {
		return Object.assign({}, state, { isServer: false });
	}
	return state;
}

var leftMenu = function(state, action) {
	return state || {};
};

const rootReducer = combineReducers({
	viewBag,
	leftMenu,
	view,
	myTasks,
	vso
});

module.exports = rootReducer;

var actions 			= require('../actions')
var { combineReducers } = require('redux')
var initialState 		= require('../store/initialState')
var view = function(state, action) {
	state = state || "myTasks";
	if (action.type === actions.ui.navigate.type) {
		return action.payload;
	}
	return state;
};

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

var myTasks = function(state, action) {
	state = state || initialState.myTasks;
	if ((action.type === actions.api.fetchMyTasks.type 
		|| action.type === actions.api.fetchMyDone.type)
		&& action.status === "success") {
		
		return Object.assign({}, state, action.payload);
	} 


	else {
		return state;
	}
};

const rootReducer = combineReducers({
	viewBag,
	leftMenu,
	view,
	myTasks
});

module.exports = rootReducer;

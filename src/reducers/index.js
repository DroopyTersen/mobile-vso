import { combineReducers } from 'redux'

import * as actions from '../actions';

var view = function(state = "myTasks", action) {
	if (action.type === actions.ui.navigate.type) {
		return action.payload;
	}
	return state;
};

var leftMenu = function(state = {}, action) {
	return state;
};

var myTasks = function(state = [], action) {
	
	if (action.type === actions.api.fetchMyTasks.type 
		&& action.status === "success") {
		return action.payload;
	} else {
		return state;
	}
};

const rootReducer = combineReducers({
	leftMenu,
	view,
	myTasks
});

export default rootReducer

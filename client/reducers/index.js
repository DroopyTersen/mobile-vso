import { combineReducers } from 'redux'
import initialState from './initialState'

import * as actions from '../actions';

var leftMenu = function(state = initialState.leftMenu, action) {
	return state;
};

var myTasks = function(state = initialState.myTasks, action) {
	
	if (action.type === actions.api.fetchMyTasks.type 
		&& action.status === "success") {
		return action.payload;
	} else {
		return state;
	}
};
const rootReducer = combineReducers({
	leftMenu,
	myTasks
});

export default rootReducer

var actions 			= require('../actions')
var initialState 		= require('../store/initialState')

var myTasksReducer = function(state, action) {
	state = state || initialState.myTasks;

	// if it fetched tasks they will 
	// come back as object map grouped by state
	if ((action.type === actions.api.fetchMyTasks.type 
		|| action.type === actions.api.fetchMyDone.type)
		&& action.status === "success") {
		
		return Object.assign({}, state, action.payload);
	} 
	// SET TO CURRENT ITERATION
	else if (action.type === actions.api.setTaskIteration.type 
		&& action.status === "success") {
		var tasks = Object.assign({}, state);
		var newTask = action.payload;
		for (var i = 0; i < tasks[newTask.state].length; i++) {
			if (tasks[newTask.state][i].id === newTask.id) {
				tasks[newTask.state][i] = Object.assign(tasks[newTask.state][i], newTask);
				break;
			}
		}
		return tasks;
	}
	// SET STATE
	else if (action.type === actions.api.setTaskState.type 
		&& action.status === "success") {
		var tasks = Object.assign({}, state);
		var newTask = action.payload;
		var oldTask = null;
		// Remove the old one
		// For each key (state) check if there is a matching task
		for (var state of Object.keys(tasks)) {
			oldTask = tasks[state].find(t => t.id === newTask.id);
			//if a task was found join its props with the new task and then remove it from that state's array
			if (oldTask) {
				newTask = Object.assign({}, oldTask, newTask);
				tasks[state] = tasks[state].filter(t => t.id !== newTask.id);
			}
		}
		// insert it at top of the new state
		tasks[newTask.state] = [newTask, ...tasks[newTask.state]];
		//.unshift(task);
		return tasks;
	}

	else {
		return state;
	}
};

module.exports = myTasksReducer;

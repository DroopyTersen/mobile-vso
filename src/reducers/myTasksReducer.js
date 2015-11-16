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
	// if it was an update, we need to see if the task
	else if (action.type === actions.api.setTaskState.type 
		&& action.status === "success") {
		var tasks = Object.assign({}, state);
		var task = action.payload;
		//remove it 
		if (task.state === "In Progress") {
			var oldTask = tasks["To Do"].find(t => t.id === task.id);
			task = Object.assign(oldTask, task);
			tasks["To Do"] = tasks["To Do"].filter(t => t.id !== task.id);
		} else if (task.state === "Done") {
			//tasks["In Progress"] = [];
			var oldTask = tasks["In Progress"].find(t => t.id === task.id);
			task = Object.assign(oldTask, task);
			tasks["In Progress"] = tasks["In Progress"].filter(t => t.id !== task.id);
		}
		// insert it at top of the new state
		tasks[task.state] = [task, ...tasks["Done"]];
		//.unshift(task);
		return tasks;
	}

	else {
		return state;
	}
};

module.exports = myTasksReducer;

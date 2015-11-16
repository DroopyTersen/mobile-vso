var api = {};
var ajax = require("axios");

api.getMyTasks = function() {
	return ajax.get("/api/myTasks").then(res => res.data);
}; 

api.getMyRecentDone = function() {
	return ajax.get("/api/myRecentDone").then(res => res.data);
}; 

api.setTaskState = function(task, state) {
	return ajax.get(`/api/tasks/${task.id}/setState/${state}`)
			.then(res => Object.assign({}, task, res.data));
};

api.setTaskIteration = function(task) {
	return ajax.get(`/api/tasks/${task.id}/setIteration/${task.project}`)
			.then(res => Object.assign({}, task, res.data));
};

module.exports = api;
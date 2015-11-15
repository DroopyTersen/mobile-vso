var api = {};
var ajax = require("simple-ajax");

api.getMyTasks = function() {
	return ajax.get("/api/myTasks");
}; 

var fakeAsync = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve(data);
		},50);
	})
}; 

module.exports = api;
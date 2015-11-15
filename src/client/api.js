var api = {};
var ajax = require("axios");

api.getMyTasks = function() {
	return ajax.get("/api/myTasks").then(res => res.data);;
}; 

api.getMyRecentDone = function() {
	return ajax.get("/api/myRecentDone").then(res => res.data);
}; 
var fakeAsync = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve(data);
		},50);
	})
}; 

module.exports = api;
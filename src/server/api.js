var api = {};
var vsoFactory = require('../../droopy-vso');

api.setTaskIteration = function(authHash, id, project) {
	var vso = vsoFactory.create(authHash);
	return vso.tasks(id).setIteration(project)
};

api.setTaskState = function(authHash, id, state) {
	var vso = vsoFactory.create(authHash);
	return vso.tasks(id).setState(state)
}
api.getMyTasks = function(authHash) {
	//authHash = authHash || new Buffer("DroopyTersen:Rival5sof").toString('base64');
	var vso = vsoFactory.create(authHash);
	// var project = vso.projects("Skyline-Portals")
	var project = vso.projects("Finance Portal Prj")
	
	return project.myOpenTasks();
}; 

api.getMyRecentDone = function(authHash) {
	var vso = vsoFactory.create(authHash);
	// var project = vso.projects("Skyline-Portals")
	var project = vso.projects("Finance Portal Prj")
	
	return project.myRecentDone();
}; 

module.exports = api;
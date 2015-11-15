var api = {};
var vsoFactory = require('../../droopy-vso');

var myTasksQuery = "/My Queries/VSOApp-MyTasks";

api.getMyTasks = function(authHash) {
	authHash = authHash || new Buffer("DroopyTersen:Rival5sof").toString('base64');
	var vso = vsoFactory.create(authHash);
	var project = vso.projects("Skyline-Portals")
	
	return project.myOpenTasks()
		.then(items => items )
		.catch(function(err) {
			console.log(err);
			return JSON.stringify(err);
		});
}; 

api.getMyRecentDone = function(authHash) {
	authHash = authHash || new Buffer("DroopyTersen:Rival5sof").toString('base64');
	var vso = vsoFactory.create(authHash);
	var project = vso.projects("Skyline-Portals")
	
	return project.myRecentDone()
		.then(items => items )
		.catch(function(err) {
			console.log(err);
			return JSON.stringify(err);
		});
}; 

var fakeAsync = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve(data);
		},50);
	})
}; 


var tasks = [
 { 
			title: "Setup Redux 'Hello World'", 
			parentTitle: "React App", 
			area: "Portals Research",
			description: "Includes learning Redux and creating a reusable boilerplate app.",
			iteration: "Skyline-Portals\\11-Nov\\Nov 09-13",
			state: "To Do",
			remaining: "1.5"
		},
		 { 
			title: "Include Material UI", 
			parentTitle: "React App", 
			area: "Portals Research",
			description: "",
			iteration: "Skyline-Portals\\11-Nov\\Nov 09-13",
			state: "In Progress",
			remaining: ".5"
		},
		 { 
			title: "Kohler P&P Get ampersand...", 
			parentTitle: "Kohler P&P Doc Browser", 
			area: "Kohler-Policies-Procedures(KOHL01010006)",
			description: "",
			iteration: "Skyline-Portals\\11-Nov\\Nov 09-13",
			state: "In Progress",
			remaining: "3"
		}
];

module.exports = api;
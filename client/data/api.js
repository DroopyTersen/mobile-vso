import Q from 'q'

var Api = function(url) {
	this.url = url || "";
}; 

Api.prototype.getMyTasks = function() {
	return fakeAsync(tasks);
}; 

var fakeAsync = (data) => {
	// fake async with mock data
	var deferred = Q.defer();

	setTimeout(function() {
		deferred.resolve(data);
	},50);
	return deferred.promise;
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

export default Api;
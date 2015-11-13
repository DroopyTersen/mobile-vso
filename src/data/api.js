var api = {};
api.getMyTasks = function() {
	console.log("HERE");
	return fakeAsync(tasks);
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
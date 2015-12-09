var React = require("react");
module.exports = {
	view: "myTasks",
	viewBag: {},
	vso: {
		host: "skyline.visualstudio.com",
		project: "",
		projectOptions: ["Skyline-Portals"],
		hostOptions: [ 
			"skyline.visualstudio.com",
			"jci.visualstudio.com"
		]
	},
	myTasks: {
		"To Do": [],
		"In Progress": [],
		"Done": []
	},
	leftMenu: {
		items: [
			{
				view: "myTasks",
				text: "My Tasks"
			},			
			{
				view: "help",
				text: "Help"
			},
			{
				view: "feedback",
				text: "App Feedback"
			}
		]
	}
}
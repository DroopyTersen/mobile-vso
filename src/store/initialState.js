var React = require("react");
module.exports = {
	view: "myTasks",
	viewBag: {},
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
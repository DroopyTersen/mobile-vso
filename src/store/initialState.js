module.exports = {
	view: "myTasks",
	viewBag: {},
	myTasks: [],
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
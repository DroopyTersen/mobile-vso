var React 	= require('react')
var Task 	= require('./Task')
var mui     = require('material-ui')

var { Tab, Tabs } = mui;

class TaskList extends React.Component {
	
    render() {
		var tabStyles = {
			color:"#444",
			padding:0,
			borderBottom: "1px solid #ddd",
			marginBottom: "10px"
		};
		
		var getStyle = function(id) {
			var styles = Object.assign({},tabStyles);
			if (id === "first") {
				styles.borderLeft = "1px solid #ddd"
			} else if (id === "last") {
				styles.borderRight ="1px solid #ddd"
			}
			
			return styles;
		}

		var createTask = (task) => {
			return (
				<Task task={task} 
					updateTask={this.props.updateTask} 
					setIteration={this.props.setIteration} 
				/> 
			);
		};

		var tasks = this.props.tasks;
		var renderTasks = (state) => (tasks[state]) ? tasks[state].map(t => createTask(t)) : "";

        return (
			<Tabs tabItemContainerStyle={{backgroundColor:"#fff"}}>
				<Tab style={getStyle("first")} label="To Do" >
					{ renderTasks("To Do") }
				</Tab>
				<Tab style={tabStyles} label="In Progress" >
					{ renderTasks("In Progress") }
				</Tab>
				<Tab style={getStyle("last")} label="Done">
					{ renderTasks("Done") }
				</Tab>
			</Tabs>
		);
    }
}

module.exports = TaskList;

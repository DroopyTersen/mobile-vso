var React           = require('react')
var TaskList 		= require('../tasks/TaskList')
var { connect }     = require('react-redux')
var actions 		= require('../../actions');

var selectState = (state) => { 
  return { tasks: state.myTasks }
}

class MyTasks extends React.Component {
	constructor() {
		super()
		this.updateTask = this.updateTask.bind(this);
		this.setIteration = this.setIteration.bind(this);
	}
	componentDidMount() {
    	this.props.dispatch(actions.api.fetchMyDone());
	}
	
	updateTask(task, updates) {
		if (updates.state) {
			this.props.dispatch(actions.api.setTaskState(task, updates.state));	
		}
	}
	setIteration(task) {
		this.props.dispatch(actions.api.setTaskIteration(task))
	}
	render() {
		return (
		    <div id='my-tasks-view'>
		        <TaskList 
		        	tasks={this.props.tasks}  
		        	updateTask={this.updateTask} 
		        	setIteration={this.setIteration}
	        	/>   
		    </div>
		);
  	}
}

module.exports = connect(selectState)(MyTasks);
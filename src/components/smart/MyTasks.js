var React           = require('react')
var TaskList 		= require('../tasks/TaskList')
var { connect }     = require('react-redux')
var actions 		= require('../../actions');

var selectState = (state) => { 
  return { tasks: state.myTasks }
}

class MyTasks extends React.Component {
	
	componentDidMount() {
    	this.props.dispatch(actions.api.fetchMyDone());
	}
	
	render() {
		return (
		    <div id='my-tasks-view'>
		        <TaskList tasks={this.props.tasks} />   
		    </div>
		);
  	}
}

module.exports = connect(selectState)(MyTasks);
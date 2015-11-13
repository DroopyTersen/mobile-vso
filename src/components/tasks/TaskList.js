var React 	= require('react')
var Task 	= require('./Task')

class TaskList extends React.Component {
    render() {
		var taskNodes = this.props.tasks.map(task => <Task task={task} /> );
        return <div>{taskNodes}</div>;
    }
}

module.exports = TaskList;

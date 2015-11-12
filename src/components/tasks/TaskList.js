import React from 'react'
import Task from './Task'
export default class TaskList extends React.Component {
	render() {
		var taskNodes = this.props.tasks.map(task => <Task task={task} /> );
		return <div>{taskNodes}</div>
  	}
};

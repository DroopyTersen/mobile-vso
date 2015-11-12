
import React from 'react'
import Task from './Task'
import {connect} from 'react-redux';
import * as actions from '../../actions';

var selectState = (state) => { 
  return { tasks: state.myTasks }
}

@connect(selectState)
export default class TaskList extends React.Component {
	
	componentWillMount() {
    	this.props.dispatch(actions.api.fetchMyTasks());
	}
	
	render() {
		var taskNodes = this.props.tasks.map(task => <Task task={task} /> );
		
		return <div>{taskNodes}</div>
  	}
}

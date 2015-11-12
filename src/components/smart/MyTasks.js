import React from 'react'
import TaskList from '../tasks/TaskList'
import {connect} from 'react-redux';
import * as actions from '../../actions';

var selectState = (state) => { 
  return { tasks: state.myTasks }
}

@connect(selectState)
export default class MyTasks extends React.Component {
	
	componentDidMount() {
    	this.props.dispatch(actions.api.fetchMyTasks());
	}
	
	render() {
		return (
		    <div id='my-tasks-view'>
		        <TaskList tasks={this.props.tasks} />   
		    </div>
		);
  	}
}

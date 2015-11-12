import React from 'react'
import mui from 'material-ui';
import { stringToColor } from '../../utils/helpers';

var { Card, CardActions, CardExpandable, 
		CardHeader, CardText, Avatar, FlatButton } = mui;

export default class Task extends React.Component {


	renderAvatar(task) {
		return <Avatar style={{color: stringToColor(task.area) }}>{task.area[0]}</Avatar> 
	}

	render() {
		var task = this.props.task;
		return (
			<Card initiallyExpanded={false} style={{marginTop:"5px"}}>
				
				<CardHeader
				    title={task.title}
				    subtitle={task.parentTitle}
				    avatar= { this.renderAvatar(task) }
				    actAsExpander={true}
				    showExpandableButton={true}>
			  	</CardHeader>
			  	
			  	<CardText expandable={true}>
		  			
		  			<b style={{marginBottom:"3px"}}>{task.area}</b>
		  			<br />
		  			<em>{task.iteration}</em>

					<p>
						<span>State: </span><b>{task.state}</b>
						<span style={{float:"right"}}><b>{task.remaining} hours</b></span>
					</p>
			  		
			  		<p>{task.description}</p>
			  	</CardText>

				<CardActions expandable={true} style={{textAlign:"center"}}>
					<FlatButton label="Start" secondary={true}/>
					<FlatButton label="Complete" secondary={true}/>
					<FlatButton label="Remove" primary={true}/>
				</CardActions>
			 
			</Card>
		);
    
  	}
}

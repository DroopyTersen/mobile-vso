import React, { PropTypes, Component } from 'react'

const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');
const Avatar = require('material-ui/lib/avatar');
const FlatButton = require('material-ui/lib/flat-button');

export default class Task extends Component {
	render() {
		var stringToColor = function(str) {

		    // str to hash
		    for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
		    // int/hash to hex
		    for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));
		    return colour;
		}
		var task = this.props.task;
		return (
			<Card initiallyExpanded={false} style={{marginTop:"5px"}}>
			  <CardHeader
			    title={task.title}
			    subtitle={task.parentTitle}
			    avatar= { <Avatar style={{color: stringToColor(task.area) }}>{task.area[0]}</Avatar> }
			    actAsExpander={true}
			    showExpandableButton={true}>
			  </CardHeader>
			  <CardText expandable={true}>
		  		<b style={{marginBottom:"3px"}}>{task.area}</b>
		  		<br />
		  		<em>{task.iteration}</em>

			  	<p>
			  		<span>State: </span><b>{task.state}</b>{' '}
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

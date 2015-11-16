var React  		= require('react')
var mui         = require('material-ui')
var helpers		= require('../../utils/helpers')
var moment		= require('moment');
var { Card, CardActions, CardExpandable, 
	CardHeader, CardText, Avatar, FlatButton } = mui;

class Task extends React.Component {
	
    constructor(props) {
        super(props);
        this.displayName = 'Task';
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

	handleButtonClick(e) {
		var states = {
			"Start": { state: "In Progress" },
			"Complete": { state: "Done" },
			"Remove": { state: "Removed" }
		};
		e.preventDefault();
		if (states[e.target.textContent]) {
			this.props.updateTask(this.props.task, states[e.target.textContent]);
		}
	}
	
	render() {
		var task = this.props.task;
		if (!task) return "";
		var areaColor = helpers.stringToColor(task.area);
		var avatar = <Avatar style={{color: areaColor }}>{task.area[0]}</Avatar>
		
		var bottomRight = "";
		if (task.state === "Done") {
			bottomRight = "Closed " + moment(task.closedDate).fromNow() 
		} else {
			bottomRight = <span><b>{task.remaining + ' hours '}</b><i className="fa fa-hourglass-half"></i></span>
		}
		var styles = {
			area: { 
				margin:"0", 
				color: areaColor, 
				fontSize:".9em",
				//borderTop: "1px solid #eee",
				//paddingTop: "10px"
			},
			title: {
				fontSize:"1.25em", 
				margin:"5px 0 0 0", 
				borderTop:"1px solid #eee", 
				padding: "20px 0" 
			},
			path: { 
				margin:"10px 0 25px", 
				fontSize:".9em", 
				color:"#FF4081"
			}
		}
		return (
			<Card initiallyExpanded={false} style={{marginTop:"5px"}}>
				
				<CardHeader
				    title={helpers.shortenText(task.title, 32)}
					titleStyle={{marginTop:"4px"}}
				    subtitle={helpers.shortenText(task.path, 40)}
					subtitleStyle={{fontSize:"13px"}}
				    avatar= { avatar }
				    actAsExpander={true}
				    showExpandableButton={true}>
			  	</CardHeader>
			  	
			  	<CardText expandable={true} style={{paddingTop:"0"}}>
		  			<p style={styles.area}>{task.area}</p>
		  			<p style={styles.title}>{task.title}</p>
					<p style={styles.path}>{task.path}</p>
		  			<span>Iteration: <em>{task.iteration}</em></span>

					<p>
						<span>State: </span><b>{task.state}</b>
						<span style={{float:"right"}}>{bottomRight}</span>
					</p>
			  		
			  		<p>{task.description}</p>
			  	</CardText>

				<CardActions expandable={true} style={{textAlign:"center", borderTop:"1px solid #eee"}}>
					<FlatButton label="Start" 
						secondary={true} 
						disabled={task.state !== "To Do"}
						onClick={this.handleButtonClick}
					/>
					<FlatButton label="Complete" 						
						secondary={true} 
						disabled={task.state === "Done"}
						onClick={this.handleButtonClick}
					/>
					<FlatButton label="Remove" 
						primary={true}
						onClick={this.handleButtonClick}
					/>
				</CardActions>
			 
			</Card>
		);
  	}
}

module.exports = Task;
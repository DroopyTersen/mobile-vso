var React           = require('react')
var { AppBar }      = require('material-ui')

class TopBar extends React.Component {
	render() {
		var iconStyles = {
			fontSize: "1.4em",
		    transform: "rotate(-21deg)",
		    position: "relative",
		    left: "5px",
		    top: "4px"
		}
		var title = (
				<h2 style={{color:"#fff", fontWeight:"200", margin:"10px -10px"}}>
					<span stle={{marginRight:"10px"}}>mobile</span>
					<i style={iconStyles} className="fa fa-mobile"></i>
					<span>VSO</span>
				</h2>
			)

		return (
			<header>
				<AppBar
					title={title}
					onLeftIconButtonTouchTap={this.props.menuHandler}
				/>
			</header>
		);
	}
}

module.exports = TopBar;

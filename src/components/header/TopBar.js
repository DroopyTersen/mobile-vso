var React           = require('react')
var { AppBar }      = require('material-ui')

class TopBar extends React.Component {
	render() {
		return (
			<header>
				<AppBar
					title={this.props.title}
					onLeftIconButtonTouchTap={this.props.menuHandler}
				/>
			</header>
		);
	}
}

module.exports = TopBar;

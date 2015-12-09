var React           = require('react')
var { AppBar, IconButton, MoreVertIcon, Menu } = require('material-ui')
var IconMenu = require('material-ui/lib/menus/icon-menu');
var MenuItem = require('material-ui/lib/menus/menu-item');
class TopBar extends React.Component {
	render() {
		var iconStyles = {
			fontSize: "1.4em",
		    transform: "rotate(-21deg)",
		    position: "relative",
		    left: "5px",
		    top: "4px"
		}
		var menuStyles = {
			fontSize: "1.5em",
			position: "relative",
			top: "12px",
			right: "10px",
			color: "#fff",
			fontWeight: "100"
		}

		var menuIconStyles = {
			position: "relative",
			top: "2px",
			left: "3px",
			color: "#444"
		}
		var title = (
				<h2 style={{color:"#fff", fontWeight:"200", margin:"10px -10px"}}>
					<span stle={{marginRight:"10px"}}>mobile</span>
					<i style={iconStyles} className="fa fa-mobile"></i>
					<span>VSO</span>
				</h2>
			)

		var topRightMenu = (
		    <IconMenu iconButtonElement={ <IconButton className="fa fa-ellipses-v"><i className="fa fa-ellipses-v"></i></IconButton> }>
		      <MenuItem primaryText="Change Project" rightIcon={<i style={menuIconStyles} className='fa fa-folder-open-o'></i> } />
		      <MenuItem primaryText="Change Host" rightIcon={<i styles={menuIconStyles} className='fa fa-cloud'></i>} />
		      <MenuItem primaryText="Sign out" rightIcon={<i className='fa fa-sign-out'></i>} />
		    </IconMenu> );

		return (
			<header>
				<AppBar
					title={title}
					onLeftIconButtonTouchTap={this.props.menuHandler}
					iconElementRight={topRightMenu}
				/>
			</header>
		);
	}
}

module.exports = TopBar;

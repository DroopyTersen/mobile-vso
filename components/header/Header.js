import React, { PropTypes, Component } from 'react'
const AppBar = require('material-ui/lib/app-bar');
const IconButton = require('material-ui/lib/icon-button');
const IconMenu = require('material-ui/lib/menus/icon-menu');
const MenuItem = require('material-ui/lib/menus/menu-item');
const MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
const FontIcon = require('material-ui/lib/font-icon');
export default class Header extends Component {
	render() {
    	return (
			<AppBar
			  title={this.props.title}
			  iconElementRight={
			    <IconMenu iconButtonElement= {
			      <IconButton><MoreVertIcon /></IconButton>
			    }>
			      <MenuItem primaryText="Refresh" />
			      <MenuItem primaryText="Help" />
			      <MenuItem primaryText="Sign out" />
			    </IconMenu>
			} />
    	);
  	}
}

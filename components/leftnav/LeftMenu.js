import React, { PropTypes, Component } from 'react'
const LeftNav = require('material-ui/lib/left-nav');
const MenuItem = require('material-ui/lib/menus/menu-item');



export default class Header extends Component {
	render() {
		var menuItems = [
  			{ route: 'get-started', text: 'Get Started' },
			  { route: 'customization', text: 'Customization' },
			  { route: 'components', text: 'Components' },
			];
		return (
			<LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
		);
    
  	}
}

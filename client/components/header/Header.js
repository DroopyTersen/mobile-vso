import React from 'react';
import {connect} from 'react-redux'
import TopBar from './TopBar';

import mui from 'material-ui';
var { LeftNav } = mui;

var selectState = function(state) {
	return { leftMenu: state.leftMenu };
};

@connect(selectState)
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(e) {
    	e.preventDefault();
    	this.refs.leftNav.toggle();
    }

    render() {
        return (

        	<div id='header'>
	        	<LeftNav
        			ref='leftNav'
        			docked={false}
        			menuItems={this.props.leftMenu.items}
        		/>
        		<TopBar 
        			title={this.props.title} 
        			menuHandler={this.handleMenuClick}
        		/>
        	</div>
    	);
    }
}

export default Header;

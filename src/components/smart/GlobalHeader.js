import React from 'react';
import {connect} from 'react-redux'
import TopBar from '../header/TopBar';

import { navigate } from '../../actions/uiActions';

import mui from 'material-ui';
var { LeftNav } = mui;

var selectState = function(state) {
	return { leftMenu: state.leftMenu };
};

@connect(selectState)
class Global extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Global';
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    leftMenuChange(e, index, item) {
        e.preventDefault();
        this.props.dispatch(item.view)
    }
    
    handleLeftMenuToggle(e) {
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
        			menuHandler={this.handleLeftMenuToggle}
        		/>
        	</div>
    	);
    }
}

export default Global;

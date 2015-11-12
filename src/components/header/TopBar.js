import React from 'react';

import mui from 'material-ui';
var { AppBar } = mui;

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

export default TopBar;

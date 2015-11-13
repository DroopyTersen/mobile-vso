var React           = require('react')
var mui             = require('material-ui')
var TopBar          = require('../header/TopBar');
var { connect }     = require('react-redux')
var { navigate }    = require('../../actions/uiActions');
var { LeftNav }     = require('material-ui');

var selectState = function(state) {
	return { leftMenu: state.leftMenu, isServer: state.isServer };
};

class GlobalHeader extends React.Component {
    
    constructor(props) {
        super(props);
        this.displayName = 'Global';
        this.handleLeftMenuToggle = this.handleLeftMenuToggle.bind(this);
    }

    leftMenuChange(e, index, item) {
        e.preventDefault();
        this.props.dispatch(item.view)
    }
    
    handleLeftMenuToggle(e) {
    	e.preventDefault();
        if (this.refs.leftNav) {
            this.refs.leftNav.toggle();
        }
    }

    renderLeftNav() {
        console.log(this.props);
        if (!this.props.isServer) {
            return <LeftNav
                        ref='leftNav'
                        docked={false}
                        menuItems={this.props.leftMenu.items}
                    />            
        } return "";
    }

    render() {
        return (

        	<div id='header'>
                {this.renderLeftNav()}
        		<TopBar 
        			title={this.props.title} 
        			menuHandler={this.handleLeftMenuToggle}
        		/>
        	</div>
    	);
    }
}

//Hook it up to the store
module.exports = connect(selectState)(GlobalHeader);

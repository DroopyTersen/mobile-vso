var React           = require('react')
var mui             = require('material-ui')
var TopBar          = require('../header/TopBar');
var { connect }     = require('react-redux')
var { navigate }    = require('../../actions/uiActions');
var { LeftNav }     = mui;

var selectState = function(state) {
	return { leftMenu: state.leftMenu, view: state.view, viewBag: state.viewBag };
};

class GlobalHeader extends React.Component {
    
    constructor(props) {
        super(props);
        this.displayName = 'Global';
        this.handleLeftMenuToggle = this.handleLeftMenuToggle.bind(this);
        this.leftMenuChange = this.leftMenuChange.bind(this);
    }

    leftMenuChange(e, index, item) {
        e.preventDefault();
        this.props.dispatch(navigate(item.view))
    }
    
    handleLeftMenuToggle(e) {
    	e.preventDefault();
        if (this.refs.leftNav) {
            this.refs.leftNav.toggle();
        }
    }

    renderLeftNav() {
        if (!this.props.viewBag.isServer && this.props.view !== "login") {
            return <LeftNav
                        ref='leftNav'
                        docked={false}
                        menuItems={this.props.leftMenu.items}
                        onChange={this.leftMenuChange}
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

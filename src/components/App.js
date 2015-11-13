var React 			= require('react')
var GlobalHeader 	= require('./smart/GlobalHeader')
var MyTasks 		= require('./smart/MyTasks')
var LoginForm 		= require('./login/LoginForm')
var { connect } 	= require('react-redux')
var { pageLoaded } 	= require('../actions/uiActions')

var selectState = function(state) {
	return { view: state.view };
};

class App extends React.Component {
	
	renderView() {
		var currentView = this.props.view;
		var views = {
			myTasks: <MyTasks />,
			login: <LoginForm />
		};		
		return views[currentView] || `<h1>${currentView} view not found</h1>`	
	}

	componentDidMount() {
		this.props.dispatch(pageLoaded());	
	}
	
  	render() {
	  	return (
		  	<div id="app-container">
					<GlobalHeader title="Mobile VSO" />
					{this.renderView()}
		  	</div>
		);
  	}
}

// Hook it up to the store
module.exports = connect(selectState)(App);

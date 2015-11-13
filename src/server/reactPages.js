
var React               = require('react')
var { renderToString }  = require('react-dom/server')
var { Provider }        = require('react-redux')
var { createStore }     = require('redux')

var api             = require('../data/api')
var initialState    = require('../store/initialState')
var rootReducer		= require('../reducers')
var App             = require('../components/App')


var setState = function(prevState, newState) {
	return Object.assign({}, prevState, newState);
}

exports.indexPage = function(req, res) {
	// Get tasks
	api.getMyTasks().then( tasks => {
		res.send(serverSideReact({ 
			view: "myTasks", 
			myTasks: tasks, 
			isServer: true 
		}));
	})
}
 
exports.loginPage = function(req, res) {
	res.send(serverSideReact({ view: "login" }));
}

var serverSideReact = function(pageState) {
	var state = setState(initialState, pageState);
	state.isServer = true;
	console.log(rootReducer);
	var store = createStore(rootReducer, state);
	
	const html = renderToString(
		<Provider store={store}>
		  <App />
		</Provider>
	);

	// Grab the initial state from our Redux store after reducers
	var reducedState = store.getState()
	// Send the rendered page back to the client
	return renderFullPage(html, reducedState);
};

var renderFullPage = function(html, initialState) {
	return `
	<!DOCTYPE html>
	<html>
		
		<head>
			<title>Mobile VSO</title>
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		</head>
		
		<body>
			<div id="root">${html}</div>
			<script>
				window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
			</script>
			<script src="/static/bundle.js"></script>
		</body>
	
	</html>
	`;
}
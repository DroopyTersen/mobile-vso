
var React               = require('react')
var { renderToString }  = require('react-dom/server')
var { Provider }        = require('react-redux')
var { createStore }     = require('redux')

var api             = require('./api')
var initialState    = require('../store/initialState')
var rootReducer		= require('../reducers')
var App             = require('../components/App')

var setState = function(prevState, newState) {
	return Object.assign({}, prevState, newState);
}

exports.indexPage = function(req, res) {
	// Get tasks
	api.getMyTasks(req.user.authHash).then( tasks => {
		res.send(serverSideReact({ 
			view: "myTasks", 
			myTasks: tasks
		}));
	})
}
 
exports.loginPage = function(req, res) {
	var state = { view: "login" };
	if (req.query.failed === "true") {
		state.viewBag = { loginFailed: true };
	}
	res.send(serverSideReact(state));
}

var serverSideReact = function(pageState) {
	var state = setState(initialState, pageState);
	state.viewBag.isServer = true;
	var store = createStore(rootReducer, state);
	
	const html = renderToString(
		<Provider store={store}>
		  <App />
		</Provider>
	);

	// Grab the initial state from our Redux store after reducers
	var reducedState = store.getState();
	
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
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
			<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		</head>
		
		<body>
			<div id="root" style='display:none'>${html}</div>
			<script>
				window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
			</script>
			<script>
				setTimeout(function() {
					document.getElementById("root").style.display = 'block';
				}, 350);
			</script>
			<script src="/static/bundle.js"></script>

		</body>
	
	</html>
	`;
}

//<script src='https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react.min.js'></script>

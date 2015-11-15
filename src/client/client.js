var React 			= require('react')
var { render }		= require('react-dom');
var { Provider } 	= require('react-redux');
var App 			= require('../components/App');
var configureStore 	= require('../store/configureStore');
var injectTapEvent	= require('react-tap-event-plugin');
//var Styles 			= require('../styles/app.css');

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
injectTapEvent();

//Output to DOM
render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

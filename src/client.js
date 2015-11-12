import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore'
import injectTapEvent from 'react-tap-event-plugin'
import Styles from './styles/app.css';

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

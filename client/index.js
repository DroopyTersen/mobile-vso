import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import injectTapEvent from 'react-tap-event-plugin'
import Styles from './styles/app.css';

const store = configureStore()
injectTapEvent();

//Output to DOM
render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

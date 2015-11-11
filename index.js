import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import injectTapEvent from 'react-tap-event-plugin'
const store = configureStore()
import Styles from './styles/app.css';
injectTapEvent();
render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

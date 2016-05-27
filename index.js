// This is the "root" of your App
// It's basically wrapping the App component inside a Provider component which will
// ensure that the app store is accessible across all the app
// Meet me in /components/App.js

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import { createStore } from 'redux'
import App from './components/App'

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import newsReducer from './reducers'
import thunk from 'redux-thunk'
import Promise from 'redux-promise'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'
import App from "./components/App"

const store = createStore(newsReducer,
  applyMiddleware(thunk, Promise)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


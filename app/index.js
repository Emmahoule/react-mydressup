import './src/sass/main.scss'

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { Routes } from "./Routes";

import dressingApp from './reducers/reducers'
import thunkMiddleware from 'redux-thunk'
import api from './middleware/api'
import externApi from './middleware/externApi'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api, externApi)(createStore)

let store = createStoreWithMiddleware(dressingApp)

let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
  	<Routes/>
  </Provider>,
  rootElement
)
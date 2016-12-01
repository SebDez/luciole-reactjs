/* eslint-disable import/default */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routes'
import configureStore from './app/store/configureStore'
require('./favicon.ico') // Tell webpack to load favicon.ico

// Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import './styles/app.container.scss'
import './styles/font_awesome/font-awesome.scss'

const store = configureStore()

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes(store)} />
  </Provider>, document.getElementById('app')
)

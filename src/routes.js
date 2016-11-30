import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './app/app.container'
import Main from './app/module/main/container/main.container'
import HomePage from './app/module/homepage/container/homepage.container'
import Buildings from './app/module/buildings/container/buildings.container'
import CGU from './app/module/cgu/container/cgu.container'
import About from './app/module/about/container/about.container'

export default (store) => {
  return (
    <Route path='/' component={App}>
      <Route component={Main}>
        <IndexRoute component={HomePage} />
        <Route path='/buildings' component={Buildings} />
        <Route path='/cgu' component={CGU} />
        <Route path='/about' component={About} />
      </Route>
    </Route>
  )
}

export const checkAuth = (store) => {
  return (location, replaceWith) => {
    // const state = store.getState()
    /* if (!AuthService.isConnected(state)) {
      replaceWith({pathname: '/'})
    } */
  }
}

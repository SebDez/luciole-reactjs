import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './app/app.container'
import Main from './app/module/main/container/main.container'
import HomePage from './app/module/homepage/container/homepage.container'
import BuildingsPage from './app/module/buildings/container/buildings.container'
import CGUPage from './app/module/cgu/container/cgu.container'
import AboutPage from './app/module/about/container/about.container'
import ContactPage from './app/module/contact/container/contact.container'

export default (store) => {
  return (
    <Route path='/' component={App}>
      <Route component={Main}>
        <IndexRoute component={HomePage} />
        <Route path='/buildings' component={BuildingsPage} />
        <Route path='/cgu' component={CGUPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
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

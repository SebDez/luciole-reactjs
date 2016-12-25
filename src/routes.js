import React from 'react'
import {Route, IndexRoute} from 'react-router'

// CONTAINERS
import App from './app/app-container'
import Main from './app/module/main/container/main-container'
import HomePage from './app/module/homepage/container/homepage-container'
import BuildingsPage from './app/module/buildings/container/buildings-container'
import CGUPage from './app/module/cgu/container/cgu-container'
import AboutPage from './app/module/about/container/about-container'
import ContactPage from './app/module/contact/container/contact-container'

// SERVICES
import AuthService from './app/common/auth/service/auth-service'

/**
 * APP ROUTES
 */
export default (store) => {
  return (
    <Route path='/' component={App}>
      <Route component={Main}>
        <IndexRoute component={HomePage} />
        <Route path='/buildings' component={BuildingsPage}
          onChange={checkAuth(store)} onEnter={checkAuth(store)} />
        <Route path='/cgu' component={CGUPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
      </Route>
    </Route>
  )
}

/**
 * Check if user is auth to access the Route or redirect him
 */
export const checkAuth = (store) => {
  return (location, replaceWith) => {
    const state = store.getState()
    if (!AuthService.isConnected(state.application)) {
      replaceWith({pathname: '/'})
    }
  }
}

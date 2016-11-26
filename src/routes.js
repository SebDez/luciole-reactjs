import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './app/app.container'
import Main from './app/module/main/container/main.container'

export default (store) => {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={Main} />
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

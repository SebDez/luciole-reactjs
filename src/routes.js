import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './app/App.container'

export default (store) => {
  return (
    <Route path='/' component={App} />
  )
}

export const checkAuth = (store) => {
  return (location, replaceWith) => {
    const state = store.getState()
    if (!AuthService.isConnected(state)) {
      replaceWith({pathname: '/'})
    }
  }
}

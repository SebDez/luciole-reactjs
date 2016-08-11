import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app/components/App';
import HomePage from './app/containers/HomePage';
import KingdomDashboard from './app/containers/KingdomDashboard';
import NotFoundPage from './app/components/NotFoundPage.js';

export default (store) => {
  return  (
    <Route path="/" component={App} >
      <IndexRoute component={HomePage}/>
      <Route path="dashboard" component={KingdomDashboard} onChange={checkAuth(store)} onEnter={checkAuth(store)}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  )
}

export const checkAuth = (store) => {
  return (location, replaceWith) => {
    const state = store.getState();
    if(!state.auth || !state.auth.user || !state.auth.user.token){
      replaceWith({pathname:'/'})
    }
  }
};

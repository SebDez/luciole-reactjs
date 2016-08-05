import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './app/components/App';
import HomePage from './app/containers/HomePage';
import KingdomDashboard from './app/containers/KingdomDashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="dashboard" component={KingdomDashboard}/>
  </Route>
);

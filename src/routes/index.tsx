import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Model from '../pages/Model';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/details/:pokemon+" component={Details} />
    <Route path="/model" component={Model} />
  </Switch>
);

export default Routes;

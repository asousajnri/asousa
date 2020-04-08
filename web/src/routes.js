import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Edit from './pages/Edit';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Main />
    </Route>
    <Route path="/edit">
      <Edit />
    </Route>
  </Switch>
);

export default Routes;

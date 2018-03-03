import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './components/MainMenu';

import Home from './containers/home';
import Settings from './containers/settings';
import NoMatch from './containers/nomatch';

export default () => (
  <Fragment>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

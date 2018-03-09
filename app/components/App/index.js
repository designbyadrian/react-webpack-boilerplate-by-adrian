import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../../stylesheets/global.sass';

import Menu from '../MainMenu';

import Home from '../../containers/Home';
import Post from '../../containers/Post';
import Settings from '../../containers/Settings';
import NoMatch from '../../containers/nomatch';

export default () => (
  <Fragment>
    <Menu />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:slug" component={Post} />
        <Route path="/settings" component={Settings} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Fragment>
);

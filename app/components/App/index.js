import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import 'stylesheets/global.sass';

import Menu from 'components/MainMenu';

import Home from 'containers/Home';
import Post from 'containers/Post';
import Settings from 'containers/Settings';
import NoMatch from 'containers/nomatch';

const App = () => (
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

export default hot(module)(withRouter(App));

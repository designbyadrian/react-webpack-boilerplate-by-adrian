import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

export default () => (
  <Fragment>
    <Helmet
      title="404 | React 16 Webpack 4"
    />
    <div className="jumbotron mt-3">
      <h1 className="display-4">404!</h1>
      <p className="lead">That's, like... a bummer...</p>
    </div>

  </Fragment>
);

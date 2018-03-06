import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Sidebar from '../../components/Sidebar';
import Stack from '../../components/Stack';

export default () => (
  <Fragment>
    <Helmet
      title="Home | React 16 Webpack 4"
    />
    <div className="row">
      <div className="col-12 col-md-8 pt-3">
        <Stack />
      </div>
      <div className="col-12 col-md-4 pt-3">
        <Sidebar />
      </div>
    </div>
  </Fragment>
);

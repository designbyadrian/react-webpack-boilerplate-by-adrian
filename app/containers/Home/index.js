import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Stack from '../../components/Stack';

export default () => (
  <Fragment>
    <Helmet
      title="Home | React 16 Webpack 4"
    />
    <div>Home</div>
    <Stack />
  </Fragment>
);

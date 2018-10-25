/* eslint-disable consistent-return, one-var */

const path = require('path');
const express = require('express');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontend');

const app = express();

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 8080;

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: path.join(__dirname, '../build'),
  publicPath: '/',
});

app.listen(port, host, err => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);
});

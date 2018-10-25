/* eslint-disable one-var */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');

const baseConfig = require('./webpack.base.js');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebPackPlugin({
    template: 'app/index.html',
    inject: true,
  }),
  new FriendlyErrorsWebpackPlugin({
    clearConsole: false,
    onErrors: (severity, errors) => {
      if (severity !== 'error') {
        return;
      }

      const error = errors[0];
      notifier.notify({
        title: 'Webpack error',
        message: `${severity}: ${error.name}`,
        subtitle: error.file || '',
        // icon: path.join(__dirname, '../assets/logo.png'),
      });
    },
  }),
];

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, '../app/index.js'),
  ],
  plugins,
});

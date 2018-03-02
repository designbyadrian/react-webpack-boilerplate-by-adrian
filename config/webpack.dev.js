const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const baseConfig = require('./webpack.base.js');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebPackPlugin({
    template: 'app/index.html',
    inject: true,
  }),
];

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/index.js'),
  ],
  plugins: plugins,
});

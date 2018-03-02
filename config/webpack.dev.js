const merge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const baseConfig = require('./webpack.base.js');

const plugins = [
  new HtmlWebPackPlugin({
    template: 'app/index.html',
    inject: true,
  }),
];

module.exports = merge(baseConfig, {
  plugins: plugins,
});

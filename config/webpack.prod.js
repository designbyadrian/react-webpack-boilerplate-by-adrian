const merge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const baseConfig = require('./webpack.base.js');

const plugins = [
  new HtmlWebPackPlugin({
    template: 'app/index.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
    inject: true,
  })
];

module.exports = merge(baseConfig, {
  plugins: plugins,
});

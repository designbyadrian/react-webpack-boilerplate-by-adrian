const path = require('path');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.js');

console.log("process.env.NODE_ENV:", process.env.NODE_ENV);

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
  }),
];

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: path.join(process.cwd(), 'app/index.js'),
  plugins: plugins,
});

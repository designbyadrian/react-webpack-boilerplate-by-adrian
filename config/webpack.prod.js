/* eslint-disable one-var */

const path = require('path');
const merge = require('webpack-merge');
const ExtractCSS = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.base.js');

const optimization = {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        maxSize: 512000,
      },
    },
  },
  minimizer: [new TerserPlugin({
    sourceMap: false,
    parallel: true,
    terserOptions: {
      keep_fnames: true,
    },
  })],
};

const plugins = [
  new ExtractCSS({
    filename: '[name].css',
    chunkFilename: '[id].css',
    allChunks: true,
  }),
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
      minifyJS: false,
      minifyCSS: true,
      minifyURLs: true,
    },
    inject: true,
  }),
];

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: path.join(__dirname, '../app/index.js'),
  optimization,
  plugins,
});

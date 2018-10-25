/* eslint-disable one-var */

const isDev = require('isdev');
const path = require('path');
const ExtractCSS = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../app')],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Global block for CSS framework
      {
        test: /\.(scss|sass)$/,
        include: /stylesheets\/global/,
        use: [
          isDev ? 'style-loader' : ExtractCSS.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [require('autoprefixer')], // eslint-disable-line global-require
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(scss|sass)$/,
        exclude: [/node_modules/, /stylesheets\/global/],
        use: [
          isDev ? 'style-loader' : ExtractCSS.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: isDev
                ? '[path]-[name]_[local]_[hash:base64:5]'
                : '[name]-[local]-[hash:base64:6]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [require('autoprefixer')], // eslint-disable-line global-require
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [],
};

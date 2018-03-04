const isDev = require('isdev');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
  filename: 'app.css',
  allChunks: true,
  disable: isDev,
});

module.exports = {
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: !isDev,
                modules: true,
                localIdentName: isDev
                  ? '[path]-[name]_[local]_[hash:base64:5]'
                  : '[name]-[local]-[hash:base64:6]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')]
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          }
        ]
      }
    ]
  },
  plugins: [
    extractCSS,
  ]
};

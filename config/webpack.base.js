const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(process.cwd(), 'app/index.js'),
  },
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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          }
        ]
      }
    ]
  },
};

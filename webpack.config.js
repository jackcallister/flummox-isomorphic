var path = require('path');

module.exports = {
  entry: ['./src/app.js'],

  output: {
    path: path.join(__dirname, '/build/js'),
    filename: 'app.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.(jsx|js)$/, exclude: /node_modules/, loaders: ['babel-loader?stage=1&optional=runtime'] }
    ]
  }
};

var Webpack = require('webpack');
var setup = require('./webpack-common-setup');

var config = {

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },

  // We change to normal source mapping
  devtool: 'source-map',
  entry: setup.mainPath,
  output: {
    path: setup.buildPath,
    filename: 'bundle.js',
    library: '', 
    libraryTarget: 'commonjs',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: setup.excludedPaths,
      },
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' 
      },
    ]
  },
  postcss: function () {
    return [require('autoprefixer'), require('precss')];
  },
};

module.exports = config;

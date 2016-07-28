var Webpack = require('webpack');
var setup = require('./webpack-common-setup');

var config = {

  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:' + setup.devServerPort, // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
  
    // Our application
    setup.mainPath
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },

  output: {

    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an 
    // error will occur if nothing is specified. We use the buildPath 
    // as that points to where the files will eventually be bundled
    // in production
    path: setup.buildPath,
    filename: 'bundle.js',

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/',
  },

  module: {
    // XXX: This is necessary to get rid of a webpack warning that video.js is pre-built
    noParse: [/node_modules\/video\.js/],
    preLoaders: [
      {
        test: /\.jsx?$/, 
        loader: "eslint-loader", 
        exclude: setup.excludedPaths,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: setup.excludedPaths,
      },

      {
        test: /\.s?css$/,
        // loader: 'style-loader!css-loader!postcss-loader?syntax=postcss-scss'
        loader: 'style-loader!css-loader!sass-loader',
      },

      {
        test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000',
      },
    ],
  },

  postcss: function () {
    return [require('autoprefixer'), require('precss')({import: {cachedir: '/tmp/precss-import-cache'}})];
  },

  // We have to manually add the Hot Replacement plugin when running
  // from Node
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = config;

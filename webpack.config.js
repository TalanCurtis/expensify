// where does the app entry point -> output
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename:'bundle.js'
  },
  module: {
    rules:[{
      // loaders
      // what loader we want to use.
      loader: 'babel-loader',
      // what files types we want to run it on. reg expression.
      test: /.\js$/,
      // what files or folders to exclude.
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use:[
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};


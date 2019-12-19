// where does the app entry point -> output
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
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
        use: CSSExtract.extract({
          use:[
            {
              loader:'css-loader',
              options:{
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options:{
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins:[
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};

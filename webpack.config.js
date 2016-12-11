let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin'); //separate css from js


let production = new webpack.DefinePlugin({
  'process.env': { NODE_ENV: JSON.stringify('production') }
});


module.exports = {
  entry: path.resolve(__dirname + '/src/entry.js'),
  output: {
    path: 'assets',
    filename: 'js/bundle.min.js',
    publicPath: '/assets/'
  },
  
  module: {
    loaders: [
      { 
        test: /\.scss$/i, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      

      // FONTS
      { 
        test: /.*\.(ttf|eot|woff2?|svg)(\?.*$|$)/i,
        loader: "file?name=fonts/[name]/[name].[ext]"
      },

      // HTML
      { 
        test: /\.html$/i,
        loader: "html"
      },


       // IMG
      { 
        test: /.*\.(gif|png|jpg)$/i, 
        loader: "file?name=img/[name].[ext]"
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles/bundle.min.css'),
    new webpack.optimize.UglifyJsPlugin()
  ]
};






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
    filename: 'bundle.min.js',
    publicPath: '/assets/'
  },
  
  module: {
    loaders: [
      { 
        test: /\.scss$/i, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      
      // IMG
      { 
        test: /.*\.(gif|png|jpe?g|svg)$/i, 
        loaders: [
          "file?name=img/[name].[ext]",
          "image-webpack?optimizationLevel=7&progressive=true"
        ]
      },

      // FONTS
      { 
        test: /.*\.(ttf|eot|woff2?|svg)(\?.*$|$)/i,
        loader: "file?name=fonts/[name]/[name].[ext]"
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.min.css'),
    new webpack.optimize.UglifyJsPlugin()
  ]
};






var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]" }
    ]
  }
};

// var path = require('path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   module: {
//     rules: [{
//       test: /\.css$/,
//       fallback: 'style-loader',
//       use: 'css-loader'
//     }]
//   },
//   module: {
//     loaders: [
//       // the url-loader uses DataUrls. 
//       // the file-loader emits files. 
//       { test: /\.less$/, loader: ExtractTextPlugin.extract({ fallback: 'style', use: 'css?module&localIdentName=[hash:base64:5]!postcss!less' }) },
//       { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
//       { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
//       { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
//       { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
//     ]
//   }
// };
const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const vendors = [
  'react',
  'react-dom',
  'react-router'
];

module.exports = {
  output: {
    path:path.join(__dirname, 'dist/lib'),
    filename: 'require.lib.js',
    library: 'require',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: 'require',
      context: __dirname,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // new UglifyJsPlugin({
    //     uglifyOptions: {
    //         warnings: false
    //     }
    // }),
    new CleanPlugin('dist')
  ],
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
plugins:[
    new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
    }),
    ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      buffer: false,
      crypto: false,
      events: false,
      path: false,
      stream: require.resolve("stream-browserify"),
      string_decoder: false,
    },
  },
};
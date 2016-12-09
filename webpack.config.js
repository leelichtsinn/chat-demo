module.exports = {
  entry: './client.jsx',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        text: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
};

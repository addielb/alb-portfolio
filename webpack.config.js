const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'dist'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    static: 'dist',
    watchContentBase: true,
  },
};
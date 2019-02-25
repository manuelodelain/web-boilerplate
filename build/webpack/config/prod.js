const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../../../dev/js/main.js'),
  output: {
    filename: 'scripts.js',
    // publicPath: path.resolve(__dirname, '../../../web/'),
    path: path.resolve(__dirname, '../../../web/assets/js/')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../css/'
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};
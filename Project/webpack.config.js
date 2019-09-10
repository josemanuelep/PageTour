
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'foo.bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/login.html'
        })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            { loader: 'style-loader', options: { injectType: 'styleTag' } },
            'css-loader',
          ],
        },
      ],
    },
  };
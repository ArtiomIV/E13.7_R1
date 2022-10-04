const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
      hot: true
    },
    plugins: [
      new HtmlWebpackPlugin({
    title: 'Development',
      }),
    ],
    output: {
      filename: 'main.js',
    },
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: '/node_modules',
        }
      ]
    }
};

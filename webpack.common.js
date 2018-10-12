const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    main: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'css', to: 'css/'},
      { from: 'images', to: 'images/'},
      { from: 'js', to: 'js/'},
      { from: 'asset', to: 'assets/'},
    ]),
    new HtmlWebpackPlugin({
      title: 'Micro',
      template: './view/index.ejs',
      meta: {
        viewport: 'width=1024',
        'apple-mobile-web-app-capable': 'yes',
        description: '',
        author: 'Jigang Duan'
      },
      favicon: './favicon.png',
      links: [
        '//fonts.googleapis.com/css?family=Open+Sans:regular,semibold,italic,italicsemibold|PT+Sans:400,700,400italic,700italic|PT+Serif:400,700,400italic,700italic',
        './css/impress-demo.css',
        {
          href: '/images/favicons/apple-touch-icon.png',
          rel: 'apple-touch-icon',
        },
      ],
      scripts: [
        './js/impress.js',
      ],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  }

};
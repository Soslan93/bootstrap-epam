const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "main.js",
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //fallback: "style-loader",
                    use: "css-loader" 
                })
                /*use: [
                    'style-loader',
                    'css-loader'
                ]*/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
          }),
        new CopyWebpackPlugin(
          [
            {
              from: path.resolve(__dirname, 'assets'),
              to: path.resolve(__dirname, 'dist/assets/')
            },
          ]),
        new ImageminPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i,
          pngquant: {
            quality: '95-100'
          }
        })
    ]
}

module.exports = config;
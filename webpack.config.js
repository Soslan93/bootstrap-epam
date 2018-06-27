let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        new ExtractTextPlugin("styles.css")
    ]
}

module.exports = config;
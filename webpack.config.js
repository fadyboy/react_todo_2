var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        
    },
    module: {
        rules:[
            {test: /\.(jsx?)$/, use: 'babel-loader'},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: './src/js/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: './assets/js/app.js'
    },
    devServer: {
        port:8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'], 
        alias: {
            modules: __dirname + '/node_modules',
        }
    },
    plugins: [
        new ExtractTextPlugin('./assets/css/app.css', { allChunks: true }),
        new HtmlWebPackPlugin({
            template: "./src/views/index.html",
            filename: "./index.html"
        }),
        new CopyPlugin([
                { from: "./src/views/htaccess/.htaccess", to: "./"},
            ]),
    ],
    module: {
        loaders: 
        [
            {
                test: /.js[x]?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /controllers/, /core/, /models/, /services/, /public/],
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread'],
                },
            }, 
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            }, 
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loader: "file?publicPath=../../&name=assets/fonts/[hash].[ext]",
            }, 
            {   
                test: /\.htaccess$/, 
                loader: "file" 
            }
        ]
    }
}


// const path = require('path')
// const HtmlWebPackPlugin = require("html-webpack-plugin")

// module.exports = {
//     entry: './src/js/index.js',
//     output: {
//         path: path.resolve(__dirname, 'public'),
//         filename: 'bundler.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader"
//                 }
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: "./src/views/index.html",
//             filename: "./index.html"
//         })
//     ],
//     node: {
//         fs: "empty"
//       }
// }
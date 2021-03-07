const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/js/index.jsx',
        output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port:8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['.js', '.jsx'], 
        alias: {
            modules: __dirname + '/node_modules',
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        rules: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: [ "@babel/preset-env", "@babel/preset-react"],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/, 
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
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
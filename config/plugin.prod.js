'use strict';

const
    os = require('os'),
    path = require('path'),
    Webpack = require('webpack'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    CompressionWebpackPlugin = require('compression-webpack-plugin'),
    ExtractTextWepackPlugin = require('extract-text-webpack-plugin'),
    UglifyJsParallelPlugin = require('webpack-uglify-parallel'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const
    configPath = require('./config-path'),
    dllConfig = require(path.join(configPath.dllPath, 'dll-config.json'));

module.exports = [
    new Webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new Webpack.DllReferencePlugin({
        context: configPath.dllPath,
        manifest: require("../dist/dll/dll-manifest.json")
    }),
    new Webpack.optimize.MinChunkSizePlugin({
        compress: {
            warnings: false
        }
    }),
    new Webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextWepackPlugin('static/styles/[name].[chunkhash:7].css', {
        allChunks: true,
        disable: false
    }),
    new WebpackMd5Hash(),
    // new Webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     },
    //     except: ['$super', '$', 'exports', 'require']
    // }),
    new UglifyJsParallelPlugin({
        workers: os.cpus().length,
        mangle: true,
        compressor: {
            warnings: false,
            drop_console: true,
            drop_debugger:true
        },
        sourceMap: false
    }),
    new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8
    }),
    new HtmlWebpackPlugin({
        title: 'webpack 1.x',
        template: 'src/index.html',
        filename: 'index.html',
        hash: false,
        inject: 'body',
        bundleName: 'dll/' + dllConfig.dll.js,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        },
        chunks: ['app']
    })
].concat(require('./plugin'));

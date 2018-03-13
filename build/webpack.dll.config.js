'use strict';

const
    os = require('os'),
    path = require('path'),
    Webpack = require('webpack'),
    AssetsPlugin = require('assets-webpack-plugin'),
    CompressionWebpackPlugin = require('compression-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    UglifyJsParallelPlugin = require('webpack-uglify-parallel'),
    WebpackMd5Hash = require('webpack-md5-hash');

const
    configPath = require('../config/config-path');

const
    vendors = [
        'babel-polyfill',
        'axios',
        'react',
        'react-dom',
        'react-redux',
        'react-router',
        'react-router-dom',
        'redux',
        'redux-thunk'
    ];

module.exports = {
    entry: {
        dll: vendors
    },

    output: {
        path: configPath.dllPath,
        filename: '[name].[chunkhash:7].js',
        library: '[name]_[chunkhash:7]'
    },

    plugins: [
        new CleanWebpackPlugin(
            ['dist/dll/*'],
            {
                root: configPath.rootPath,
                verbose: true,
                dry: false
            }
        ),
        new WebpackMd5Hash(),
        new Webpack.DllPlugin({
            path: path.join(configPath.dllPath, '[name]-manifest.json'),
            name: '[name]_[chunkhash:7]',
            context: configPath.dllPath
        }),
        new AssetsPlugin({
            filename: 'dll-config.json',
            path: configPath.dllPath
        }),
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
          test: new RegExp('\\.(js)$'),
          threshold: 10240,
          minRatio: 0.8
        })
    ]
};

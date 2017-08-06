'use strict';

const
    Webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

const
    configPath = require('./config-path');

module.exports = [
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin(
        ['dist/static/*/*'],
        {
            root: configPath.rootPath,
            verbose: true,
            dry: false
        }
    )
];

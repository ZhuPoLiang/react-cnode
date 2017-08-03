'use strict';

const
    CleanWebpackPlugin = require('clean-webpack-plugin');

const
    configPath = require('./config-path');

module.exports = [
    new CleanWebpackPlugin(
        ['dist/static/*/*'],
        {
            root: configPath.rootPath,
            verbose: true,
            dry: false
        }
    )
];

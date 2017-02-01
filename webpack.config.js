const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            columns: false,
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname,
            },
        ],
    },
};

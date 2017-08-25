const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },
    module: {
        loaders: [
            { test: /\.hbs/, loader: 'handlebars-template-loader' }
        ]
    },
    plugins: [
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true,
        //     debug: false
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};
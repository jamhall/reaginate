var webpack = require('webpack');
var path = require('path');

var options = {
    entry: path.resolve(__dirname, 'src/reaginate'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'Reaginate',
        filename: 'reaginate.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }]
    },
    externals: [{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }, {
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    }],
    resolve: {
        extensions: ['', '.js', '.es6.js', '.jsx']
    }
};

module.exports = options;

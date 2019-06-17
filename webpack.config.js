'use strict';
const webpack = require('webpack');
module.exports = {
    optimization:{
        minimize: false,
        namedModules: true,
    },

    module:{
        rules:[
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }


};
var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app     : [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            "./src/index.tsx",
            "./src/main.scss"
        ],
        vendor  : ["react", "redux", "react-dom", "react-router", "moment", "bluebird", "lodash", "jquery"]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename    : "[name].js",
        publicPath  : '/static/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".scss"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                loaders: ["react-hot-loader/webpack", "ts-loader"]
            },
            // sass files
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
                //loader : ExtractTextPlugin.extract("style", ["css-loader?sourceMap", "sass-loader?sourceMap"])
            }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new ExtractTextPlugin("./dist/[name].css"),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./vendor.bundle.js"),
        new webpack.ProvidePlugin({
            'Promise': 'bluebird'
        })
    ]
    
};
var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app     : [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            "./src/index.tsx",
            "./src/main.scss"
        ],
        vendor  : ["react", "redux", "react-dom", "react-router", "moment", "bluebird", "lodash", "jquery", "axios"]
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
                test    : /\.tsx?$/,
                loaders : ["react-hot-loader", 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0', "ts-loader"],
                include : path.join(__dirname, 'src')
            },
            // css files
            {
                test: /\.css$/,
                loader: 'style!css' // DO NOT use sourceMap. See https://github.com/webpack/style-loader/pull/124
                //loader : ExtractTextPlugin.extract("style", ["css-loader?sourceMap"])
            },
            // sass files
            {
                test    : /\.scss$/,
                loaders : ["style", "css?sourceMap", "sass?sourceMap"],
                include : path.join(__dirname, 'src')
                //loader : ExtractTextPlugin.extract("style", ["css-loader?sourceMap", "sass-loader?sourceMap"])
            },
            // fonts
            {
                test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=./static/fonts/[name].[ext]?[hash]"
            },
            // images
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=./static/fonts/[name].[ext]"
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
        }),
        new CopyWebpackPlugin([
            { from : "./static", to : "./static"}
        ]),
        // moment locales handling
        //new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|fr/)
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]

};
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath          : config.output.publicPath,
    hot                 : true,
    historyApiFallback  : true,
    proxy : {
        "/rest/*" : "http://localhost:8080"     // proxy to tael backend
    }
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
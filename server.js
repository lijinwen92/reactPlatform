var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('./webpack.config')

var express = require('express');
var app = express();
var port = 8000

var compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    silent: true,
    publicPath: webpackConfig.output.publicPath,
}))
app.use(webpackHotMiddleware(compiler))

app.listen(port,function(error){
    if (error) {
        console.error(error)
    } else {
        console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
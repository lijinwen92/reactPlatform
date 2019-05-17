const webpack = require('webpack')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')
const express = require('express');
const app = express();
const port = 8000
const compiler = webpack(webpackConfig)

const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    silent: true,
    publicPath: webpackConfig.output.publicPath
})
app.use(middleware)
app.use(webpackHotMiddleware(compiler))

//从内存中读取文件
const fs = middleware.fileSystem;
app.get('*', (req, res) => {  //任意请求都会被重定向到内存中的 index.html
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
        if (err) {
            res.sendStatus(404);
        } else {
            res.send(file.toString());
        }
    });
});

app.listen(port,function(error){
    if (error) {
        console.error(error)
    } else {
        console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
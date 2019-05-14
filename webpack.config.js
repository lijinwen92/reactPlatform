var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",  //生成 source map
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/app.js')       //'index.js'
    ],
    //输出文件出口
    output: {
        //输出路径，在这我们要手动创建一个文件夹，名字可以自己命名，输出的文件路径是相对于本文件的路径
        path: path.resolve(__dirname, 'build'), //输出路径
        filename: '[name].js'     //输出文件名，文件可以自己定义，[name]的意思是与入口文件的文件对应，可以不用[name]，
    },
    //作用：需要下载不同别的加载器，如css，js，png等等
    module: {
        rules: [
            {
                test: /\.js$/, // Transform all .js files required somewhere with Babel
                loader: 'babel-loader', //babel加载器可以把jsx的语法转换为js的语法，也可以把es6的语法标准转换es5的语法标准
                exclude: /node_modules/,
            }
        ]
    },

    resolve: {
        //别名配置，配置之后，可以在别的js文件中直接使用require('d3')，将导入的文件作为一个模块导入到你需要的项目中，不用配置别也可会当作模块导入项目中，只是你要重复写路径而已。
        alias: {},
        extensions: [
            '.js',
            '.jsx',
            '.react.js',
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",    // 生成的html文件名称
            template: 'src/index.html',     // 以当前目录下的的 index.html 为模板来生成html
            minify: {
                removeComments: true,     // 删除 html 中的注释
                collapseWhitespace: true,   // 删除 html 中空格
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
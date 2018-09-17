const path = require('path');  //引入node的path模块
//引入webpack
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
module.exports = {
    entry : './src/main.js',                                               // 入口
    output:{                                                                // 输出
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },    
    module : {                                                              // loader
        // rules : [
        //     { 
        //         test: /\.css$/,                                             // test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
        //         use: 'css-loader'                                           // use 属性，表示进行转换时，应该使用哪个 loader。
        //     }
        // ]
    }, 
    node: {
        fs: 'empty'
    },   
    plugins : [                                                             //插件 loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
			// 模板页面路径
			template: path.join(__dirname, './src/index.html'),
			// 在内存中生成页面路径，默认值为：index.html
			filename: 'index.html',
		})
    ],
    devServer: {
    	historyApiFallback: true,
    	// 服务器的根目录 
    	port: 3000,
  	},
	 
};
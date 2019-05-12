const pkg = require('../package.json');
// 自带的库
const path = require('path')
const webpack = require('webpack');                                         // 用于访问内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const uglify = require('uglifyjs-webpack-plugin');                          // js 压缩插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin") ;
const glob = require('glob');                                               // 为检查html模板 引入node的glob对象
const PurifyCSSPlugin = require("purifycss-webpack");                       // 消除未使用的CSS
const CleanWebpackPlugin = require('clean-webpack-plugin');                 // 用于在构建前清除dist目录中的内容

module.exports = {
    entry: {                                                                // 入口文件
        main: path.resolve(__dirname,'../src/main.jsx'),      
        vendor : Object.keys(pkg.dependencies),                             // 将 第三方依赖 单独打包 打包线上依赖 --save命令安装的插件 在dependencies里
    },                                      
    output: {
        path: path.resolve(__dirname, '../dist'),                           // 必须使用绝对地址，输出文件夹
        filename: "js/[name].js",                                           // 打包后输出文件的文件名
        publicPath:'./'
    },
    resolve: {
		extensions: ['.jsx','.js', '.json','.less'],
	},
    module : {                                                              // 模块 ：例如解读css、图片转换、压缩
        rules : [															// css loader
			{
                test : /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader',],              
            },
            {
                test:/\.less$/,
                use:[MiniCssExtractPlugin.loader,"css-loader",{loader: "postcss-loader",},"less-loader"]
            },
            {                                                               // 图片处理
                test:/\.(png|jpg|gif|jpeg)/,  						        // 匹配图片文件后缀名称
                use:[{
                    loader:'url-loader', 							        // 指定使用的loader和loader的配置参数
                    options:{
                        limit:500,  									    // 把小于500B的文件打成Base64的格式，写入JS
                        outputPath:'./images/'                                // 图片存储路径
                    }
                }]
            },
            {                                                               // 处理HTML中的图片 （ html-withimg-loader ）
                test: /\.(htm|html)$/i,                                     
                 use:[ 'html-withimg-loader'] 
            },
            {																// babel 配置
				test:/\.(jsx|js)$/,
				use:{
					loader:'babel-loader',
				},
				exclude:/node_modules/
            },
            {                                                                                           // 引用字体和文件
                test: /\.(eot|ttf|woff|svg)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        outputPath:'./images/' 
                    }
                }] 
            },
		]
    },
    plugins : [                                                             // 插件 用于生产模板等各项功能
        new CleanWebpackPlugin(path.resolve(__dirname, '../dist'), {        // 用于在构建前清除dist目录中的内容
            root: path.resolve(__dirname, './'),                           // 设置root
            verbose: true
        }),
        // new uglify(),                                                       // js压缩插件
        new MiniCssExtractPlugin({
        　　filename: "css/[name].[chunkhash:8].css",
        　　 chunkFilename: "[id].css"
    　　 }),
        new HtmlWebpackPlugin({                                             // html打包
            hash:true,                                                      // 为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/index.html'                                     // 是要打包的html模版路径和文件名称。
        }),
        // new PurifyCSSPlugin({ 
        //     //这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
        //     paths: glob.sync(path.join(__dirname, 'src/*.html')),
        // }),
        
  
    ],
}
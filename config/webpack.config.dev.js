// 自带的库
const path = require('path')
const webpack = require('webpack');                                         // 用于访问内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin") ;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    entry: { main: './src/main.jsx' },                                       // 入口文件
    output: {
        path: path.resolve(__dirname, '../build'),                          // 必须使用绝对地址，输出文件夹
        filename: "[name].js"                                               // 打包后输出文件的文件名
	},
	resolve: {
		extensions: ['.jsx','.js', '.json','.less'],
	},
    module : {                                                              // 模块 ：例如解读css、图片转换、压缩
		rules : [															
			{															 
                test: /\.(css|less)$/,
                use: [
					{ loader: "style-loader" }, 
					{ loader: "css-loader" },
					{ loader: "less-loader" },
					{ loader: "postcss-loader"},
				]
            },
			{																// 图片路径
				test:/\.(png|jpg|gif|jpeg)/,  								// 匹配图片文件后缀名称
				use:[{
					loader:'url-loader', 									// 指定使用的loader和loader的配置参数
					options:{
						limit:500,  										// 把小于500B的文件打成Base64的格式，写入JS
					}
				}]
			},
			{																// babel 配置
				test:/\.(jsx|js)$/,
				use:{
					loader:'babel-loader',
				},
				exclude:/node_modules/
			}
		]
	},
    plugins : [                                                             // 插件 用于生产模板等各项功能
		new HtmlWebpackPlugin({template: './src/index.html'}),
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
		})
    ],
    devServer : {                                                           // 配置webpack开发服务功能
        contentBase : path.resolve(__dirname, '../build'),                  // 设置基本目录结构
        host : 'localhost',                                                 // 服务器的IP地址，可以使用IP也可以使用localhost
        compress : true,                                                    // 服务器端压缩是否开启
        port : 3000,                                                        // 配置服务端口 
        open : false ,
        stats: {
			// 配置有用的信息
			assets: true, 											// 添加资源信息
			builtAt: true,											// 添加构建日期和构建时间信息
			errors: true,											// 添加错误信息
			errorDetails: true,										// 添加错误的详细信息（就像解析日志一样）
			timings: true,											// 添加时间信息(编译耗时)
			colors: true,											// `webpack --colors` 等同于

			chunks: false,											// 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出） 是否有 mode_modules 输出信息
			children: false,										// 添加 children 信息,(设置为‘true’会显示详细的chunks信息)
			chunkModules: false,									// 将构建模块信息添加到 chunk 信息
			modules: false,											// 添加构建模块信息
			chunkOrigins: false,									// 添加 chunk 和 chunk merge 来源的信息
			
			// 功能性未知配置
			cached: false,											// 添加缓存（但未构建）模块的信息
			cachedAssets: false,										// 显示缓存的资源（将其设置为 `false` 则仅显示输出的文件）
			publicPath: false,										// 添加 public path 的信息

      		// 未定义选项时，stats 选项的备用值(fallback value)（优先级高于 webpack 本地默认值）
			all: undefined,
			assetsSort: "field",									// 对资源按指定的字段进行排序		你可以使用 `!field` 来反转排序。		
			chunksSort: "field",									// 按指定的字段，对 chunk 进行排序 你可以使用 `!field` 来反转排序。默认是按照 `id` 排序。
			context: "../src/",										// 用于缩短 request 的上下文目录
			modulesSort: "field",									// 按指定的字段，对模块进行排序 你可以使用 `!field` 来反转排序。默认是按照 `id` 排序。
			// maxModules: 15,											// 设置要显示的模块的最大数量

		},
		proxy: {															// 接口代理规则
			'/data/*': {
				target: 'http://www.weather.com.cn/',
				secure: false,
				changeOrigin: true
			}
		}
    }
}
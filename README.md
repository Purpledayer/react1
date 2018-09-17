# webpack4 配置文档说明
## 引入webpack模块 

```
const webpack = require('webpack');                         // 用于访问内置插件
```

### 核心(必须)
* 入口(entry)		   webpack 应该使用哪个模块，来作为构建其内部依赖图的开始
* 输出(output)		   webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件
* loader(module)    webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript)  

```
 module : {                                                 //  loader 配置
        rules : [
            { 
                test: /\.txt$/,      // test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。 
                use: 'raw-loader'    // use 属性，表示进行转换时，应该使用哪个 loader。    
            }
        ]
        
    }    
```
  
* 插件(plugins)               插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量    
  
```  
const HtmlWebpackPlugin = require('html-webpack-plugin');   // 通过 npm 安装
module.exports = {  
    mode: 'production'                                      //  模式(development 或 production)
    entry : '../src/main.jsx',                              //  入口
    output : {                                              //  输出
        path : path,                                        //  输出路径 (默认值为 ./dist)
        filename: filename,                                 //  输出文件名
    },
    module : {                                              //  loader 配置
        rules : [
            { 
                test: /\.txt$/,      // test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。 
                use: 'raw-loader'    // use 属性，表示进行转换时，应该使用哪个 loader。    
            }
        ]
    },
    plugins ; [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]   
};
```





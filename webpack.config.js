const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'[name].build.js',   //生成文件ming
        publicPath:'/dist',    //文件输出的公共路径
        path:path.resolve(__dirname,'dist'),  //打包生成围巾地址
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader'
                ]
            },
        ]
    },
}
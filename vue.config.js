'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name =  '小飞代码生成工具类' // 网页标题
 
 
module.exports = { 

    devServer: {
        port: '8081', // 设置端口号
        proxy: {
            '/api': {
                target: 'http://localhost:8080', //API服务器的地址
                ws: true, //代理websockets
                changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
                pathRewrite: {
                    // '^/api'是一个正则表达式，表示要匹配请求的url中，全部'http://localhost:8081/api' 转接为 http://localhost:8081/
                    '^/api': '',
                }
            }
        },
    },
    //设置@的作用
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')//在项目中使用@，会指定先src的目录下面
            }
        }
    },
}

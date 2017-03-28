/**
 * Created by 张瑞年 on 2017/3/27.
 */
var express = require('express');

//创建app应用 => nodejs http.createServer
var app = express();

// 配置模板
var swig = require('swig');
app.engine('html', swig.renderFile);
//设置模板存放目录
//注册使用的模板引擎
app.set('views','./views')
app.set('view engine', 'html')
app.get('/',function (req, res, next) {
    /*res.send('<h1>欢迎~~！</h1>')*/

    //读取views目录下的指定文件，解析并返回给客户端 默认index.html 可省略
    res.render('index')
});

//监听http请求
app.listen(8083);
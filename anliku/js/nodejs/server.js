/*
var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('success!\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
*/

exports.start = (function() {
    var http = require("http"),
        url  = require("url"),
        path = require("path"),
        fs   = require("fs"),
     querystring = require("querystring");

    var server = http.createServer(function (req, res) {
        res.setHeader("Access-Control-Allow-Origin","*");//允许跨域访问代码
        res.setHeader("Access-Control-Allow-Headers","Content-Type,Accept,Authorization");//允许跨域访问代码
        res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,UPDATE,DELETE");//允许跨域访问代码
        //res.setHeader('Connection', 'keep-alive');
        //res.setHeader('Expires', 'Mon, 31 Dec 2012 23:59:59 GMT');
        //res.setHeader('Cache-Control', 'max-age=31536000');
        var pathname = __dirname + url.parse(req.url).pathname;
        if(path.extname(pathname) == "") {
            pathname += "/";
        }
        /*if(pathname.charAt(pathname.length - 1) == "/") {
            pathname += "index.html";
        }*/
        fs.exists(pathname, function(exists) {
            if(exists) {
                var type = {
                    ".html": "text/html",
                    ".htm": "text/html",
                    ".js": "text/javascript",
                    ".css": "text/css",
                    ".ico": "image/x-icon",
                    ".jpeg": "image/jpeg",
                    ".jpg": "image/jpeg",
                    ".png": "image/png",
                    ".gif": "image/gif",
                    ".xml": "text/xml",
                    ".json": "application/json",
                    ".txt": "text/plain",
                    ".pdf": "application/pdf",
                    ".swf": "application/x-shockwave-flash"
                };
                res.writeHead(200, {"Content-Type": type[path.extname(pathname)]});
                var router=require("./"+url.parse(req.url).pathname);
                console.log("./"+url.parse(req.url).pathname);
                var json=require(".//router/dataBase.js");
                router.controler(req, res,querystring,json);
                /*fs.readFile(pathname, function(err, data) {
                    res.end(data);
                });*/
            } else {
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end("<h1>404 Not Found</h1>");
            }
        });
    }).listen(3000, "127.0.0.1");
    console.log("Server is running at http://localhost:3000/");
    return server;
})();




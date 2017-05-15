var emailchangecode={
    controler:function(req, res,querystring,json){
        req.setEncoding('utf-8');
        var postData = "";
        req.addListener("data", function (postDataChunk) {
            postData += postDataChunk;
        });
        req.addListener("end", function () {
            console.log('数据接收完毕');
            var params = querystring.parse(postData);
            console.log(json);
            res.end(JSON.stringify({"code":"验证码：a13d"}));//返回json
        });
    }
};
module.exports=emailchangecode;



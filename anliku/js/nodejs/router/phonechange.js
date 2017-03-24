var phonechange={
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
            if(params.code=="a13d"&&params.uid==json.uid){
                json["phone"]=params.phone;
                res.end(JSON.stringify({"msg":"手机已修改！"}));//返回json
            }else{
                res.end(JSON.stringify({"msg":"用户不存在！"}));
            }
        });
    }
};
module.exports=phonechange;



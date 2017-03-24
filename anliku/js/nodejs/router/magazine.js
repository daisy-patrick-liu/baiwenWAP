var magazine={
    controler:function(req, res,querystring,json){
        req.setEncoding('utf-8');
        var postData = "";
        req.addListener("data", function (postDataChunk) {
            postData += postDataChunk;
        });
        req.addListener("end", function () {
            console.log('数据接收完毕');
            var params = querystring.parse(postData);
            console.log(params);
            if(params.uid==json.uid){
                json["magazine"]=params.magazine;
                res.end(JSON.stringify({"msg":"修改成功！"}));
            }else{
                res.end(JSON.stringify({"msg":"修改失败，参数不全！"}))
            }
        });
    }
};
module.exports=magazine;



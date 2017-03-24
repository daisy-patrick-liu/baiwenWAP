var userChange={
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
            if(params.uid==json.uid&&params.uid!=undefined&&params.nickname!=undefined&&params.address!=undefined&&params.gender!=undefined&&params.year!=undefined&&params.month!=undefined&&params.day!=undefined&&params.job!=undefined){
                json["nickname"]=params.nickname;
                json["address"]=params.address;
                json["gender"]=params.gender;
                json["time"].year=params.year;
                json["time"].month=params.month;
                json["time"].day=params.day;
                json["job"]=params.job;
                res.end(JSON.stringify({"msg":"修改成功！"}));
            }else{
                res.end(JSON.stringify({"msg":"修改失败，参数不全！"}))
            }
        });
    }
};
module.exports=userChange;



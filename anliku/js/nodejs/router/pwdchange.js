  var pwdchange={
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
             if(params.pwd==json.pwd&&params.uid==json.uid){
                 json["pwd"]=params.newPwd;
                 res.end(JSON.stringify({"msg":"密码已修改！"}));//返回json
             }else{
                 res.end(JSON.stringify({"msg":"密码错误！"}));//返回json
             }
         });
     }
 };
 module.exports=pwdchange;

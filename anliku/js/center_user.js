$(function(){
    //页面特效js
    (function(){
        $(".edit").click(function(){//编辑点击事件
            var isCan= $(this).attr("isCan");
            changeClass(isCan,$(this));
        });
        $("#pointer").click(function(){//修改邮箱跳转按钮功能
            var isCan= $("#pointed").attr("isCan");
            changeClass(isCan,$("#pointed"));
        });
    })();
    function changeClass(isCan,ele){//样式改变函数
        (function(){//初始化关闭面板
            $(".collapse").css({"height":"0px"});
            $(".edit").attr("isCan","false").html('编辑<i class="ico"></i>');
        })();
        if(isCan==undefined){
            return;
        }
        if(isCan=="false"){
            ele.next().animate({"height":ele.next().children("div").css("height")},150,function(){
                ele.attr("isCan","true").html('收起<i class="ico icochange"></i>');
            });
        }else{
            ele.next().animate({"height":"0px"},150,function(){ele.attr("isCan","false").html('编辑<i class="ico"></i>');
            });
        }
    };

    (function(){//日期联动代码
        //生日三级联动
        var date=new Date();
        var year=date.getFullYear();
        for(i=year;i>=year-150;i--){
            $("#year").append("<option>"+i+"年</option>");
        }
        for(i=1;i<=12;i++){
            $("#month").append("<option>"+i+"月</option>");
        }

        $("#year").change(function(){//选取年
            var myyea=$("#year option:selected").val();
            var yeanum=Number(myyea.replace("年",""));
            if(yeanum%4==0&&yeanum%100!=0||yeanum%400==0){
                if($("#month option:selected").index()==2){
                    $("#day").empty();
                    $("#day").append("<option>请选择</option>");
                    for(i=1;i<=29;i++){
                        $("#day").append("<option>"+i+"日</option>");
                    }
                }
            }else{
                if($("#month option:selected").index()==2){
                    $("#day").empty();
                    $("#day").append("<option>请选择</option>");
                    for(i=1;i<=28;i++){
                        $("#day").append("<option>"+i+"日</option>");
                    }
                }
            }
        });

        $("#month").change(function(){//选取月
            var l=$("#month option:selected").index();
            if(l==1||l==3||l==5||l==7||l==8||l==10||l==12){
                $("#day").empty();
                $("#day").append("<option>请选择</option>");
                for(i=1;i<=31;i++){
                    $("#day").append("<option>"+i+"日</option>");
                }
            }else if(l==2){
                var myyea=$("#year option:selected").val();
                var yeanum=Number(myyea.replace("年",""));
                if(yeanum%4==0&&yeanum%100!=0||yeanum%400==0){
                    $("#day").empty();
                    $("#day").append("<option>请选择</option>");
                    for(i=1;i<=29;i++){
                        $("#day").append("<option>"+i+"日</option>");
                    }
                }else{
                    $("#day").empty();
                    $("#day").append("<option>请选择</option>");
                    for(i=1;i<=28;i++){
                        $("#day").append("<option>"+i+"日</option>");
                    }
                }
            }else{
                $("#day").empty();
                $("#day").append("<option>请选择</option>");
                for(i=1;i<=30;i++){
                    $("#day").append("<option>"+i+"日</option>");
                }
            }
        });
    })();

    //交互部分
    var myAlert= new popHandler();//实例化弹框对象
    $.post("http://127.0.0.1:3000/router/databack.js",{uid:"1"},function(data){//初始化调用数据回显接口
        (function imgload(url){//回显用户头像
            $(".user-pic,.pic-wrap,#userImg").find("img").attr("src",url);
        })(data["userImg"]);
        (function(){//个人资料部分回显
            $("#nickname").val(data["nickname"]);
            $("#address").val(data["address"]);
            $("#user_d label").text(data["user"]);
            $("#job").val(data["job"]);
            if(data["gender"]=="男"){
                $("#gender1")[0].checked=true;
                $("#gender2")[0].checked=false;
            }else{
                $("#gender1")[0].checked=false;
                $("#gender2")[0].checked=true;
            }
            $.each($("#year option"),function(n,ele){//遍历回显年
                if($(ele).text()==data["time"].year){
                    $(ele).attr("selected","selected");
                    return;
                }
            });
            $.each($("#month option"),function(n,ele){//遍历回显月
                if($(ele).text()==data["time"].month){
                    $(ele).attr("selected","selected");
                    return;
                }
                var l=data["time"].month;
                if(l=="1月"||l=="3月"||l=="5月"||l=="7月"||l=="8月"||l=="10月"||l=="12月"){
                    $("#day").empty();
                    $("#day").append("<option>请选择</option>");
                    for(i=1;i<=31;i++){
                        $("#day").append("<option>"+i+"日</option>");
                    }
                }else if(l=="2月"){
                    $("#day").empty();
                    $("#day").append("<option>请选择</option>");
                    for(i=1;i<=29;i++){
                        $("#day").append("<option>"+i+"日</option>");
                    }
                }else{
                    $("#day").empty();
                    $("#day").append("<option>请选择</option>");
                    for(i=1;i<=30;i++){
                        $("#day").append("<option>"+i+"日</option>");
                    }
                }
                $.each($("#day option"),function(n,ele){
                    if($(ele).text()==data["time"].year){
                        $(ele).attr("selected","selected");
                        return;
                    }
                });

            });
            $.each($("#day option"),function(n,ele){//遍历回显日
                if($(ele).text()==data["time"].day){
                    $(ele).attr("selected","selected");
                    return;
                }
            });
        })();
        (function(){//邮箱验证处回显
            $("#checkemail,#checkemail2").val(data["user"]);
        })();
        (function(){//绑定手机号回显
            $("#phoneB").text(data["phone"]);
            $("#phoneB2").val(data["phone"]);
        })();
        (function(){//杂志回显
            $("#userE").text(data["user"]);
            if(data["magazine"]=="true"){
                $("#checkboxM").attr("checked",true);
                $("#magz").text("已订阅中国政务大数据报告");
            }else{
                $("#checkboxM").attr("checked",false);
                $("#magz").text("未订阅杂志");
            }
        })();
    },"json");

    $("#sendImg").change(function(){//图片选取上传及预览
        var myurl=(function getObjectURL(file) {
            var url = null;
            if (window.createObjectURL != undefined) {
                url = window.createObjectURL(file)
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file)
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file)
            }
            return url
        })($(this)[0].files[0]);
        $(this).parents("#userImg").find("img").attr("src",myurl);
        domtoimage.toPng($(this).parents("#userImg").find("img")[0])
            .then(function (dataUrl) {
                $.post("http://127.0.0.1:3000/router/imgchange.js",{uid:"1",userImg:dataUrl},function(data){
                    $(".user-pic,.pic-wrap,#userImg").find("img").attr("src",dataUrl);
                    myAlert.showAlert(data["msg"]);
                },"json");
            });
    });

    $("#sub").click(function(){//修改个人资料
            nickname=$("#nickname").val(),
            address=$("#address").val(),
            year=$("#year option:selected").val(),
            month=$("#month option:selected").val(),
            day=$("#day option:selected").val(),
            job=$("#job").val(),
            gender=$("#gender input:radio[name='gender']:checked").next().text();
        if(nickname==""){
            myAlert.showAlert("昵称不能为空！");
            return false;
        }
        if(address==""){
            myAlert.showAlert("所在城市不能为空！");
            return false;
        }
        if(job==""){
            myAlert.showAlert("职业不能为空！");
            return false;
        }
        $.post("http://127.0.0.1:3000/router/userChange.js",{uid:"1",nickname:nickname,address:address,gender:gender,year:year,month:month,day:day,job:job},function(data){
            myAlert.showAlert(data["msg"]);
        },"json")
    });

    $("#checkemail2").focus(function(){//获取光标特效
        $("#myF2 p").stop().animate({"height":"0px"},100);
    });
    $("#emailCode").click(function(){//修改邮箱验证码
        var user=$("#checkemail2").val();
        if(isEmail(user)){
            $.post("http://127.0.0.1:3000/router/emailchangecode.js",{user:user},function(data){
                myAlert.showAlert(data["code"]);
            },"json")
        }else{
            $("#myF2 p").animate({"height":"16px"},100);
        }
    });
    $("#sub1").click(function(){//修改邮箱
        var user=$("#checkemail2").val();
        var code=$("#emailCode").prev().val();
        if(isEmail(user)){
            $.post("http://127.0.0.1:3000/router/emailchange.js",{uid:"1",user:user,code:code},function(data){
                $("#checkemail,#checkemail2").val(user);
                $("#user_d label").text(user);
                myAlert.showAlert(data["msg"]);
            },"json")
        }else{
            $("#myF2 p").animate({"height":"16px"},100);
        }
    });

    $("#phoneB2").focus(function(){
        $("#myF3 p").stop().animate({"height":"0px"},100);
    });
    $("#phoneCode").click(function(){//修改绑定手机证码
        var phone=$("#phoneB2").val();
        if(checkMobile(phone)){
            $.post("http://127.0.0.1:3000/router/phonecode.js",{phone:phone},function(data){
                myAlert.showAlert(data["code"]);
            },"json");
        }else{
            $("#myF3 p").animate({"height":"16px"},100);
        }
    });

    $("#sub2").click(function(){//修改手机号
        var phone=$("#phoneB2").val();
        var code=$("#phoneCode").prev().val();
        if(checkMobile(phone)){
            $.post("http://127.0.0.1:3000/router/phonechange.js",{uid:"1",phone:phone,code:code},function(data){
                $("#phoneB").text(phone);
                myAlert.showAlert(data["msg"]);
            },"json")
        }else{
            $("#myF3 p").animate({"height":"16px"},100);
        }
    });

    $("#pwd1").focus(function(){//获取光标特效
        $("#myF4 p").animate({"height":"0px"},100);
    });
    $("#pwd1").blur(function () {//失去光标验证原始密码
        var pwd=$(this).val();
        $.post("http://127.0.0.1:3000/router/pwdcheck.js",{uid:"1",pwd:pwd},function(data){
            if(data["msg"]=="密码正确！"){

            }else{
                $("#myF4 p").animate({"height":"16px"},100);
            }
        },"json");
    });
    $("#sub3").click(function(){//修改密码
        var pwd=$("#pwd1").val();
        var pwd2=$("#pwd2").val();
        var newPwd=$("#pwd3").val();
        if(pwd!=''&&pwd2!=''&&newPwd!=''){
            $.post("http://127.0.0.1:3000/router/pwdchange.js",{uid:"1",pwd:pwd,newPwd:newPwd},function(data){
                myAlert.showAlert(data["msg"]);
            },"json");
        }else if(pwd2!=newPwd){
            myAlert.showAlert("密码输入不一致！");
        }else{
            myAlert.showAlert("密码不能为空！");
        }
    });

    $("#Msave").click(function(){//杂志
        var user=$("#checkemail2").val(),
            magazine;
        if($("#checkboxM").attr("checked")=="checked"){
            magazine="true";
        }else{
            magazine="false";
        }
        $.post("http://127.0.0.1:3000/router/magazine.js",{uid:"1",magazine:magazine},function(data){
            myAlert.showAlert(data["msg"]);
        },"json")
    });
});

function isEmail(str){//邮箱认证
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
}
function checkMobile(sMobile){//手机号验证
    var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
    return reg.test(sMobile);
}
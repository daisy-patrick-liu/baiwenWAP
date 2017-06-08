//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、首页通用案例库部分
var index=new Vue({
    el:'#index',//首页
    data:{
        /*      header:{
         text:"中国政府管理案例库"
         },*/
        searchVal:"",
        indexLists:[
            {
                bgUrl:"build/img/index1.png",
                text:"政务服务案例库",
                spText:"128,123篇",
                href:"#anliku"
            },
            {
                bgUrl:"build/img/index2.png",
                text:"政务管理案例库",
                spText:"863,59篇",
                href:"#anliku"
            },
            {
                bgUrl:"build/img/index3.png",
                text:"政务舆情案例库",
                spText:"128,123篇",
                href:"#anliku"
            },
            {
                bgUrl:"build/img/index4.png",
                text:"政府文献库",
                spText:"128,123篇",
                href:"#anliku"
            },
            {
                bgUrl:"build/img/index5.png",
                text:"党风廉政及反腐斗争案例库",
                spText:"128,123篇",
                href:"#anliku"
            },
            {
                bgUrl:"build/img/index6.png",
                text:"司法案例库",
                spText:"128,123篇",
                href:"#anliku"
            },
            {
                bgUrl:"build/img/index7.png",
                text:"中国公务员信息库",
                spText:"128,123篇",
                href:"#GWY"
            },
            {
                bgUrl:"build/img/index8.png",
                text:"政府公报库",
                spText:"128,123篇",
                href:"#anliku"
            },
            {
                bgUrl:"build/img/index9.png",
                text:"政情数据库",
                spText:"128,123篇",
                href:"#zq"
            },
            {
                bgUrl:"build/img/index10.png",
                text:"外语案例库",
                spText:"128,123篇",
                href:"#anliku"
            }
        ],
        cjk_row:{
            isLogin:true,
            email:"5435755585@qq.com"
        }
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        sendMsg:function(event){
            var ele= event.currentTarget;
            var imgurl=ele.getElementsByTagName("img")[0].getAttribute("src");
            imgurl=imgurl.substring(0,imgurl.lastIndexOf(".png"));
            imgurl=imgurl+"r.png";
            setCookie("index_bgUrl",imgurl);
            setCookie("index_text",ele.getElementsByTagName("p")[0].textContent);
            setCookie("index_spText",ele.getElementsByTagName("span")[0].textContent);
            anliku.indexList.bgUrl=getCookie("index_bgUrl");
            anliku.indexList.text=getCookie("index_text");
            anliku.indexList.spText=getCookie("index_spText");
            zq.indexList.bgUrl=getCookie("index_bgUrl");
            zq.indexList.text=getCookie("index_text");
            zq.indexList.spText=getCookie("index_spText");
            GWY.indexList.bgUrl=getCookie("index_bgUrl");
            GWY.indexList.text=getCookie("index_text");
            GWY.indexList.spText=getCookie("index_spText");
        },
        isSearch:function(){
            var val=trim(document.getElementById("searchInput").value);
            if(val!=""){
                this.searchVal="#result";
                result.searchVal=val;
            }
        },
        outU:function(){
            var el=this;
            setTimeout(function(){
                el.cjk_row.isLogin=false;
            },50);
        }
    },
    mounted:function(){
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});

var anliku=new Vue({
    el:'#anliku',
    data:{
        indexList:{
            bgUrl:null,
            text:null,
            spText:null
        },
        newLists:[
            {
                url:"",
                text:""
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        },
        getCont:function(event){
            var ele=event.currentTarget;
            setCookie("cdetail_t",ele.textContent);
            cdetail.content.title=getCookie("cdetail_t");
        }
    },
    mounted:function(){
        //滚动条监听定位
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
anliku.$watch("indexList.text",function(newVal, oldVal){//监听变化
    if(newVal!="政情数据库"&&newVal!="中国公务员信息库"){
        anliku.newLists=[//创建新列表数组
            {
                url:"#cdetail",
                text:"习近平亲密接触新媒体舆情分析"
            },
            {
                url:"#cdetail",
                text:"博鳌亚洲论坛舆情分析"
            },
            {
                url:"#cdetail",
                text:"习近平出访沙特事件舆情分析"
            },
            {
                url:"#cdetail",
                text:"北大校园人物雕塑被戴口罩舆情案例"
            }
        ];
    }

});
anliku.indexList.bgUrl=getCookie("index_bgUrl");
anliku.indexList.text=getCookie("index_text");
anliku.indexList.spText=getCookie("index_spText");

var cdetail=new Vue({
    el:'#cdetail',//详情页
    data:{
        content:{
            title:"MSCI中国指数频频走高！它与总理力推 的“新动能”是啥关系？",
            time:"2017-06-06",
            author:"欧阳小苹果",
            text:"<p>一路高歌猛进的“MSCI中国指数”刚刚创下了2015年7月以来的最高水平。而在众多投资机构看来，资本市场对中国经济“新动能”的一路高" +
            "歌猛进的“MSCI中国指数”刚刚创下了2015年7月以来的最高水平。而在众多投资机构看来，资本市场对中国经济“新动能”的</p>" +
            "<p>一路高歌猛进的“MSCI中国指数”刚刚创下了2015年7月以来的最高水平。而在众多投资机构看来，资本市场对中国经济“新动能”的</p>" +
            "<p>一路高歌猛进的“MSCI中国指数”刚刚创下了2015年7月以来的最高水平。而在众多投资机构看来，资本市场对中国经济“新动能”的一路高" +
            "歌猛进的“MSCI中国指数”刚刚创下了2015年7月以来的最高水平。而在众多投资机构看来，资本市场对中国经济“新动能”的一路高歌猛进的“MSCI" +
            "中国指数”刚刚创下了2015年7月以来的最高水平。而在众多投资机构看来，资本市场对中国经济“新动能”的</p>"
        },
        newLists:[
            {
                url:"",
                text:"习近平亲密接触新媒体舆情分析"
            },
            {
                url:"",
                text:"博鳌亚洲论坛舆情分析"
            },
            {
                url:"",
                text:"习近平出访沙特事件舆情分析"
            },
            {
                url:"",
                text:"北大校园人物雕塑被戴口罩舆情案例"
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        }
    },
    mounted:function(){
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
cdetail.$watch("content.title",function(newVal, oldVal){//监听变化

});
cdetail.content.title=getCookie("cdetail_t");
//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、首页通用案例库部分
//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、政情数据库
var zq=new Vue({
    el:'#zq',//政情数据库
    data:{
        title:"中国",
        indexList:{
            bgUrl:null,
            text:null,
            spText:null
        },
        newLists:[
            {
                url:"",
                text:""
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        },
        getTitle:function(event){
            var ele=event.currentTarget.getElementsByTagName("i")[0];
            setCookie("zqDatabase_t",ele.textContent);
            zqDatabase.title=getCookie("zqDatabase_t");
        },
        gettop:function(){
            var tt=this.title;
            setCookie("det_t",tt);
            det.title=getCookie("det_t");
        }
    },
    mounted:function(){
        //滚动条监听定位
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
zq.$watch("indexList.text",function(newVal, oldVal){//监听变化
    if(newVal=="政情数据库"){
        zq.newLists=[//创建新列表数组
            {
                url:"#zqDatabase",
                text:"中国"
            },
            {
                url:"#zqDatabase",
                text:"北京"
            },
            {
                url:"#zqDatabase",
                text:"上海"
            },
            {
                url:"#zqDatabase",
                text:"湖北省"
            }
        ];
    }
});
zq.indexList.bgUrl=getCookie("index_bgUrl");
zq.indexList.text=getCookie("index_text");
zq.indexList.spText=getCookie("index_spText");

var zqDatabase=new Vue({
    el:'#zqDatabase',
    data:{
        title:"",
        newLists:[
            {
                url:"#zqDatabase2",
                text:"武汉"
            },
            {
                url:"#zqDatabase2",
                text:"咸宁"
            },
            {
                url:"#zqDatabase2",
                text:"孝感"
            },
            {
                url:"#zqDatabase2",
                text:"黄石"
            },
            {
                url:"#zqDatabase2",
                text:"武汉"
            },
            {
                url:"#zqDatabase2",
                text:"咸宁"
            },
            {
                url:"#zqDatabase2",
                text:"孝感"
            },
            {
                url:"#zqDatabase2",
                text:"黄石"
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        },
        getText:function(event){
            var ele=event.currentTarget.getElementsByTagName("i")[0];
            var t1=this.title+" · "+ele.textContent;
            setCookie("zqDatabase2_t1",t1);
            setCookie("zqDatabase2_t2",ele.textContent);
            zqDatabase2.title=getCookie("zqDatabase2_t1");
            zqDatabase2.title2=getCookie("zqDatabase2_t2");
        },
        getTitleText:function(){
            var t2="中国 · "+this.title;
            setCookie("det_t",t2);
            det.title=getCookie("det_t");
        }
    },
    mounted:function(){
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
zqDatabase.$watch("title",function(newVal, oldVal){//监听变化

});
zqDatabase.title=getCookie("zqDatabase_t");

var zqDatabase2=new Vue({
    el:'#zqDatabase2',//详情页2
    data:{
        title:"",
        title2:"",
        newLists:[
            {
                url:"#zqDetail",
                text:"武昌区"
            },
            {
                url:"#zqDetail",
                text:"汉口区"
            },
            {
                url:"#zqDetail",
                text:"江夏区"
            },
            {
                url:"#zqDetail",
                text:"东湖高新区"
            },
            {
                url:"#zqDetail",
                text:"武昌区"
            },
            {
                url:"#zqDetail",
                text:"汉口区"
            },
            {
                url:"#zqDetail",
                text:"江夏区"
            },
            {
                url:"#zqDetail",
                text:"东湖高新区"
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        },
        getText:function(event){
            var ele=event.currentTarget.getElementsByTagName("i")[0];
            var t1="中国 · "+this.title+" · "+ele.textContent;
            setCookie("det_t",t1);
            det.title=getCookie("det_t");
        },
        getTitleText:function(){
            var t2="中国 · "+this.title;
            setCookie("det_t",t2);
            det.title=getCookie("det_t");
        }
    },
    mounted:function(){
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
zqDatabase2.$watch("title",function(newVal, oldVal){//监听变化

});
zqDatabase2.title=getCookie("zqDatabase2_t1");
zqDatabase2.title2=getCookie("zqDatabase2_t2");

var det=new Vue({
    el:'#zqDetail',//详情页2
    data:{
        title:"",
        content:{
            time:"2017-06-06",
            author:"欧阳小苹果",
            text:"<p>一路高歌猛进的“MSCI中国指数”刚刚创下了2015年7月以来的最高水平。而在众多投资机构看来，资本市场对中国经济“新动能”的一路高" +
            "歌猛进的“MSCI中国指数”刚刚创下了2015年7月以来的最高水平。而在众多投资机构看来，资本市场对中国经济“新动能”的</p>" +
            "<p>一路高歌猛进的“MSCI中国指数”刚刚创下了2015年7月以来的最高水平。而在众多投资机构看来，资本市场对中国经济“新动能”的</p>" +
            "<p>一路高歌猛进的“MSCI中国指数”刚刚创下了2015年7月以来的最高水平。而在众多投资机构看来，资本市场对中国经济“新动能”的一路高" +
            "歌猛进的“MSCI中国指数”刚刚创下了2015年7月以来的最高水平。而在众多投资机构看来，资本市场对中国经济“新动能”的一路高歌猛进的“MSCI" +
            "中国指数”刚刚创下了2015年7月以来的最高水平。而在众多投资机构看来，资本市场对中国经济“新动能”的</p>"
        }
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        }
    },
    mounted:function(){
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
det.$watch("title",function(newVal, oldVal){//监听变化

});
det.title=getCookie("det_t");
//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、政情数据库
//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、公务员信息库
var GWY=new Vue({
    el:'#GWY',
    data:{
        indexList:{
            bgUrl:null,
            text:null,
            spText:null
        },
        newLists:[
            {
                url:"",
                text:""
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        },
        getCont:function(event){
            var ele=event.currentTarget.getElementsByTagName("i")[0];
            setCookie("GWY2_t",ele.textContent);
            GWY2.title=getCookie("GWY2_t");
        }
    },
    mounted:function(){
        //滚动条监听定位
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
GWY.$watch("indexList.text",function(newVal, oldVal){//监听变化
    if(newVal=="中国公务员信息库"){
        GWY.newLists=[//创建新列表数组
            {
                url:"#GWY2",
                text:"中共中央"
            },
            {
                url:"#GWY2",
                text:"全国人大"
            },
            {
                url:"#GWY2",
                text:"国家主席"
            },
            {
                url:"#GWY2",
                text:"国务院"
            },
            {
                url:"#GWY2",
                text:"全国政协"
            },
            {
                url:"#GWY2",
                text:"中央军委"
            },
            {
                url:"#GWY2",
                text:"最高法"
            }
        ];
    }
});
GWY.indexList.bgUrl=getCookie("index_bgUrl");
GWY.indexList.text=getCookie("index_text");
GWY.indexList.spText=getCookie("index_spText");

var GWY2=new Vue({
    el:'#GWY2',
    data:{
       title:"",
        newLists:[
            {
                url:"",
                text:"",
                job:""
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        },
        getCont:function(event){
            var ele=event.currentTarget.getElementsByTagName("i")[0];
            var t1=this.title;
            setCookie("perGWY_n",ele.textContent);
            setCookie("perGWY_title",t1);
            perGWY.person.name=getCookie("perGWY_n");
            perGWY.title=getCookie("perGWY_title");
        }
    },
    mounted:function(){
        //滚动条监听定位
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
GWY2.$watch("title",function(newVal, oldVal){//监听变化
    GWY2.newLists=[//创建新列表数组
        {
            url:"#perGWY",
            text:"习近平",
            job:"国家主席"
        },
        {
            url:"#perGWY",
            text:"李克强",
            job:"国家总理"
        },
        {
            url:"#perGWY",
            text:"张德江",
            job:"呵呵呵"
        },
        {
            url:"#perGWY",
            text:"俞正声",
            job:"呵呵呵"
        },
        {
            url:"#perGWY",
            text:"王岐山",
            job:"呵呵呵"
        },
        {
            url:"#perGWY",
            text:"马云",
            job:"呵呵呵"
        },
        {
            url:"#perGWY",
            text:"王健林",
            job:"呵呵呵"
        }
    ];
});
GWY2.title=getCookie("GWY2_t");

var perGWY=new Vue({
    el:'#perGWY',
    data:{
        title:"",
        person:{
            imgurl:"",
            name:"",
            simple:""
        },
        indexLists:[
            {
                bgUrl:"build/img/xidada1.png",
                text:"基本资料",
                spText:">",
                href:"#GWYinfo"
            },
            {
                bgUrl:"build/img/xidada2.png",
                text:"语录",
                spText:">",
                href:"#GWYyl"
            },
            {
                bgUrl:"build/img/xidada3.png",
                text:"履历",
                spText:">",
                href:"#GWYll"
            },
            {
                bgUrl:"build/img/xidada4.png",
                text:"同事",
                spText:">",
                href:""
            },
            {
                bgUrl:"build/img/xidada5.png",
                text:"会议",
                spText:">",
                href:"#GWYmeeting"
            },
            {
                bgUrl:"build/img/xidada6.png",
                text:"活动",
                spText:">",
                href:""
            },
            {
                bgUrl:"build/img/xidada7.png",
                text:"出访",
                spText:">",
                href:""
            },
            {
                bgUrl:"build/img/xidada8.png",
                text:"电话",
                spText:">",
                href:""
            },
            {
                bgUrl:"build/img/xidada9.png",
                text:"讲话",
                spText:">",
                href:""
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        },
        getCont:function(event){
            var ele=event.currentTarget.getElementsByTagName("p")[0];
            var t1=this.title+" · "+this.person.name+" · "+ele.textContent;
            setCookie("perGWY_t",t1);
            GWYmeeting.title=getCookie("perGWY_t");
            GWYinfo.title=getCookie("perGWY_t");
            GWYll.title=getCookie("perGWY_t");
            GWYyl.title=getCookie("perGWY_t");
        }
    },
    mounted:function(){
        //滚动条监听定位
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
perGWY.$watch("title",function(newVal, oldVal){//监听变化
    perGWY.person.imgurl="build/img/xidada.png";
    perGWY.person.simple="国家主席，军委主席等牛逼职业；国家主席，军委主席等牛逼职业；国家主席，军委主席等牛逼职业；国家主席，军委主席等牛逼职业；国家主席，军委主席等牛逼职业；";
});
perGWY.person.name=getCookie("perGWY_n");
perGWY.title=getCookie("perGWY_title");

var GWYmeeting=new Vue({
    el:'#GWYmeeting',
    data:{
        title:"",
        newLists:[
            {
                url:"",
                text:""
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        }
    },
    mounted:function(){
        //滚动条监听定位
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
GWYmeeting.$watch("title",function(newVal, oldVal){//监听变化
    GWYmeeting.newLists=[
        {
            url:"",
            text:"郭敬明指出互联网金融下一步发展注意事项"
        },
        {
            url:"",
            text:"郭敬明指出互联网金融下一步发展注意事项"
        },
        {
            url:"",
            text:"郭敬明指出互联网金融下一步发展注意事项"
        },
        {
            url:"",
            text:"郭敬明指出互联网金融下一步发展注意事项"
        },
        {
            url:"",
            text:"郭敬明指出互联网金融下一步发展注意事项"
        }
    ]
});
GWYmeeting.title=getCookie("perGWY_t");

var GWYinfo=new Vue({
    el:'#GWYinfo',
    data:{
        title:"",
        infoLsts:[
            {
                title:"",
                cont:""
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        }
    },
    mounted:function(){
        //滚动条监听定位
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
GWYinfo.$watch("title",function(newVal, oldVal){//监听变化
    GWYinfo.infoLsts=[
        {
            title:"姓名",
            cont:"习近平"
        },
        {
            title:"性别",
            cont:"男"
        },
        {
            title:"职位",
            cont:"主席"
        },
        {
            title:"国籍",
            cont:"中国"
        },
        {
            title:"名族",
            cont:"汉族"
        },
        {
            title:"籍贯",
            cont:"陕西富平"
        },
        {
            title:"出生日期",
            cont:"1953年6月"
        },
        {
            title:"毕业院校",
            cont:"清华大学"
        },
        {
            title:"学历学位",
            cont:"博士"
        },
        {
            title:"入党时间",
            cont:"1969年"
        },
        {
            title:"参加工作",
            cont:"1969年"
        }
    ]
});
GWYinfo.title=getCookie("perGWY_t");

var GWYll=new Vue({
    el:'#GWYll',
    data:{
        title:"",
        conts:[
            {
                time:"",
                text:""
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        }
    },
    mounted:function(){
        //滚动条监听定位
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
GWYll.$watch("title",function(newVal, oldVal){//监听变化
    GWYll.conts=[
        {
            time:"1999-2017年",
            text:"做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情"
        },
        {
            time:"1999-2017年",
            text:"做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情"
        },
        {
            time:"1999-2017年",
            text:"做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情"
        },
        {
            time:"1999-2017年",
            text:"做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情"
        }
    ]
});
GWYll.title=getCookie("perGWY_t");

var GWYyl=new Vue({
    el:'#GWYyl',
    data:{
        title:"",
        conts:[
            {
                time:"",
                text:""
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        }
    },
    mounted:function(){
        //滚动条监听定位
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
GWYyl.$watch("title",function(newVal, oldVal){//监听变化
    GWYyl.conts=[
        {
            time:"2017年《互联网大会》讲话",
            text:"做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情"
        },
        {
            time:"2017年《互联网大会》讲话",
            text:"做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情"
        },
        {
            time:"2017年《互联网大会》讲话",
            text:"做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情"
        },
        {
            time:"2017年《互联网大会》讲话",
            text:"做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情做了一些事情"
        }
    ]
});
GWYyl.title=getCookie("perGWY_t");
//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、公务员信息库
//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、搜索结果
var result=new Vue({
    el:'#result',//政情数据库
    data:{
        searchVal:null,
        searchLabs:[
            {
                text:"案例",
                isAc:"cjk_active"
            },
            {
                text:"公务员",
                isAc:"false"
            },
            {
                text:"舆情",
                isAc:"false"
            },
            {
                text:"新闻",
                isAc:"false"
            },
            {
                text:"公报",
                isAc:"false"
            }
        ],
        newLists:[
            {
                url:"",
                text:""
            }
        ]
    },
    methods:{
        backTop:function(){
            $('.content').scrollTop(0);
        },
        homeFun:function(){
            window.open("index.html","_self");
        }
    },
    mounted:function(){
        //滚动条监听定位
        var myDom=$(this.$el).find(".content"),myFixed=$(this.$el).find(".cjk_fixed");
        var top=myDom.scrollTop()+window.innerHeight-100;
        myFixed.css("top",top+"px");
        myDom.on('scroll',function(){
            top=myDom.scrollTop()+window.innerHeight-100;
            myFixed.css("top",top+"px");
        });
    }
});
result.$watch("searchVal",function(newVal, oldVal){//监听变化
    result.newLists=[//创建新列表数组
        {
            url:"",
            text:"中国"
        },
        {
            url:"",
            text:"北京"
        },
        {
            url:"",
            text:"上海"
        },
        {
            url:"",
            text:"湖北省"
        }
    ];
});
//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、搜索结果


function trim(str){ //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
//创建cookies函数
function setCookie(c_name,value,expiredays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/";
}
//获取cookies函数
function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}
//删除cookies
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/";
}

(function(){//sui弹框popup部分js
    var sendHref='';
    $(document).on('touchend','.create-cjk_regist', function () {
        var popupHTML = '<div class="popup popup-cjk_regist" id="regist">\
        <div class="cjk_form">\
        <div class="cjk_rT">\
        <span>注册</span>\
        <a href="#" class="close-popup"></a>\
        </div>\
        <input type="text" placeholder="电子邮箱/手机号" class="cjk_Ruser"/>\
        <input type="text" placeholder="密码" class="cjk_Rpwd"/>\
        <input type="text" placeholder="重复密码" class="cjk_Rpwd2"/>\
        <button>立即注册</button>\
        </div>\
        <p class="cjk_link">\
        <a href="" class="create-cjk_login">登录</a>|<a href="" class="create-cjk_back">忘记密码</a>\
        </p>\
        <footer>2017&copy;中国政府管理案例库编委会</footer>\
        </div>';
        $.popup(popupHTML);
        sendHref='create-cjk_regist';
    });
    $(document).on('touchend','.create-cjk_login', function () {
        var popupHTML = '<div class="popup popup-cjk_login" id="login">\
        <div class="cjk_form">\
        <div class="cjk_lT">\
        <span>登录</span>\
        <a href="#" class="close-popup"></a>\
        </div>\
        <input type="text" placeholder="电子邮箱/手机号" class="cjk_luser"/>\
        <input type="text" placeholder="密码" class="cjk_lpwd"/>\
        <button>立即登录</button>\
        </div>\
        <p class="cjk_link">\
        <a href="" class="create-cjk_regist">注册账号</a>|<a href="" class="create-cjk_back">忘记密码</a>\
        </p>\
        <footer>2017&copy;中国政府管理案例库编委会</footer>\
        </div>';
        $.popup(popupHTML);
        sendHref='create-cjk_login';
    });
    $(document).on('touchend','.create-cjk_back', function () {
        var popupHTML = '<div class="popup popup-cjk_back" id="cjk_backpwd">\
        <div class="cjk_form">\
        <div class="cjk_BT1">\
        <span>找回密码</span>\
        <a href="#" class="close-popup"></a>\
        </div>\
        <input type="text" placeholder="电子邮箱/手机号" class="cjk_Buser"/>\
        <button class="create-cjk_code">获取验证码</button>\
        </div>\
        <p class="cjk_b">\
        <a href="" class="'+sendHref+'">返回上一步</a>\
        </p>\
        <footer>2017&copy;中国政府管理案例库编委会</footer>\
        </div>';
        $.popup(popupHTML);
    });
    $(document).on('touchend','.create-cjk_code', function () {
        var popupHTML = '<div class="popup popup-cjk_code" id="cjk_code">\
        <div class="cjk_form">\
        <div class="cjk_code">\
        <span>找回密码</span>\
        <a href="#" class="close-popup"></a>\
        </div>\
        <input type="text" placeholder="输入验证码" class="cjk_codeInput"/>\
        <button>验证</button>\
        </div>\
        <p class="cjk_retime">\
        <span>重新获取验证码<i>(60s)</i></span>\
        </p>\
        <footer>2017&copy;中国政府管理案例库编委会</footer>\
        </div>';
        $.popup(popupHTML);
    });
    $(document).on('touchend','.create-cjk_money', function () {
        var popupHTML = '<div class="popup popup-cjk_money" id="cjk_money">\
        <div class="cjk_money">\
        <div class="cjk_mc">\
        <span>充值</span>\
        <a href="#" class="close-popup"></a>\
        </div>\
        <span class="cjk_choose cjk_active">1个月  ￥100.00</span>\
        <span class="cjk_choose">3个月  ￥600.00</span>\
        <span class="cjk_choose">6个月  ￥1380.00</span>\
        <span class="cjk_choose">12个月  ￥3680.00</span>\
        <a href="" class="cjk_ZFB">支付宝充值</a>\
        <a href="" class="close-popup cjk_Ind">返回首页</a>\
        </div>\
        <footer>2017&copy;中国政府管理案例库编委会</footer>\
        </div>';
        $.popup(popupHTML);
    });
})();
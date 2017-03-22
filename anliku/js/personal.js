$(function(){
    $.extend({
        top:function(){//返回顶部--liu add
            $("body,html").animate({scrollTop:0},300);
        },
        showCharts:{//封装echarts弹框于此对象
            pro:{//定义弹框元素属性css
                option:{
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['0','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[120, 132, 101, 134, 90, 230, 210,230,90,134,101,132,120,100]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[220, 182, 191, 234, 290, 330, 310,330,290,234,191,182,220,200]
                        }
                    ]
                },
                modelcss:{
                    "position":"fixed",
                    "top":"0px",
                    "left":"0px",
                    "width":"100%",
                    "height":"100%",
                    "background":"rgba(0,0,0,0.5)",
                    "z-index":"999999"
                },
                echartscss:{
                    "width":"762px",
                    "height":"535px",
                    "background":"white",
                    "margin":"0 auto",
                    "border-radius":"10px",
                    "margin-top":"100px",
                    "padding":"24px"
                },
                toppcss:{
                    "color":"black",
                    "font-size":"16px",
                    "overflow":"hidden"
                },
                topacss:{
                    "display":"block",
                    "width":"25px",
                    "height":"25px",
                    "float":"right",
                    "background":"url('style/images/e_shut.png')",
                    "background-size":"25px 25px"
                },
                topscss:{
                    "color":"rgb(120,120,120)",
                    "font-size":"14px"
                },
                e_maincss:{
                    "width":"100%",
                    "height":"500px"
                }
            },
            alertF:function(){//定义弹框生成函数
                $("body").append("<div id='model'><div id='echarts'><p>本文热度趋势<a href='javascript:void(0)' onclick='$.showCharts.shutF(this)'></a></p><small>本文累计下载量2358万次，在三月份达到下载高峰</small><div id='e_main'></div></div></div>");
                $("#model").css($.showCharts.pro.modelcss);
                $("#echarts").css($.showCharts.pro.echartscss);
                $("#echarts p").css($.showCharts.pro.toppcss);
                $("#echarts a").css($.showCharts.pro.topacss);
                $("#echarts small").css($.showCharts.pro.topscss);
                echarts.init($("#e_main").css($.showCharts.pro.e_maincss)[0]).setOption($.showCharts.pro.option);
            },
            shutF:function(ele){//定义弹框关闭函数
                $(ele).parents("#model").remove();
            }
        }
    })
});

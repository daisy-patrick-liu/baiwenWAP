$(function(){
    var mychart,mychart2
    (function(){//初始化
        $("#mapC").css({
            "width":"600px",
            "height":"600px"
        });
        mychart= echarts.init($("#mapC")[0]);
        mychart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            series: [{
                name: '中国',
                type: 'map',
                mapType: 'china',
                selectedMode: 'single',
                backgroundColor:'red',
                label: {
                    normal: {
                        show: true,
                        textStyle:{
                            color:"rgb(241,60,60)"
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle:{
                            color:"white"
                        }
                    }
                },
                itemStyle:{
                    normal: {
                        areaColor:"rgb(251,201,202)",
                        borderColor:"white",
                        borderWidth:2
                    },
                    emphasis: {
                        areaColor:"rgb(252,86,72)",
                        color:"white"
                    }
                },
                data:[
                    {
                        name:"湖北",
                        selected:true
                    }
                ]
            }]
        });
        $("#cSpan").text("(您已选择湖北省)");
        //下面省
        $("#mapP").css({
            "width":"451px",
            "height":"600px"
        });
        mychart2=echarts.init($("#mapP")[0]);
        mychart2.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            series: [{
                name: '湖北',
                type: 'map',
                mapType: '湖北',
                selectedMode: 'single',
                label: {
                    normal: {
                        show: true,
                        textStyle:{
                            color:"rgb(241,60,60)"
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle:{
                            color:"white"
                        }
                    }
                },
                itemStyle:{
                    normal: {
                        areaColor:"rgb(251,201,202)",
                        borderColor:"white",
                        borderWidth:2
                    },
                    emphasis: {
                        areaColor:"rgb(252,86,72)",
                        color:"white"
                    }
                },
                data:[
            {
                name:"武汉市",
                selected:true
            }
        ]
            }]
        });
        $("#pSpan").text("(您已选择武汉市）");
    })();

    mychart.on("mapselectchanged",function(param){
        $("#cSpan").text("(您已选择"+param.name+"省)");
        $("#mapP").empty();
        var mychart3=echarts.init($("#mapP")[0]);
        mychart3.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            series: [{
                name: param.name,
                type: 'map',
                mapType: param.name,
                selectedMode: 'single',
                label: {
                    normal: {
                        show: true,
                        textStyle:{
                            color:"rgb(241,60,60)"
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle:{
                            color:"white"
                        }
                    }
                },
                itemStyle:{
                    normal: {
                        areaColor:"rgb(251,201,202)",
                        borderColor:"white",
                        borderWidth:2
                    },
                    emphasis: {
                        areaColor:"rgb(252,86,72)",
                        color:"white"
                    }
                }
            }]
        });
        $("#pSpan").text("(点击地图选择市区)");
        mychart3.on("mapselectchanged",function(param){
            $("#pSpan").text("(您已选择"+param.name+")");
        });
    });
    mychart2.on("mapselectchanged",function(param){
        $("#pSpan").text("(您已选择"+param.name+")");
    });
});

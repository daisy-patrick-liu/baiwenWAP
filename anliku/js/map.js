$(function(){
    $("#mapC").css({
        "width":"600px",
        "height":"600px"
    });
    var mychart= echarts.init($("#mapC")[0]);
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
            }
        }]
    });
    mychart.on("mapselectchanged",function(param){
        $("#cSpan").text("(您已选择"+param.name+"省)");
    });


    $("#mapP").css({
        "width":"451px",
        "height":"600px"
    });
    var mychart2=echarts.init($("#mapP")[0]);
    mychart2.setOption({
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        series: [{
            name: '湖北',
            type: 'map',
            mapType: 'hubei',
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
    mychart2.on("mapselectchanged",function(param){
        $("#pSpan").text("(您已选择"+param.name+")");
    });
});

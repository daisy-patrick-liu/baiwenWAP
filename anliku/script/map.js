$(function() {
  // 基于准备好的dom，初始化echarts图表
  var myChart = echarts.init(document.getElementById('main')); 

  var option = {
      tooltip : {
          trigger: 'item'
      },
      toolbox: {
          show : true,
          orient: 'vertical',
          x:'right',
          y:'center',
          feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false}
          }
      },
      series : [
          {
              tooltip: {
                  trigger: 'item',
                  formatter: '{b}'
              },
              name: '选择器',
              type: 'map',
              mapType: 'china',
              mapLocation: {
                  x: 'left',
                  y: 'top',
                  width: '50%'
              },
              roam: true,
              selectedMode : 'single',
              itemStyle:{
                  //normal:{label:{show:true}},
                  emphasis:{label:{show:true}}
              },
              data:[]
          }
      ],
      animation: false
  };

  // 请求省动态数据
  var provinces;
  $.ajax({
    url:"data/province.json",
    async:false,
    type:"get",
    //dataType:"json",
    success: function(result){
      if (result) {
        provinces = result;
        option.series[0].data = result;
        myChart.setOption(option); 
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert(XMLHttpRequest.status);
          alert(XMLHttpRequest.readyState);
          alert(textStatus);
        }
  });
  // 请求市动态数据
  var cities;
  $.ajax({
    url:"data/shi.json",
    async:false,
    type:"GET",
    //dataType:"json",
    success: function(result){
      if (result) {
        //option.series[1].data = result;
        cities = result;
        //myChart.setOption(option); 
      }
    },
    error: function(errorMsg) {
      //console.log(errorMsg);
      alert("不好意思大爷，图表请求数据失败啦");
    }
  });

  //var ecConfig = require('echarts/config');
  // 手动选中省，弹出下级市 地图
  var ecConfig = config;
  myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param){
    console.log(param);
      var selected = param.selected;
      var selectedProvince;
      var name;
      for (var i = 0, l = option.series[0].data.length; i < l; i++) {
          name = option.series[0].data[i].name;
          option.series[0].data[i].selected = selected[name];
          if (selected[name]) {
              selectedProvince = name;
          }
      }
    //alert(selectedProvince);
      if (typeof selectedProvince == 'undefined') {
          option.series.splice(1);
          option.legend = null;
          option.dataRange = null;
          myChart.setOption(option, true);
          return;
      }
      option.series[1] = {
          name: '随机数据',
          type: 'map',
          mapType: selectedProvince,
          itemStyle:{
              normal:{label:{show:true}},
              emphasis:{label:{show:true}}
          },
          mapLocation: {
              x: 'right',
              y: 'top',
              width: '50%'
          },
          roam: true,
          data: cities
      };
      option.legend = {
          x:'right',
          data:['随机数据']
      };
      option.dataRange = {
          orient: 'horizontal',
          x: 'right',
          min: 0,
          max: 100,
          color:['orange','yellow'],
          text:['高','低'],           // 文本，默认为数值文本
          splitNumber:0
      };
      myChart.setOption(option, true);
  })

  // 获取url参数，定位省市
  function getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURI(r[2]); return null;
  }
  var p = getQueryString("p");
  if (p == null) {
    p = "湖北";
  }
  //alert(p);
  if (p) {
    // 省选中
    //console.log(provinces);
    var pnew = provinces;
    for (var i = 0; i<pnew.length; i++) {
      if (pnew[i].name == p) {
        pnew[i].selected = true;
        break;
      }
    }
    option.series[0].data = pnew;
    // 下级市显示
    option.series[1] = {
          name: '随机数据',
          type: 'map',
          mapType: p,
          itemStyle:{
              normal:{label:{show:true}},
              emphasis:{label:{show:true}}
          },
          mapLocation: {
              x: 'right',
              y: 'top',
              width: '50%'
          },
          roam: true,
          data: cities
      };
    option.legend = {
          x:'right',
          data:['随机数据']
      };
      option.dataRange = {
          orient: 'horizontal',
          x: 'right',
          min: 0,
          max: 100,
          color:['orange','yellow'],
          text:['高','低'],           // 文本，默认为数值文本
          splitNumber:0
      };
    myChart.setOption(option, true);
    // 如果传了市，定位市
    var city = getQueryString("c");
    if(city) {
      //console.log(city);
      var tipObj = {seriesIndex: 1, name: city};
      //console.log(tipObj);
      myChart.component.tooltip.showTip(tipObj);
    }
    
  }
})

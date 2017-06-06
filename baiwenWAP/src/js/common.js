$(function() {
	// 百度分享
	window._bd_share_config={

	"common":{
	"bdSnsKey":{},
	"bdText":"百问新闻",
	"bdComment":"百问新闻山山水水",
	"bdMini":"2",
	"bdPic":"http://www.bwnews.org/images/report/25/1.jpg",
	"bdStyle":"0",
	"bdSize":"32"
	},
	"share":{}
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

	// 触摸顶部图标弹出分享层
	$("header .fix_r").on("touchend", function() {
		if ($('.mask').css('display') === 'none') {
			$('.mask').show();
			//$('.sharewrap').slideDown('100');
			$(this).parent().next().addClass('bounceInDown animated');
		} else {
			$('.mask').hide();
			$('.sharewrap').removeClass('bounceInDown animated');
		}
	});
	$('.mask').on("touchend", function(e) {
		e.preventDefault();
		$(this).hide();
		$('.sharewrap').removeClass('bounceInDown animated');
	})
});

// 时间戳处理
function formatDate(time) {
    let date = new Date(time);
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate());
    return(Y+M+D);
}

function isWeiXin(){
		var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){
			return true;
		}else{
			return false;
		}
	}

    function appdownload() {
		if(isWeiXin()){		
			window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.bwnews.online";
		}
		else{
			var ua = navigator.userAgent.toLowerCase();
			if (/iphone|ipad|ipod/.test(ua)) {
				var loadDateTime = new Date();
                window.setTimeout(function() {
                    var timeOutDateTime = new Date();
                    if (timeOutDateTime - loadDateTime < 3000) {
                        window.location.href = "https://itunes.apple.com/app/id1146725552";//ios下载地址
                    } else {
                        window.close();
                    }
                },1500);
                //window.location = "://";
			} else if (/android/.test(ua)) {
				try {
					var loadDateTime = new Date();
                    //window.location = "://";
                    setTimeout(function()
					{
						var timeOutDateTime = new Date();
						if (timeOutDateTime - loadDateTime < 1100) {
							window.location.href = "http://downloadpkg.apicloud.com/app/download?path=http://7ya5up.com1.z0.glb.clouddn.com/f2edf36b94767470f382ff8914ebe4a3_d"; //android下载地址
						} else {
							window.close();
						}
                    },1000);
                } catch(e) {}
			}
		} 
    }

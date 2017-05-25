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
			$('.sharewrap').slideDown('100');
		} else {
			$('.mask').hide();
			$('.sharewrap').slideUp('100');
		}
	});
	$('.mask').on("touchend", function(e) {
		e.preventDefault();
		$(this).hide();
		$('.sharewrap').slideUp('100');
	})
});

/**
   右侧浮标相关js
*/
$(function(){
	$("#bgImg").css({
		"width":parseInt($("html").css("width"))+"px",
		"height":parseInt($("html").css("height"))+"px"
	});
   $(window).scroll(function(){
       $(".contact").css("top",$(window).scrollTop()+"px");
   }) ;
   // hover 二维码
		$(".contact .wechat").hover(function() {
			$(".qrcode").show();
		}, function() {
			$(".qrcode").hide();
		});

		// 反馈弹窗
		var modelHtml = '\
	<div class="feedback">\
		<form action="#" method="post">\
			<div class="control_group">\
				<label for="title">标题</label>\
				<input type="text" id="title" name="title">\
			</div>\
			<div class="control_group">\
				<label for="content">内容</label>\
				<textarea name="content" id="content" rows="6"></textarea>\
			</div>\
			<div class="control_group">\
				<button class="btn_ok">确认</button>\
				<button class="btn_cancle">取消</button>\
			</div>\
		</form>\
	</div>';

		$(".contact .message").live('click', function(event) {
			layer.open({
				type: 1,
				title: '反馈',
				content: modelHtml,
				area: '438px'
			});
		});
});
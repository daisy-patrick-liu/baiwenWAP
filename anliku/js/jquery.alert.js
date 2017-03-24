;'use strict';

var popHandler = function () {
	// 判断 alert Dom 是否已经渲染完毕
	this.isInit = false;

	// alert
	this._alertBox = document.createElement("div"),
	this._alertPanel = document.createElement("div"),
	this._alertTextBox = document.createElement("div"),
	this._alertButton = document.createElement("button"),
	this._alertBg = document.createElement("div");

	// confirm
	this._confirmBox = document.createElement("div"),
	this._confirmPanel = document.createElement("div"),
	this._confirmTextBox = document.createElement("div"),
	this._confirmButton1 = document.createElement("button"),
	this._confirmButton2 = document.createElement("button"),
	this._confirmBg = document.createElement("div");

	this._callback = null;

}

popHandler.prototype._init = function () {

	var _boxCss = {
			position: 'fixed',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			zIndex: '1000',
		},
		_bgCss = {
			position: 'absolute',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			zIndex: '-1',
			background: "#000",
			opacity: "0.5",
		},
		_panelCss = {
			width: "80%",
			margin: "10rem auto 0",
			background: "#fff",
			borderRadius: "0.5rem",
			textAlign: "center",
			padding: "1rem",
			transform: 'scale(0)',
			opacity: '0',
			transition: 'transform .3s linear, opacity .3s linear',
			overflow: 'hidden',
		},
		_textBoxCss = {
			width: "100%",
			lineHeight: "2rem",
			fontSize: "0.9rem",
			fontWeight: 'normal',
			color: "#000",
			textAlign: "center",
		},
		_buttonCss = {
			width: "8rem",
			height: "2rem",
			lineHeight: "2rem",
			border: "none",
			borderRadius: "5rem",
			background: "rgb(210,60,60)",
			color: "#fff",
			fontSize: "0.9rem",
			fontWeight: "normal",
			margin: "0.5rem auto 0",
		}

	// alert
	this._alertBox.className="123";
	this._alertBox.appendChild(this._alertPanel);
	this._alertBox.appendChild(this._alertBg);
	this._alertPanel.appendChild(this._alertTextBox);
	this._alertPanel.appendChild(this._alertButton);

	this._alertBox = $(this._alertBox).css(_boxCss);
	this._alertPanel = $(this._alertPanel).css(_panelCss);
	this._alertBg = $(this._alertBg).css(_bgCss);
	this._alertTextBox = $(this._alertTextBox).css(_textBoxCss);
	this._alertButton = $(this._alertButton).css(_buttonCss).text("确定");

	// confirm 
	this._confirmBox.className="456";
	this._confirmBox.appendChild(this._confirmPanel);
	this._confirmBox.appendChild(this._confirmBg);
	this._confirmPanel.appendChild(this._confirmTextBox);
	this._confirmPanel.appendChild(this._confirmButton1);
	this._confirmPanel.appendChild(this._confirmButton2);

	this._confirmBox = $(this._confirmBox).css(_boxCss);
	this._confirmPanel = $(this._confirmPanel).css(_panelCss);
	this._confirmBg = $(this._confirmBg).css(_bgCss);
	this._confirmTextBox = $(this._confirmTextBox).css(_textBoxCss);
	this._confirmButton1 = $(this._confirmButton1).css(_buttonCss).css({
		width: "5rem",
		marginRight: "1rem"
	}).text("确定");
	this._confirmButton2 = $(this._confirmButton2).css(_buttonCss).css({
		width: "5rem",
		background: "#ddd"
	}).text("取消");

	this.isInit = true;
};

// alert
popHandler.prototype.showAlert = function (text, callback) {
	if(!this.isInit)
		this._init();

	this.stopTouchMove();

	this._callback = callback;
	this._alertButton.bind("click", function() {
		this.hideAlert(this._callback);
	}.bind(this))
	
	$("body").append(this._alertBox);
	this._alertTextBox.text(text);
	this._alertBox.show();

	setTimeout(function() {
		this._alertPanel.css({
			transform: 'scale(1)',
			opacity: '1',
		})
	}.bind(this),100)
}

popHandler.prototype.hideAlert = function (callback) {
	this._alertPanel.css({
		transform: 'scale(0)',
		opacity: '0',
	})

	setTimeout(function() {
		this.defaultTouchMove();
		this._alertBox.hide();
		this._alertBox.remove();
		if("function" === typeof callback){
			callback();
		}
	}.bind(this),300)
}

// confirm
popHandler.prototype.showConfirm = function (text, callback) {
	if(!this.isInit)
		this._init();

	this.stopTouchMove();

	this._confirmButton1.bind("click", function() {
		this.hideConfirm(callback);
	}.bind(this))

	this._confirmButton2.bind("click", function() {
		this.hideConfirm(function() {
			console.log(123)
			return false;
		});
	}.bind(this))
	
	$("body").append(this._confirmBox);
	this._confirmTextBox.text(text);
	this._confirmBox.show();

	setTimeout(function() {
		this._confirmPanel.css({
			transform: 'scale(1)',
			opacity: '1',
		})
	}.bind(this),100)
}

popHandler.prototype.hideConfirm = function (callback) {
	this._confirmPanel.css({
		transform: 'scale(0)',
		opacity: '0',
	})

	setTimeout(function() {
		this.defaultTouchMove();
		this._confirmBox.hide();
		this._confirmBox.remove();
		console.log(this._confirmBox)
		if("function" === typeof callback){
			callback();
		}
	}.bind(this),300)
}

popHandler.prototype.stopTouchMove = function () {
	$("body").css("overflow","hidden");
	document.ontouchmove = function() {
		return false;
	}
}

popHandler.prototype.defaultTouchMove = function () {
	$("body").css("overflow","auto");
	document.ontouchmove = function() {
		console.log(456)
		return true;
	}
}

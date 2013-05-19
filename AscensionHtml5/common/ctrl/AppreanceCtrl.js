// 定义AppreanceCtrl类
if (typeof AppreanceCtrl == 'undefined') {
	function AppreanceCtrl() {
	}
}

var setBackground = function() {
	alert("进入AppreanceCtrl的setBackground");
};

var initClient = function() {
	$("body").css("width", document.documentElement.clientWidth);
	$("body").css("height", document.documentElement.clientHeight);
	$("#MenuPage").hide();
	$("#WelcomePage").hide();
	window.onresize = function() {
		$("body").css("width", document.documentElement.clientWidth);
		$("body").css("height", document.documentElement.clientHeight);
	}
};

AppreanceCtrl.prototype.init = function() {
	initClient();
};


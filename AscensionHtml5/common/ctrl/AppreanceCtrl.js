 // ����AppreanceCtrl��
//for test
 if (typeof AppreanceCtrl == 'undefined') {
	function AppreanceCtrl() {
	}
}

var setBackground = function() {
	alert("����AppreanceCtrl��setBackground");
};

var initClient = function() {
	$("body").css("width", document.documentElement.clientWidth);
	$("body").css("height", document.documentElement.clientHeight);
	$("#MenuPageBackgroundImg").css("width", document.documentElement.clientWidth);
	$("#MenuPage").show();
	$("#WelcomePage").hide();
	window.onresize = function() {
		$("body").css("width", document.documentElement.clientWidth);
		$("body").css("height", document.documentElement.clientHeight);
		$("#MenuPageBackgroundImg").css("width", document.documentElement.clientWidth);
	};
};

AppreanceCtrl.prototype.init = function() {
	initClient();
};


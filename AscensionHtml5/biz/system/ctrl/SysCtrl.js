/**
 * 系统模块的控制类，其中包括初始化应用的功能.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */

if (typeof SysCtrl == 'undefined') {
	function SysCtrl() {
	}
}

/**
 * 应用的入口.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
SysCtrl.prototype.init = function() {
	this.initPage();
};

/**
 * 初始化整个页面.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
SysCtrl.prototype.initPage = function() {
	// 将body的长宽赋值为可见区域的长宽以实现响应式界面.
	var screenWidth = document.documentElement.clientWidth;
	staticSsession.set("screenWidth", screenWidth);
	$("body").css("width", screenWidth);

	var screenHeight = document.documentElement.clientHeight;
	staticSsession.set("screenHeight", screenHeight);
	$("body").css("height", screenHeight);

	// 主菜单界面背景图根据实际界面长宽进行调整
	var menuPageBgScale = (staticSsession.get("screenWidth")) / (staticSsession.get("screenHeight"));
	if (menuPageBgScale > 1.778) {
		$("#MenuPageBackground").css("height", "100%");
		$("#MenuPageBackground").css("width", "auto");
	} else {
		$("#MenuPageBackground").css("width", "100%");
		$("#MenuPageBackground").css("height", "auto");
	}

	window.onresize = function() {
		var screenWidth = document.documentElement.clientWidth;
		staticSsession.set("screenWidth", screenWidth);
		$("body").css("width", screenWidth);

		var screenHeight = document.documentElement.clientHeight;
		staticSsession.set("screenHeight", screenHeight);
		$("body").css("height", screenHeight);

		var menuPageBgScale = (staticSsession.get("screenWidth")) / (staticSsession.get("screenHeight"));
		if (menuPageBgScale > 1.778) {
			$("#MenuPageBackground").css("height", "100%");
			$("#MenuPageBackground").css("width", "auto");
		} else {
			$("#MenuPageBackground").css("width", "100%");
			$("#MenuPageBackground").css("height", "auto");
		}
	};

	staticAudioHelper.initAudio();
	
	staticWelPageCtrl.unfold();
	var timeoutFun = function() {
		staticMenuPageCtrl.unfold();
	};

	setTimeout(timeoutFun, 2000);
};
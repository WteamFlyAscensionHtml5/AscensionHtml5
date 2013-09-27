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
	staticAudio.initAudio();
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
	var screenWidth = window.parent.document.documentElement.clientWidth;
	staticSsession.set("screenWidth", screenWidth);
	window.parent.$("body").css("width", screenWidth);

	var screenHeight = window.parent.document.documentElement.clientHeight;
	staticSsession.set("screenHeight", screenHeight);
	window.parent.$("body").css("height", screenHeight);

	window.parent.window.onresize = function() {
		var screenWidth = window.parent.document.documentElement.clientWidth;
		staticSsession.set("screenWidth", screenWidth);
		window.parent.$("body").css("width", screenWidth);

		var screenHeight = window.parent.document.documentElement.clientHeight;
		staticSsession.set("screenHeight", screenHeight);
		window.parent.$("body").css("height", screenHeight);
	};
	
	staticWelPageCtrl.unfold();
	var timeoutFun = function() {
		staticMenuPageCtrl.unfold();
	};

	setTimeout(timeoutFun, 2000);
};
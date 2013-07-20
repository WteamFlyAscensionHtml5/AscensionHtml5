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
	new SessionHelper().set("screenWidth", screenWidth);
	$("body").css("width", screenWidth);

	var screenHeight = document.documentElement.clientHeight;
	new SessionHelper().set("screenHeight", screenHeight);
	$("body").css("height", screenHeight);

	window.onresize = function() {
		var screenWidth = document.documentElement.clientWidth;
		new SessionHelper().set("screenWidth", screenWidth);
		$("body").css("width", screenWidth);

		var screenHeight = document.documentElement.clientHeight;
		new SessionHelper().set("screenHeight", screenHeight);
		$("body").css("height", screenHeight);
	};

	new WelPageCtrl().unfold();
	var timeoutFun = function() {
		new MenuPageCtrl().unfold();
	};
	
	setTimeout(timeoutFun, 2000);
};
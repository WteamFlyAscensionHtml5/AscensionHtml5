/**
 * ϵͳģ��Ŀ����࣬���а�����ʼ��Ӧ�õĹ���.
 * 
 * @author ���.
 * @version v0.10.
 */

if (typeof SysCtrl == 'undefined') {
	function SysCtrl() {
	}
}

/**
 * Ӧ�õ����.
 * 
 * @author ���.
 * @version v0.10.
 */
SysCtrl.prototype.init = function() {
	this.initPage();
};

/**
 * ��ʼ������ҳ��.
 * 
 * @author ���.
 * @version v0.10.
 */
SysCtrl.prototype.initPage = function() {
	// ��body�ĳ���ֵΪ�ɼ�����ĳ�����ʵ����Ӧʽ����.
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
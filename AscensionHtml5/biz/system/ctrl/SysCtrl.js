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
	staticAudio.initAudio();
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
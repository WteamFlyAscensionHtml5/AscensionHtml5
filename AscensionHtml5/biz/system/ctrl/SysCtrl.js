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

	// ���˵����汳��ͼ����ʵ�ʽ��泤����е���
	var menuPageBgScale = (new SessionHelper().get("screenWidth"))
			/ (new SessionHelper().get("screenHeight"));
	if (menuPageBgScale > 1.778) {
		$("#MenuPageBackground").css("height", "100%");
		$("#MenuPageBackground").css("width", "auto");
	} else {
		$("#MenuPageBackground").css("width", "100%");
		$("#MenuPageBackground").css("height", "auto");
	}

	window.onresize = function() {
		var screenWidth = document.documentElement.clientWidth;
		new SessionHelper().set("screenWidth", screenWidth);
		$("body").css("width", screenWidth);

		var screenHeight = document.documentElement.clientHeight;
		new SessionHelper().set("screenHeight", screenHeight);
		$("body").css("height", screenHeight);

		var menuPageBgScale = (new SessionHelper().get("screenWidth"))
				/ (new SessionHelper().get("screenHeight"));
		if (menuPageBgScale > 1.778) {
			$("#MenuPageBackground").css("height", "100%");
			$("#MenuPageBackground").css("width", "auto");
		} else {
			$("#MenuPageBackground").css("width", "100%");
			$("#MenuPageBackground").css("height", "auto");
		}
	};

	new WelPageCtrl().unfold();
	var timeoutFun = function() {
		new MenuPageCtrl().unfold();
	};

	setTimeout(timeoutFun, 2000);
};
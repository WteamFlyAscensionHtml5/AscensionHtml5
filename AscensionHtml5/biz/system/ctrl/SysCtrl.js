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
	StateSsession.set("screenWidth", screenWidth);
	$("body").css("width", screenWidth);

	var screenHeight = document.documentElement.clientHeight;
	StateSsession.set("screenHeight", screenHeight);
	$("body").css("height", screenHeight);

	// ���˵����汳��ͼ����ʵ�ʽ��泤����е���
	var menuPageBgScale = (StateSsession.get("screenWidth")) / (StateSsession.get("screenHeight"));
	if (menuPageBgScale > 1.778) {
		$("#MenuPageBackground").css("height", "100%");
		$("#MenuPageBackground").css("width", "auto");
	} else {
		$("#MenuPageBackground").css("width", "100%");
		$("#MenuPageBackground").css("height", "auto");
	}

	window.onresize = function() {
		var screenWidth = document.documentElement.clientWidth;
		StateSsession.set("screenWidth", screenWidth);
		$("body").css("width", screenWidth);

		var screenHeight = document.documentElement.clientHeight;
		StateSsession.set("screenHeight", screenHeight);
		$("body").css("height", screenHeight);

		var menuPageBgScale = (StateSsession.get("screenWidth")) / (StateSsession.get("screenHeight"));
		if (menuPageBgScale > 1.778) {
			$("#MenuPageBackground").css("height", "100%");
			$("#MenuPageBackground").css("width", "auto");
		} else {
			$("#MenuPageBackground").css("width", "100%");
			$("#MenuPageBackground").css("height", "auto");
		}
	};

	StateWelPageCtrl.unfold();
	var timeoutFun = function() {
		StateMenuPageCtrl.unfold();
	};

	setTimeout(timeoutFun, 2000);
};
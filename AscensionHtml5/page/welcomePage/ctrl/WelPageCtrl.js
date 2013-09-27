/**
 * ��ӭ�����ҳ���߼�������.
 * 
 * @author ���.
 * @version v0.10.
 */

if (typeof WelPageCtrl == 'undefined') {
	function WelPageCtrl() {
	}
}

/**
 * չ����ӭ����.
 * 
 * @author ���.
 * @version v0.10.
 */
WelPageCtrl.prototype.unfold = function() {
	var indexPage = staticSsession.get("indexPage");
	var callBackUnfold = function() {
		var funSet = [];
		// ��������Ϊ�ɼ�
		var open = function(callbackFun) {
			staticPage.openPage("welcomePage");
			if (callbackFun != null) {
				callbackFun();
			}
		};
		funSet.push(open);
		// �������
		funSet.push(staticWelPageJs.fadeInWel);
		staticPage.animation(funSet);
	};
	
	if (indexPage == "MenuPage") {
//		staticMenuPageJs.fold(callBackUnfold);
	} else if (indexPage == "WelcomePage") {
		var funSet = [];
		// ����LOGO
		funSet.push(staticWelPageJs.fadeOutLogo);
		// ��������
		funSet.push(staticWelPageJs.fadeOutBackground);
		// ��������Ϊ���ɼ�
		var close = function(callbackFun) {
			staticPage.closePage("welcomePage");
			if (callbackFun != null) {
				callbackFun();
			}
		};
		funSet.push(close);
		funSet.push(callBackUnfold);
		staticPage.animation(funSet);
	} else {
		callBackUnfold();
	}
	
	staticSsession.set("indexPage", "WelcomePage");
};
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
		staticWelPageJs.unfold();
	};
	
	if (indexPage == "MenuPage") {
		staticMenuPageJs.fold(callBackUnfold);
	} else if (indexPage == "WelcomePage") {
		staticWelPageJs.fold(callBackUnfold);
	} else {
		callBackUnfold();
	}
	
	staticSsession.set("indexPage", "WelcomePage");
};
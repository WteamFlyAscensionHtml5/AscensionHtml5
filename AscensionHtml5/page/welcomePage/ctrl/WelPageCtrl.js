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
	var indexPage = StateSsession.get("indexPage");
	var callBackUnfold = function() {
		StateWelPageJs.unfold();
	};
	
	if (indexPage == "MenuPage") {
		StateMenuPageJs.fold(callBackUnfold);
	} else if (indexPage == "WelcomePage") {
		StateWelPageJs.fold(callBackUnfold);
	} else {
		callBackUnfold();
	}
	
	StateSsession.set("indexPage", "WelcomePage");
};
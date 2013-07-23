/**
 * ���˵������ҳ���߼�������.
 * 
 * @author ���.
 * @version v0.10.
 */

if (typeof MenuPageCtrl == 'undefined') {
	function MenuPageCtrl() {
	}
}

/**
 * չ�����˵�����.
 * 
 * @author ���.
 * @version v0.10.
 */
MenuPageCtrl.prototype.unfold = function() {
	var indexPage = StateSsession.get("indexPage");
	var callBackUnfold = function() {
		StateMenuPageJs.unfold();
	};
	
	if (indexPage == "MenuPage") {
		StateMenuPageJs.fold(callBackUnfold);
	} else if (indexPage == "WelcomePage") {
		StateWelPageJs.fold(callBackUnfold);
	} else {
		callBackUnfold();
	}
	
	StateSsession.set("indexPage", "MenuPage");
};
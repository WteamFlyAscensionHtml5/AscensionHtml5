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
	var indexPage = staticSsession.get("indexPage");
	var callBackUnfold = function() {
		staticMenuPageJs.unfold();
	};
	
	if (indexPage == "MenuPage") {
		staticMenuPageJs.fold(callBackUnfold);
	} else if (indexPage == "WelcomePage") {
		staticWelPageJs.fold(callBackUnfold);
	} else {
		callBackUnfold();
	}

	staticSsession.set("indexPage", "MenuPage");
};
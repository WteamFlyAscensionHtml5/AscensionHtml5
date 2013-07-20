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
	var indexPage = new SessionHelper().get("indexPage");
	var callBackUnfold = function() {
		new MenuPageJs().unfold();
	};
	
	if (indexPage == "MenuPage") {
		new MenuPageJs().fold(callBackUnfold);
	} else if (indexPage == "WelcomePage") {
		new WelPageJs().fold(callBackUnfold);
	} else {
		callBackUnfold();
	}
	
	new SessionHelper().set("indexPage", "MenuPage");
};
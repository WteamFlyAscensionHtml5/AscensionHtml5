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
	if (indexPage == "MenuPage") {
		new MenuPageJs().fold();
	} else if (indexPage == "WelcomePage") {
		new WelPageJs().fold();
	}
	new MenuPageJs().unfold();
	new SessionHelper().set("indexPage", "MenuPage");
};
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
	var indexPage = new SessionHelper().get("indexPage");
	if (indexPage == "MenuPage") {
		new MenuPageJs().fold();
	} else if (indexPage == "WelcomePage") {
		new WelPageJs().fold();
	}
	new WelPageJs().unfold();
	new SessionHelper().set("indexPage", "WelcomePage");
};
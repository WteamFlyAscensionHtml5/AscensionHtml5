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
	indexPage = "WelcomePage";
	if (indexPage == "MenuPage") {
		$("#MenuPage").fadeOut();
		$("#MenuPage").hide();
	} else if (indexPage == "WelcomePage") {
		new WelPageJs().fold();
	}
	
	
};
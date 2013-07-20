/**
 * 欢迎界面的页面逻辑处理类.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */

if (typeof WelPageCtrl == 'undefined') {
	function WelPageCtrl() {
	}
}

/**
 * 展开欢迎界面.
 * 
 * @author 侯骏雄.
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
/**
 * 主菜单界面的页面逻辑处理类.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */

if (typeof MenuPageCtrl == 'undefined') {
	function MenuPageCtrl() {
	}
}

/**
 * 展开主菜单界面.
 * 
 * @author 侯骏雄.
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
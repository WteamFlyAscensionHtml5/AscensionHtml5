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
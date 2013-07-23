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
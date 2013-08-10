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
	var indexPage = staticSsession.get("indexPage");
	var callBackUnfold = function() {
		staticWelPageJs.unfold();
	};
	
	if (indexPage == "MenuPage") {
		staticMenuPageJs.fold(callBackUnfold);
	} else if (indexPage == "WelcomePage") {
		staticWelPageJs.fold(callBackUnfold);
	} else {
		callBackUnfold();
	}
	
	staticSsession.set("indexPage", "WelcomePage");
};
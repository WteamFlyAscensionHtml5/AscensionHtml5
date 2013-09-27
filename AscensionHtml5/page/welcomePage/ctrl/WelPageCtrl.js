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
		var funSet = [];
		// 界面设置为可见
		var open = function(callbackFun) {
			staticPage.openPage("welcomePage");
			if (callbackFun != null) {
				callbackFun();
			}
		};
		funSet.push(open);
		// 淡入界面
		funSet.push(staticWelPageJs.fadeInWel);
		staticPage.animation(funSet);
	};
	
	if (indexPage == "MenuPage") {
//		staticMenuPageJs.fold(callBackUnfold);
	} else if (indexPage == "WelcomePage") {
		var funSet = [];
		// 淡出LOGO
		funSet.push(staticWelPageJs.fadeOutLogo);
		// 淡出背景
		funSet.push(staticWelPageJs.fadeOutBackground);
		// 界面设置为不可见
		var close = function(callbackFun) {
			staticPage.closePage("welcomePage");
			if (callbackFun != null) {
				callbackFun();
			}
		};
		funSet.push(close);
		funSet.push(callBackUnfold);
		staticPage.animation(funSet);
	} else {
		callBackUnfold();
	}
	
	staticSsession.set("indexPage", "WelcomePage");
};
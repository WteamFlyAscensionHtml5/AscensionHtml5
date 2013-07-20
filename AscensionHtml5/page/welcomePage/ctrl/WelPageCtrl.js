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
	indexPage = "WelcomePage";
	if (indexPage == "MenuPage") {
		$("#MenuPage").fadeOut();
		$("#MenuPage").hide();
	} else if (indexPage == "WelcomePage") {
		new WelPageJs().fold();
	}
	
	
};
/**
 * 欢迎界面的页面操作类.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */

if (typeof WelPageJs == 'undefined') {
	function WelPageJs() {
	}
}

/**
 * 展开欢迎界面.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
WelPageJs.prototype.fadeInWel = function(callBackFunParam) {
	$("#WelcomePage").fadeIn('slow');
	$("#WelcomePageLogo").fadeIn('slow');
	if (callBackFunParam != null) {
		callBackFunParam();
	}
};

/**
 * 收起LOGO.
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
WelPageJs.prototype.fadeOutLogo = function(callBackFunParam) {
	$("#WelcomePageLogo").animate({opacity: '0'}, 'slow', null, callBackFunParam);
};

/**
 * 收起背景.
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
WelPageJs.prototype.fadeOutBackground = function(callBackFunParam) {
	$("#WelcomePage").fadeOut('slow', callBackFunParam);
};

/**
 * 收起背景.
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
WelPageJs.prototype.closePage = function(callBackFunParam) {
	window.parent.$("#welcomePage").css("display", "none");
	if (callBackFunParam != null) {
		callBackFunParam();
	}
};
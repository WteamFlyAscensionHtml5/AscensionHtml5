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
WelPageJs.prototype.unfold = function() {
	$("#WelcomePage").show();
	$("#WelcomePage").fadeIn();
};

/**
 * 收起欢迎界面.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
WelPageJs.prototype.fold = function() {
	$("#WelcomePage").fadeOut();
	$("#WelcomePage").hide();
};


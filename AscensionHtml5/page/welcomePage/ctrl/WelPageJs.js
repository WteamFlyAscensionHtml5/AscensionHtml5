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
	$("#WelcomePage").slideDown("slow");
};

/**
 * 收起欢迎界面.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
WelPageJs.prototype.fold = function(callBackFunParam) {
	$("#WelcomePage").slideUp("slow", callBackFunParam);
};


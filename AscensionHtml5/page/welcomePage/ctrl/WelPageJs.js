/**
 * ��ӭ�����ҳ�������.
 * 
 * @author ���.
 * @version v0.10.
 */

if (typeof WelPageJs == 'undefined') {
	function WelPageJs() {
	}
}

/**
 * չ����ӭ����.
 * 
 * @author ���.
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
 * ����LOGO.
 * 
 * @author ���.
 * @version v0.21.
 */
WelPageJs.prototype.fadeOutLogo = function(callBackFunParam) {
	$("#WelcomePageLogo").animate({opacity: '0'}, 'slow', null, callBackFunParam);
};

/**
 * ���𱳾�.
 * 
 * @author ���.
 * @version v0.21.
 */
WelPageJs.prototype.fadeOutBackground = function(callBackFunParam) {
	$("#WelcomePage").fadeOut('slow', callBackFunParam);
};

/**
 * ���𱳾�.
 * 
 * @author ���.
 * @version v0.21.
 */
WelPageJs.prototype.closePage = function(callBackFunParam) {
	window.parent.$("#welcomePage").css("display", "none");
	if (callBackFunParam != null) {
		callBackFunParam();
	}
};
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
WelPageJs.prototype.unfold = function() {
	$("#WelcomePage").fadeIn('slow');
	$("#WelcomePageLogo").fadeIn('slow');
};

/**
 * ����ӭ����.
 * 
 * @author ���.
 * @version v0.10.
 */
WelPageJs.prototype.fold = function(callBackFunParam) {
	var callBackFun = function() {
		$("#WelcomePage").fadeOut('slow', callBackFunParam);
	};
	$("#WelcomePageLogo").animate({opacity: '0'}, 'slow', null, callBackFun);
};


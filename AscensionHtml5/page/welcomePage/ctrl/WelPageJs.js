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
	$("#WelcomePage").slideDown("slow");
};

/**
 * ����ӭ����.
 * 
 * @author ���.
 * @version v0.10.
 */
WelPageJs.prototype.fold = function(callBackFunParam) {
	$("#WelcomePage").slideUp("slow", callBackFunParam);
};


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
	alert("����WelPageCtrl���unfold����");
};

/**
 * ����ӭ����.
 * 
 * @author ���.
 * @version v0.10.
 */
WelPageJs.prototype.fold = function() {
	$("#WelcomePage").fadeOut();
	$("#WelcomePage").hide();
};


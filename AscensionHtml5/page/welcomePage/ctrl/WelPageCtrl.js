/**
 * ��ӭ�����ҳ���߼�������.
 * 
 * @author ���.
 * @version v0.10.
 */

if (typeof WelPageCtrl == 'undefined') {
	function WelPageCtrl() {
	}
}

/**
 * չ����ӭ����.
 * 
 * @author ���.
 * @version v0.10.
 */
SysCtrl.prototype.unfold = function() {
	alert("����WelPageCtrl���unfold����");
};

/**
 * ����ӭ����.
 * 
 * @author ���.
 * @version v0.10.
 */
SysCtrl.prototype.fold = function() {
	alert("����WelPageCtrl���fold����");
};


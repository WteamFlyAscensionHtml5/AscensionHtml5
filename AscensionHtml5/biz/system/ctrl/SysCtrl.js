/**
 * ϵͳģ��Ŀ����࣬���а�����ʼ��Ӧ�õĹ���.
 * 
 * @author ���.
 * @version v0.10.
 */

if (typeof SysCtrl == 'undefined') {
	function SysCtrl() {
	}
}

/**
 * Ӧ�õ����.
 * 
 * @author ���.
 * @version v0.10.
 */
SysCtrl.prototype.init = function() {
	this.initPage();
};

/**
 * ��ʼ������ҳ��.
 * 
 * @author ���.
 * @version v0.10.
 */
SysCtrl.prototype.initPage = function() {
	// ��body�ĳ���ֵΪ�ɼ�����ĳ�����ʵ����Ӧʽ����.
	var clientWidth = document.documentElement.clientWidth;
	alert(clientWidth);
};
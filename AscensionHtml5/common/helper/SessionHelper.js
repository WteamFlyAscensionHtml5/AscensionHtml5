/**
 * Session��ϣ�����࣬���ڴ��һЩȫ�ֱ���.
 * 
 * @author ���.
 * @version v0.10.
 */

if (typeof SessionHelper == 'undefined') {
	function SessionHelper() {
	}
}

/**
 * ��ָ��key��ȡvalueֵ.
 * 
 * @author ���.
 * @version v0.10.
 */
SysCtrl.prototype.get = function(key) {
	alert("����SessionHelper��get����");
};

/**
 * ��ʼ������ҳ��.
 * 
 * @author ���.
 * @version v0.10.
 */
SysCtrl.prototype.set = function(key, value) {
	alert("����SessionHelper��set����");
};
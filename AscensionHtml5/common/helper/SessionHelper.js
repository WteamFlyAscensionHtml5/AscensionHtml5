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
 * @param key Ԥ��value�����key
 * @return key����valueֵ
 * @author ���.
 * @version v0.10.
 */
SessionHelper.prototype.get = function(key) {
	alert("����SessionHelper��get����");
};

/**
 * ��key������valueֵ.
 * 
 * @param key Ҫ���洦��key
 * @param value Ҫ������key����value
 * @author ���.
 * @version v0.10.
 */
SessionHelper.prototype.set = function(key, value) {
	alert("����SessionHelper��set������key = " + key + " value = " + value);
};
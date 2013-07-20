/**
 * Session��ϣ�����࣬���ڴ��һЩȫ�ֱ���.
 * 
 * @author ���.
 * @version v0.10.
 */

if (typeof SessionHelper == 'undefined') {
	function SessionHelper() {
		/**
		 * Session��ϣ��.
		 */
		if (typeof SessionHelper.prototype.session == 'undefined') {
			SessionHelper.prototype.session = new HashTable();
		}
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
	return SessionHelper.prototype.session.get(key);
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
	SessionHelper.prototype.session.set(key, value);
};
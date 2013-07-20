/**
 * ��ϣ��.
 * 
 * @author ���.
 * @version v0.10.
 */

if (typeof HashTable == 'undefined') {
	function HashTable() {
		/**
		 * ��ϣ����.
		 */
		this.size = 0;

		/**
		 * ��ϣ����.
		 */
		this.entry = {};
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
HashTable.prototype.get = function(key) {
	if (this.containsKey(key)) {
		return this.entry[key];
	} else {
		return null;
	}
};

/**
 * ��key������valueֵ.
 * 
 * @param key Ҫ���洦��key
 * @param value Ҫ������key����value
 * @author ���.
 * @version v0.10.
 */
HashTable.prototype.set = function(key, value) {
	if (!this.containsKey(key)) {
		this.size++;
	}
	this.entry[key] = value;
};

/**
 * ɾ��ָ��key����ֵ.
 * 
 * @param key ��Ҫɾ����ֵ���ڵ�key
 * @author ���.
 * @version v0.10.
 */
HashTable.prototype.remove = function(key) {
	if (this.containsKey(key) && (delete this.entry[key])) {
		this.size--;
	}
};

/**
 * �ж�key���Ƿ���ֵ
 * 
 * @param Ҫ�����жϵ�key��
 * @author ���.
 * @version v0.10.
 */
HashTable.prototype.containsKey = function(key) {
	return (key in this.entry);
};

/**
 * �ж��Ƿ���ֵΪvalue��ֵ
 * 
 * @param ��Ҫ�����жϵ�valueֵ
 * @author ���.
 * @version v0.10.
 */
HashTable.prototype.containsValue = function(value) {
	for ( var prop in this.entry) {
		if (this.entry[prop] == value) {
			return true;
		}
	}
	return false;
};

/**
 * ��ȡֵ��ɵ�����
 * 
 * @return ֵ����ɵ�����
 * @author ���.
 * @version v0.10.
 */
HashTable.prototype.getValues = function() {
	var values = {};
	for ( var prop in this.entry) {
		values.push(this.entry[prop]);
	}
	return values;
};

/**
 * ��ȡkey��ɵ�����
 * 
 * @return key����ɵ�����
 * @author ���.
 * @version v0.10.
 */
HashTable.prototype.getKeys = function() {
	var keys = {};
	for ( var prop in this.entry) {
		keys.push(prop);
	}
	return keys;
};

/**
 * ��ȡ��ϣ��ĳ���
 * 
 * @return ��ϣ��ĳ���
 * @author ���.
 * @version v0.10.
 */
HashTable.prototype.getSize = function() {
	return this.size;
};

/**
 * ��չ�ϣ��
 * 
 * @author ���.
 * @version v0.10.
 */
HashTable.prototype.clear = function() {
	this.size = 0;
	this.entry = {};
};
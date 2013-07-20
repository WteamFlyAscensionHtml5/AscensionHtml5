/*
 * ��ϣ��.
 * 
 * @author ���.
 * @version v0.10.
 */

if (typeof HashTable == 'undefined') {
	function HashTable() {
		/*
		 * ��ϣ����.
		 */
		HashTable.prototype.size = 0;

		/*
		 * ��ϣ����.
		 */
		HashTable.prototype.entry = new Object();
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
		return HashTable.prototype.entry[key];
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
	alert("����HashTable��set������key = " + key + " value = " + value);
	if (!this.containsKey(key)) {
		HashTable.prototype.size++;
	}
	HashTable.prototype.entry[key] = value;
};

/**
 * ɾ��ָ��key����ֵ.
 * 
 * @param key ��Ҫɾ����ֵ���ڵ�key
 * @author ���.
 * @version v0.10.
 */
HashTable.prototype.remove = function(key) {
	if (this.containsKey(key) && (delete HashTable.prototype.entry[key])) {
		HashTable.prototype.size--;
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
	return (key in HashTable.prototype.entry);
};

/**
 * �ж��Ƿ���ֵΪvalue��ֵ
 * 
 * @param ��Ҫ�����жϵ�valueֵ
 * @author ���.
 * @version v0.10.
 */
HashTable.prototype.containsValue = function(value) {
	for ( var prop in HashTable.prototype.entry) {
		if (HashTable.prototype.entry[prop] == value) {
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
	var values = new Array();
	for ( var prop in HashTable.prototype.entry) {
		values.push(HashTable.prototype.entry[prop]);
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
	var keys = new Array();
	for ( var prop in HashTable.prototype.entry) {
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
	return HashTable.prototype.size;
};

/**
 * ��չ�ϣ��
 * 
 * @author ���.
 * @version v0.10.
 */
HashTable.prototype.clear = function() {
	HashTable.prototype.size = 0;
	HashTable.prototype.entry = new Object();
};
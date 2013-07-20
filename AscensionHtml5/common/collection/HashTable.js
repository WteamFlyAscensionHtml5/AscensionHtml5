/**
 * 哈希表.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */

if (typeof HashTable == 'undefined') {
	function HashTable() {
		/**
		 * 哈希表长度.
		 */
		this.size = 0;

		/**
		 * 哈希表体.
		 */
		this.entry = {};
	}
}

/**
 * 以指定key获取value值.
 * 
 * @param key 预计value所存的key
 * @return key处的value值
 * @author 侯骏雄.
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
 * 在key处存入value值.
 * 
 * @param key 要保存处的key
 * @param value 要保存于key处的value
 * @author 侯骏雄.
 * @version v0.10.
 */
HashTable.prototype.set = function(key, value) {
	if (!this.containsKey(key)) {
		this.size++;
	}
	this.entry[key] = value;
};

/**
 * 删除指定key处的值.
 * 
 * @param key 将要删除的值所在的key
 * @author 侯骏雄.
 * @version v0.10.
 */
HashTable.prototype.remove = function(key) {
	if (this.containsKey(key) && (delete this.entry[key])) {
		this.size--;
	}
};

/**
 * 判断key处是否有值
 * 
 * @param 要进行判断的key处
 * @author 侯骏雄.
 * @version v0.10.
 */
HashTable.prototype.containsKey = function(key) {
	return (key in this.entry);
};

/**
 * 判断是否有值为value的值
 * 
 * @param 将要进行判断的value值
 * @author 侯骏雄.
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
 * 获取值组成的数组
 * 
 * @return 值所组成的数组
 * @author 侯骏雄.
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
 * 获取key组成的数组
 * 
 * @return key所组成的数组
 * @author 侯骏雄.
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
 * 获取哈希表的长度
 * 
 * @return 哈希表的长度
 * @author 侯骏雄.
 * @version v0.10.
 */
HashTable.prototype.getSize = function() {
	return this.size;
};

/**
 * 清空哈希表
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
HashTable.prototype.clear = function() {
	this.size = 0;
	this.entry = {};
};
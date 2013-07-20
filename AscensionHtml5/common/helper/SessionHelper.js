/**
 * Session哈希表工具类，用于存放一些全局变量.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */

if (typeof SessionHelper == 'undefined') {
	function SessionHelper() {
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
SessionHelper.prototype.get = function(key) {
	alert("进入SessionHelper的get方法");
};

/**
 * 在key处存入value值.
 * 
 * @param key 要保存处的key
 * @param value 要保存于key处的value
 * @author 侯骏雄.
 * @version v0.10.
 */
SessionHelper.prototype.set = function(key, value) {
	alert("进入SessionHelper的set方法，key = " + key + " value = " + value);
};
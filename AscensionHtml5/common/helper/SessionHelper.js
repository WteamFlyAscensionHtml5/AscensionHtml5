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
 * @author 侯骏雄.
 * @version v0.10.
 */
SysCtrl.prototype.get = function(key) {
	alert("进入SessionHelper的get方法");
};

/**
 * 初始化整个页面.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
SysCtrl.prototype.set = function(key, value) {
	alert("进入SessionHelper的set方法");
};
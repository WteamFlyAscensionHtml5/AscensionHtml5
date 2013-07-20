/**
 * 系统模块的控制类，其中包括初始化应用的功能.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */

if (typeof SysCtrl == 'undefined') {
	function SysCtrl() {
	}
}

/**
 * 应用的入口.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
SysCtrl.prototype.init = function() {
	alert("进入SysCtrl的init");
};

/**
 * 初始化整个页面.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
SysCtrl.prototype.initPage = function() {
	alert("进入SysCtrl的initPage");
};
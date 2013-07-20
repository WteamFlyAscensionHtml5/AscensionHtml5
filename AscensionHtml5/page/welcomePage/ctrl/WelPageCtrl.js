/**
 * 欢迎界面的页面逻辑处理类.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */

if (typeof WelPageCtrl == 'undefined') {
	function WelPageCtrl() {
	}
}

/**
 * 展开欢迎界面.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
SysCtrl.prototype.unfold = function() {
	alert("进入WelPageCtrl类的unfold方法");
};

/**
 * 收起欢迎界面.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
SysCtrl.prototype.fold = function() {
	alert("进入WelPageCtrl类的fold方法");
};


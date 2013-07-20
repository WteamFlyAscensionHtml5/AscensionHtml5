/**
 * 主菜单界面的页面操作类.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */

if (typeof MenuPageJs == 'undefined') {
	function MenuPageJs() {
	}
}

/**
 * 展开主菜单界面.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
MenuPageJs.prototype.unfold = function() {
	alert("进入MenuPageJs类的unfold方法");
};

/**
 * 收起主菜单界面.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
MenuPageJs.prototype.fold = function() {
	$("#MenuPage").fadeOut();
	$("#MenuPage").hide();
};


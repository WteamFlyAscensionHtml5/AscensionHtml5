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
	$("#MenuPage").show();
	$("#MenuPage").fadeIn();
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


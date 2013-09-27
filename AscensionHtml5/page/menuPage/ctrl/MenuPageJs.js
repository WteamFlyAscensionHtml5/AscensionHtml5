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
 * 随机背景图片.
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
MenuPageJs.prototype.setRandomBackground = function(callBackFunParam) {
	var randomNum = Math.floor((Math.random() * 9) + 1);
	while(randomNum == 9) {
		randomNum = Math.floor((Math.random() * 9) + 1);
	}
	var menuPageBackgroundImage = "./img/menuPageBackground0" + randomNum + ".jpg";
	$("#MenuPageBackground").attr("src", menuPageBackgroundImage);
	
	if (callBackFunParam != null) {
		callBackFunParam();
	}
};

/**
 * 淡入主菜单界面.
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
MenuPageJs.prototype.fadeInMenu = function(callBackFunParam) {
	$("#MenuPage").fadeIn('slow', callBackFunParam);
};
	
/**
 * 下拉菜单背景.
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
MenuPageJs.prototype.menuUnfold = function(callBackFunParam) {
	$("#MenuPageMenuBackground").animate({ top:["0px","easeOutBounce"]}, 800); 
	
	if (callBackFunParam != null) {
		callBackFunParam();
	}
};

/**
 * 滑入菜单项时改变图片.
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
MenuPageJs.prototype.overMenuItemChangeImage = function(callBackFunParam) {
	var src = $("#MenuPageMenuStartGame").attr("src");
	src = "./img/startGame_a.png";
	$("#MenuPageMenuStartGame").attr("src", src);
	
	if (callBackFunParam != null) {
		callBackFunParam();
	}
};

/**
 * 滑出菜单项时改变图片.
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
MenuPageJs.prototype.outMenuItemChangeImage = function(callBackFunParam) {
	var src = $("#MenuPageMenuStartGame").attr("src");
	src = "./img/startGame.png";
	$("#MenuPageMenuStartGame").attr("src", src);
	
	if (callBackFunParam != null) {
		callBackFunParam();
	}
};

/**
 * 当菜单项点击鼠标时，偏移图片
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
MenuPageJs.prototype.menuItemDown = function(callBackFunParam) {
	$("#MenuPageMenu").css("top", "34%");
	$("#MenuPageMenu").css("left", "-1%");
	if (callBackFunParam != null) {
		callBackFunParam();
	}
};

/**
 * 当菜单项放开鼠标时，偏移图片
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
MenuPageJs.prototype.menuItemUp = function() {
	$("#MenuPageMenu").css("top", "33%");
	$("#MenuPageMenu").css("left", "0%");
};

/**
 * 收起主菜单界面.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
MenuPageJs.prototype.fold = function(callBackFunParam) {
	$("#MenuPage").fadeOut('slow', callBackFunParam);
};
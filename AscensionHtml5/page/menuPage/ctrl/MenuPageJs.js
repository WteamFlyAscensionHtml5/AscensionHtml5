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
	var callBackFun = function() {
		staticAudio.playNewInstance("MenuPageMenuUnfold");
		$("#MenuPageMenuBackground").animate({ top:["0px","easeOutBounce"]}, 800); 
	};
	
	var randomNum = Math.floor((Math.random() * 9) + 1);
	while(randomNum == 9) {
		randomNum = Math.floor((Math.random() * 9) + 1);
	}
	
	var menuPageBackgroundImage = "./page/menuPage/img/menuPageBackground0" + randomNum + ".jpg";
	$("#MenuPageBackground").attr("src", menuPageBackgroundImage);
	
	staticAudio.setLoop("MenuPageBackground", true);
	staticAudio.fadeStart("MenuPageBackground", 1000, 0.3);
	$("#MenuPage").fadeIn('slow', callBackFun);
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

/**
 * 当鼠标移到菜单项时，改变菜单项图片
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
MenuPageJs.prototype.menuItemOver = function() {
	staticAudio.playNewInstance("MenuPageMenuButtonMouseover");
	var src = $("#MenuPageMenuStartGame").attr("src");
	src = "./page/menuPage/img/startGame_a.png";
	$("#MenuPageMenuStartGame").attr("src", src);
};

/**
 * 当鼠标移出菜单项时，改变菜单项图片并播放音效
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
MenuPageJs.prototype.menuItemOut = function() {
	var src = $("#MenuPageMenuStartGame").attr("src");
	src = "./page/menuPage/img/startGame.png";
	$("#MenuPageMenuStartGame").attr("src", src);
};

/**
 * 当鼠标点击菜单项时，播出音效
 * 
 * @author 侯骏雄.
 * @version v0.20.
 */
MenuPageJs.prototype.menuItemClick = function() {
	staticAudio.playNewInstance("MenuPageMenuButtonClick");
};

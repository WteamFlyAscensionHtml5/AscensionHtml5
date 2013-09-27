/**
 * ���˵������ҳ�������.
 * 
 * @author ���.
 * @version v0.10.
 */

if (typeof MenuPageJs == 'undefined') {
	function MenuPageJs() {
	}
}

/**
 * �������ͼƬ.
 * 
 * @author ���.
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
 * �������˵�����.
 * 
 * @author ���.
 * @version v0.21.
 */
MenuPageJs.prototype.fadeInMenu = function(callBackFunParam) {
	$("#MenuPage").fadeIn('slow', callBackFunParam);
};
	
/**
 * �����˵�����.
 * 
 * @author ���.
 * @version v0.21.
 */
MenuPageJs.prototype.menuUnfold = function(callBackFunParam) {
	$("#MenuPageMenuBackground").animate({ top:["0px","easeOutBounce"]}, 800); 
	
	if (callBackFunParam != null) {
		callBackFunParam();
	}
};

/**
 * ����˵���ʱ�ı�ͼƬ.
 * 
 * @author ���.
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
 * �����˵���ʱ�ı�ͼƬ.
 * 
 * @author ���.
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
 * ���˵��������ʱ��ƫ��ͼƬ
 * 
 * @author ���.
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
 * ���˵���ſ����ʱ��ƫ��ͼƬ
 * 
 * @author ���.
 * @version v0.21.
 */
MenuPageJs.prototype.menuItemUp = function() {
	$("#MenuPageMenu").css("top", "33%");
	$("#MenuPageMenu").css("left", "0%");
};

/**
 * �������˵�����.
 * 
 * @author ���.
 * @version v0.10.
 */
MenuPageJs.prototype.fold = function(callBackFunParam) {
	$("#MenuPage").fadeOut('slow', callBackFunParam);
};
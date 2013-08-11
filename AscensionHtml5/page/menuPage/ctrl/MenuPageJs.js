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
 * չ�����˵�����.
 * 
 * @author ���.
 * @version v0.10.
 */
MenuPageJs.prototype.unfold = function() {
	var callBackFun = function() {
		$("#MenuPageMenuBackground").animate({top: '0px'}, 'slow', null, null);
	};
	
	var randomNum = Math.floor((Math.random() * 9) + 1);
	while(randomNum == 9) {
		randomNum = Math.floor((Math.random() * 9) + 1);
	}
	
	var menuPageBackgroundImage = "./page/menuPage/img/menuPageBackground0" + randomNum + ".jpg";
	$("#MenuPageBackground").attr("src", menuPageBackgroundImage);
	
	staticAudio.setLoop("MenuPageBackground", true);
	staticAudio.fadeStart("MenuPageBackground", 1000);
	$("#MenuPage").fadeIn('slow', callBackFun);
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

/**
 * ������Ƶ��˵���ʱ���ı�˵���ͼƬ
 * 
 * @author ���.
 * @version v0.10.
 */
MenuPageJs.prototype.menuItemOver = function() {
	var src = $("#MenuPageMenuStartGame").attr("src");
	src = "./page/menuPage/img/startGame_a.png";
	$("#MenuPageMenuStartGame").attr("src", src);
};

/**
 * ������Ƴ��˵���ʱ���ı�˵���ͼƬ
 * 
 * @author ���.
 * @version v0.10.
 */
MenuPageJs.prototype.menuItemOut = function() {
	var src = $("#MenuPageMenuStartGame").attr("src");
	src = "./page/menuPage/img/startGame.png";
	$("#MenuPageMenuStartGame").attr("src", src);
};

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

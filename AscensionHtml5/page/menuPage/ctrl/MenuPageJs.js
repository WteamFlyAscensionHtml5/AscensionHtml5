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
	$("#MenuPage").show();
	$("#MenuPage").fadeIn();
};

/**
 * �������˵�����.
 * 
 * @author ���.
 * @version v0.10.
 */
MenuPageJs.prototype.fold = function() {
	$("#MenuPage").fadeOut();
	$("#MenuPage").hide();
};


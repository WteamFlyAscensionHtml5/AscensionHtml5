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
	$("#MenuPage").slideDown("slow");
};

/**
 * �������˵�����.
 * 
 * @author ���.
 * @version v0.10.
 */
MenuPageJs.prototype.fold = function(callBackFunParam) {
	$("#MenuPage").slideUp("slow", callBackFunParam);
};


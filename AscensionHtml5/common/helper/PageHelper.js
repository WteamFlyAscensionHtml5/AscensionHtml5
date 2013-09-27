/**
 * ���湤���࣬�ṩ����Ĺ��в���.
 * 
 * @author ���.
 * @version v0.21.
 */
if (typeof PageHelper == 'undefined') {
	function PageHelper() {
	}
}

/**
 * ��ָ�������iframe����Ϊ�ɼ�.
 * 
 * @param pageName ���������
 * @author ���.
 * @version v0.21.
 */
PageHelper.prototype.openPage = function(pageName) {
	window.parent.$("#" + pageName).css("display", "inline");
};

/**
 * ��ָ�������iframe����Ϊ���ɼ�.
 * 
 * @param pageName ���������
 * @author ���.
 * @version v0.21.
 */
PageHelper.prototype.closePage = function(pageName) {
	window.parent.$("#" + pageName).css("display", "none");
};

/**
 * �����������˳����ִ�ж�������ƵЧ��.
 * 
 * @param funSet ��������Ƶ����������
 * @author ���.
 * @version v0.21.
 */
PageHelper.prototype.animation = function(funSet) {
	if (funSet.length == 0) {
		return;
	} else if (funSet.length == 1) {
		var indexFun = funSet[0];
		indexFun();
	} else if (funSet.length == 2) {
		var indexFun0 = funSet[0];
		var indexFun1 = funSet[1];		
		indexFun0(indexFun1);
	} else if (funSet.length > 2) {
		var evalString = "";
		var i;
		for (i = funSet.length - 2; i >= 0; i--) {
			if (i == funSet.length - 2) {
				evalString = evalString + "var tempFun" + i + " = function(){var indexFun0 = funSet[" + i + "];var indexFun1 = funSet[" + (i + 1) + "];indexFun0(indexFun1);}; ";
			} else {
				evalString = evalString + "var tempFun" + i + " = function(){var indexFun = funSet[" + i + "];indexFun(tempFun" + (i + 1) + ");}; ";
			}
		}
		evalString = evalString + "tempFun0();";
		eval(evalString);
	}
};
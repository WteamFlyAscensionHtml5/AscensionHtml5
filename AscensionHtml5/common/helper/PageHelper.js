/**
 * 界面工具类，提供界面的共有操作.
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
if (typeof PageHelper == 'undefined') {
	function PageHelper() {
	}
}

/**
 * 将指定界面的iframe设置为可见.
 * 
 * @param pageName 界面的名称
 * @author 侯骏雄.
 * @version v0.21.
 */
PageHelper.prototype.openPage = function(pageName) {
	window.parent.$("#" + pageName).css("display", "inline");
};

/**
 * 将指定界面的iframe设置为不可见.
 * 
 * @param pageName 界面的名称
 * @author 侯骏雄.
 * @version v0.21.
 */
PageHelper.prototype.closePage = function(pageName) {
	window.parent.$("#" + pageName).css("display", "none");
};

/**
 * 按数组参数的顺序来执行动画或音频效果.
 * 
 * @param funSet 动画或音频函数的数组
 * @author 侯骏雄.
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
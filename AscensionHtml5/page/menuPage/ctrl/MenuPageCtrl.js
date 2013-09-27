/**
 * 主菜单界面的页面逻辑处理类.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */

if (typeof MenuPageCtrl == 'undefined') {
	function MenuPageCtrl() {
	}
}

/**
 * 展开主菜单界面.
 * 
 * @author 侯骏雄.
 * @version v0.10.
 */
MenuPageCtrl.prototype.unfold = function() {
	var indexPage = staticSsession.get("indexPage");
	var callBackMenuUnfold = function() {
		var funSet = [];
		// 渐强循环播放背景音乐
		var menuBGMusic = function(callbackFun) {
			staticAudio.setLoop("MenuPageBackground", true);
			staticAudio.fadeStart("MenuPageBackground", 1000, 0.3);
			if (callbackFun != null) {
				callbackFun();
			}
		};
		funSet.push(menuBGMusic);
		
		// 界面设置可见
		var open = function(callbackFun) {
			staticPage.openPage("menuPage");
			if (callbackFun != null) {
				callbackFun();
			}
		};
		funSet.push(open);
		
		// 设置背景图片
		funSet.push(staticMenuPageJs.setRandomBackground);
		// 淡入页面
		funSet.push(staticMenuPageJs.fadeInMenu);
		
		// 播放弹出主菜单音效
		var menuUnfoldMusic = function(callbackFun) {
			staticAudio.playNewInstance("MenuPageMenuUnfold");
			if (callbackFun != null) {
				callbackFun();
			}
		};
		funSet.push(menuUnfoldMusic);
		
		// 弹出下拉菜单
		funSet.push(staticMenuPageJs.menuUnfold);

		staticPage.animation(funSet);
	};
	
	if (indexPage == "MenuPage") {
//		staticMenuPageJs.fold(callBackUnfold);
	} else if (indexPage == "WelcomePage") {
		var funSet = [];
		// 淡出LOGO
		funSet.push(staticWelPageJs.fadeOutLogo);
		// 淡出背景
		funSet.push(staticWelPageJs.fadeOutBackground);
		// 界面设置为不可见
		var close = function(callbackFun) {
			staticPage.closePage("welcomePage");
			if (callbackFun != null) {
				callbackFun();
			}
		};
		funSet.push(close);
		funSet.push(callBackMenuUnfold);
		staticPage.animation(funSet);
	} else {
//		callBackUnfold();
	}

	staticSsession.set("indexPage", "MenuPage");
};

/**
 * 当鼠标移到菜单项时，改变菜单项图片
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
MenuPageCtrl.prototype.menuItemOver = function() {
	var funSet = [];
	// 播放音效
	var overMenuItemMusic = function(callbackFun) {
		staticAudio.playNewInstance("MenuPageMenuButtonMouseover");
		if (callbackFun != null) {
			callbackFun();
		}
	};
	funSet.push(overMenuItemMusic);
	// 改变图片
	funSet.push(staticMenuPageJs.overMenuItemChangeImage);
	staticPage.animation(funSet);
};

/**
 * 当鼠标移出菜单项时，改变菜单项图片并播放音效
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
MenuPageCtrl.prototype.menuItemOut = function() {
	var funSet = [];
	// 改变图片
	funSet.push(staticMenuPageJs.outMenuItemChangeImage);
	staticPage.animation(funSet);
};

/**
 * 当对菜单项按下鼠标时，播出音效并做特效处理
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
MenuPageCtrl.prototype.menuItemDown = function() {
	var funSet = [];
	// 播放音效
	var dowmMenuItemMusic = function(callbackFun) {
		staticAudio.playNewInstance("MenuPageMenuButtonClick");
		if (callbackFun != null) {
			callbackFun();
		}
	};
	funSet.push(dowmMenuItemMusic);
	funSet.push(staticMenuPageJs.menuItemDown);
	staticPage.animation(funSet);
};

/**
 * 当菜单项放开鼠标时，做特效处理
 * 
 * @author 侯骏雄.
 * @version v0.21.
 */
MenuPageCtrl.prototype.menuItemUp = function() {
	var funSet = [];
	funSet.push(staticMenuPageJs.menuItemUp);
	staticPage.animation(funSet);
};
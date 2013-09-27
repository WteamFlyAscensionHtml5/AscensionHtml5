/**
 * ���˵������ҳ���߼�������.
 * 
 * @author ���.
 * @version v0.10.
 */

if (typeof MenuPageCtrl == 'undefined') {
	function MenuPageCtrl() {
	}
}

/**
 * չ�����˵�����.
 * 
 * @author ���.
 * @version v0.10.
 */
MenuPageCtrl.prototype.unfold = function() {
	var indexPage = staticSsession.get("indexPage");
	var callBackMenuUnfold = function() {
		var funSet = [];
		// ��ǿѭ�����ű�������
		var menuBGMusic = function(callbackFun) {
			staticAudio.setLoop("MenuPageBackground", true);
			staticAudio.fadeStart("MenuPageBackground", 1000, 0.3);
			if (callbackFun != null) {
				callbackFun();
			}
		};
		funSet.push(menuBGMusic);
		
		// �������ÿɼ�
		var open = function(callbackFun) {
			staticPage.openPage("menuPage");
			if (callbackFun != null) {
				callbackFun();
			}
		};
		funSet.push(open);
		
		// ���ñ���ͼƬ
		funSet.push(staticMenuPageJs.setRandomBackground);
		// ����ҳ��
		funSet.push(staticMenuPageJs.fadeInMenu);
		
		// ���ŵ������˵���Ч
		var menuUnfoldMusic = function(callbackFun) {
			staticAudio.playNewInstance("MenuPageMenuUnfold");
			if (callbackFun != null) {
				callbackFun();
			}
		};
		funSet.push(menuUnfoldMusic);
		
		// ���������˵�
		funSet.push(staticMenuPageJs.menuUnfold);

		staticPage.animation(funSet);
	};
	
	if (indexPage == "MenuPage") {
//		staticMenuPageJs.fold(callBackUnfold);
	} else if (indexPage == "WelcomePage") {
		var funSet = [];
		// ����LOGO
		funSet.push(staticWelPageJs.fadeOutLogo);
		// ��������
		funSet.push(staticWelPageJs.fadeOutBackground);
		// ��������Ϊ���ɼ�
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
 * ������Ƶ��˵���ʱ���ı�˵���ͼƬ
 * 
 * @author ���.
 * @version v0.21.
 */
MenuPageCtrl.prototype.menuItemOver = function() {
	var funSet = [];
	// ������Ч
	var overMenuItemMusic = function(callbackFun) {
		staticAudio.playNewInstance("MenuPageMenuButtonMouseover");
		if (callbackFun != null) {
			callbackFun();
		}
	};
	funSet.push(overMenuItemMusic);
	// �ı�ͼƬ
	funSet.push(staticMenuPageJs.overMenuItemChangeImage);
	staticPage.animation(funSet);
};

/**
 * ������Ƴ��˵���ʱ���ı�˵���ͼƬ��������Ч
 * 
 * @author ���.
 * @version v0.21.
 */
MenuPageCtrl.prototype.menuItemOut = function() {
	var funSet = [];
	// �ı�ͼƬ
	funSet.push(staticMenuPageJs.outMenuItemChangeImage);
	staticPage.animation(funSet);
};

/**
 * ���Բ˵�������ʱ��������Ч������Ч����
 * 
 * @author ���.
 * @version v0.21.
 */
MenuPageCtrl.prototype.menuItemDown = function() {
	var funSet = [];
	// ������Ч
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
 * ���˵���ſ����ʱ������Ч����
 * 
 * @author ���.
 * @version v0.21.
 */
MenuPageCtrl.prototype.menuItemUp = function() {
	var funSet = [];
	funSet.push(staticMenuPageJs.menuItemUp);
	staticPage.animation(funSet);
};
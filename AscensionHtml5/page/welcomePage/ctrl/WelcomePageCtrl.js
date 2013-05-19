// 定义WelcomePageCtrl类
if (typeof WelcomePageCtrl == 'undefined') {
	function WelcomePageCtrl() {
	}
}

WelcomePageCtrl.prototype.unfoldPage = function() {
	alert("进入WelcomePageCtrl的unfoldPage");
};

WelcomePageCtrl.prototype.foldPage = function() {
	alert("进入WelcomePageCtrl的foldPage");
};
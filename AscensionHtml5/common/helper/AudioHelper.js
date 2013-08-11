/**
 * 音频工具类，用于控制音频操作.
 * 
 * @author 侯骏雄.
 * @version v0.20.
 */
if (typeof AudioHelper == 'undefined') {
	function AudioHelper() {
		/**
		 * 音频哈希表.
		 */
		if (typeof AudioHelper.prototype.audioSession == 'undefined') {
			AudioHelper.prototype.audioSession = new HashTable();
		}
	}
}

/**
 * 初始化各音频对象.
 * 
 * @author 侯骏雄.
 * @version v0.20.
 */
AudioHelper.prototype.initAudio = function() {
	if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.substring(0, 3) == "4.0") {
		return;
	} else {
		var menuPageBackground = new Audio("./page/common/audio/MenuPageBackground.mp3");
		this.set("MenuPageBackground", menuPageBackground);
	}
};

/**
 * 设置音频对象
 * 
 * @param audioName 音频对象的名称
 * @param audio 所存的音频对象
 * @author 侯骏雄.
 * @version v0.20.
 */
AudioHelper.prototype.set = function(audioName, audio) {
	if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.substring(0, 3) == "4.0") {
		return;
	} else {
		AudioHelper.prototype.audioSession.set(audioName, audio);
	}
};

/**
 * 获取音频对象
 * 
 * @param audioName 音频对象的名称
 * @return 命名为audioName的音频对象
 * @author 侯骏雄.
 * @version v0.20.
 */
AudioHelper.prototype.get = function(audioName) {
	if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.substring(0, 3) == "4.0") {
		return;
	} else {
		return AudioHelper.prototype.audioSession.get(audioName);
	}
};

/**
 * 渐强播放一段指定音频
 * 
 * @param audioName 音频的名称
 * @author 侯骏雄.
 * @version v0.20.
 */
AudioHelper.prototype.fadeStart = function(audioName, speed) {
	if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.substring(0, 3) == "4.0") {
		return;
	} else {
		var audio = this.get(audioName);
		audio.volume = 0;
		var dis = speed/ 100;
		
		var volumeMinus = function() {
			if (audio.volume < 1) {
				if (audio.volume > 0.9) {
					audio.volume = 1;
				} else {
					audio.volume = audio.volume + 0.01;
				}
				setTimeout(volumeMinus, dis);
			}
		};
		
		audio.play();
		setTimeout(volumeMinus, dis);
	}
};

/**
 * 设置音频对象的循环模式，
 * 
 * @param audioName 音频的名称
 * @param state 循环模式
 *              trun为单曲循环.
 *              false为不循环.
 * @author 侯骏雄.
 * @version v0.20.
 */
AudioHelper.prototype.setLoop = function(audioName, state) {
	if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.substring(0, 3) == "4.0") {
		return;
	} else {
		var audio = this.get(audioName);
		if (state === true || state === false) {
			audio.loop = state;
		} else {
			alert("传入AudioHelper.setLoop方法的state参数不是布尔型");
		}
	}
};
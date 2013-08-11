/**
 * ��Ƶ�����࣬���ڿ�����Ƶ����.
 * 
 * @author ���.
 * @version v0.20.
 */
if (typeof AudioHelper == 'undefined') {
	function AudioHelper() {
		/**
		 * ��Ƶ��ϣ��.
		 */
		if (typeof AudioHelper.prototype.audioSession == 'undefined') {
			AudioHelper.prototype.audioSession = new HashTable();
		}
	}
}

/**
 * ��ʼ������Ƶ����.
 * 
 * @author ���.
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
 * ������Ƶ����
 * 
 * @param audioName ��Ƶ���������
 * @param audio �������Ƶ����
 * @author ���.
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
 * ��ȡ��Ƶ����
 * 
 * @param audioName ��Ƶ���������
 * @return ����ΪaudioName����Ƶ����
 * @author ���.
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
 * ��ǿ����һ��ָ����Ƶ
 * 
 * @param audioName ��Ƶ������
 * @author ���.
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
 * ������Ƶ�����ѭ��ģʽ��
 * 
 * @param audioName ��Ƶ������
 * @param state ѭ��ģʽ
 *              trunΪ����ѭ��.
 *              falseΪ��ѭ��.
 * @author ���.
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
			alert("����AudioHelper.setLoop������state�������ǲ�����");
		}
	}
};
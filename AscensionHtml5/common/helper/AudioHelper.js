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
		$.ajax({
			url:'./page/common/xml/audio.xml',
			type: 'GET',
			dataType: 'xml',
			timeout: 0,
			error: function(xml){
				alert('Error loading XML document'+xml);
			},
			success:  function(xml) {
				$(xml).find("audio").each(function(i){
					var name = $(this).children("audioName").text();
					var src = $(this).children("audioSrc").text();
					AudioHelper.prototype.set(name, new Audio(src));
				});
			}
		});
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
 * @param speed ��Ƶ��ǿ���ʱ������λΪ����
 * @param maxVolume ��ƵĿ���������
 * @author ���.
 * @version v0.20.
 */
AudioHelper.prototype.fadeStart = function(audioName, speed, maxVolume) {
	if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.substring(0, 3) == "4.0") {
		return;
	} else {
		var audio = this.get(audioName);
		audio.volume = 0;
		var cellSpeed = 10;
		if (speed != "undefined") {
			cellSpeed = speed/ 100;
		}
		
		var cellVolume = 0.01;
		var maxVol = 1;
		if (maxVolume != "undefined") {
			cellVolume = maxVolume/ 100;
			maxVol = maxVolume;
		}
		
		var volumeMinus = function() {
			if (audio.volume < maxVol) {
				if (audio.volume > (1 - cellVolume)) {
					audio.volume = maxVol;
				} else {
					audio.volume = audio.volume + cellVolume;
				}
				setTimeout(volumeMinus, cellSpeed);
			}
		};
		
		audio.play();
		setTimeout(volumeMinus, cellSpeed);
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

/**
 * ���½�����ķ�ʽ���ٲ�����Ƶ����
 * 
 * @param audioName ��Ƶ������
 * @author ���.
 * @version v0.20.
 */
AudioHelper.prototype.playNewInstance = function(audioName) {
	if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.substring(0, 3) == "4.0") {
		return;
	} else {
		var audio = this.get(audioName);
		var newAudio = new Audio(audio.src);
		newAudio.play();
	}
};
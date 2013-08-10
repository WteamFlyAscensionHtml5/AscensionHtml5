/**
 * 音频工具类，用于控制音频操作.
 * 
 * @author 侯骏雄.
 * @version v0.20.
 */
if (typeof AudionHelper == 'undefined') {
	function AudionHelper() {
		/**
		 * 音频哈希表.
		 */
		if (typeof AudionHelper.prototype.audioSession == 'undefined') {
			AudionHelper.prototype.audioSession = new HashTable();
		}
	}
}

/**
 * 初始化各音频对象.
 * 
 * @author 侯骏雄.
 * @version v0.20.
 */
AudionHelper.prototype.initAudio = function() {
	//TODO
};

/**
 * 设置音频对象
 * 
 * @param audioName 音频对象的名称
 * @param audio 所存的音频对象
 * @author 侯骏雄.
 * @version v0.20.
 */
AudionHelper.prototype.set = function(audioName, audio) {
	//TODO
};

/**
 * 获取音频对象
 * 
 * @param audioName 音频对象的名称
 * @return 命名为audioName的音频对象
 * @author 侯骏雄.
 * @version v0.20.
 */
AudionHelper.prototype.get = function(audioName) {
	//TODO
};

/**
 * 渐强播放一段指定音频
 * 
 * @param audioName 音频的名称
 * @author 侯骏雄.
 * @version v0.20.
 */
AudionHelper.prototype.fadeStrat = function(audioName) {
	//TODO
};
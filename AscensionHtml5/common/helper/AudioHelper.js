/**
 * ��Ƶ�����࣬���ڿ�����Ƶ����.
 * 
 * @author ���.
 * @version v0.20.
 */
if (typeof AudionHelper == 'undefined') {
	function AudionHelper() {
		/**
		 * ��Ƶ��ϣ��.
		 */
		if (typeof AudionHelper.prototype.audioSession == 'undefined') {
			AudionHelper.prototype.audioSession = new HashTable();
		}
	}
}

/**
 * ��ʼ������Ƶ����.
 * 
 * @author ���.
 * @version v0.20.
 */
AudionHelper.prototype.initAudio = function() {
	//TODO
};

/**
 * ������Ƶ����
 * 
 * @param audioName ��Ƶ���������
 * @param audio �������Ƶ����
 * @author ���.
 * @version v0.20.
 */
AudionHelper.prototype.set = function(audioName, audio) {
	//TODO
};

/**
 * ��ȡ��Ƶ����
 * 
 * @param audioName ��Ƶ���������
 * @return ����ΪaudioName����Ƶ����
 * @author ���.
 * @version v0.20.
 */
AudionHelper.prototype.get = function(audioName) {
	//TODO
};

/**
 * ��ǿ����һ��ָ����Ƶ
 * 
 * @param audioName ��Ƶ������
 * @author ���.
 * @version v0.20.
 */
AudionHelper.prototype.fadeStrat = function(audioName) {
	//TODO
};
/**
 * ҵ�������࣬��תǰ�˷��ʺ��.
 * 
 * @author ������.
 * @version v0.20.
 */

if (typeof BusCtrl == 'undefined') {
	function BusCtrl() {
	}
}

/**
 * ��ת���.
 * 
 * @param command ��������
 * @param request ����Ĳ�����ϣ��
 * @author ������.
 * @version v0.20.
 */
BusCtrl.prototype.execute = function(command, request) {
	//����
	if(command == "init")
		BusCtrl.init();
//	else if(command == "init")
//		{}
};
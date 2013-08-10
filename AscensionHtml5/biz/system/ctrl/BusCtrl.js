/**
 * 业务层入口类，中转前端反问后端.
 * 
 * @author 梁俊杰.
 * @version v0.20.
 */

if (typeof BusCtrl == 'undefined') {
	function BusCtrl() {
	}
}

/**
 * 中转入口.
 * 
 * @param command 操作命令
 * @param request 传入的参数哈希表
 * @author 梁俊杰.
 * @version v0.20.
 */
BusCtrl.prototype.execute = function(command, request) {
	//待填
	if(command == "init")
		BusCtrl.init();
//	else if(command == "init")
//		{}
};
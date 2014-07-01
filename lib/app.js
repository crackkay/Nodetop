	var http = require("http");

	module.exports = App;

	function App(){
		
		
	    // ��������б�
	    var middleList = this._middleList = [];

		var self = this;
		
		this._route_post_handles = {};
		this._route_get_handles = {};
	    // request�¼���Ӧ����
	    function handle(req,res){

	            // ѭ��ִ�в��
	            var middleIndex = 0; // �������

	            execMiddle();

	            // ִ���������ʱ�����Զ�ִ����һ��middle�����
	            // �������������ִ�У����ɲ�������ơ�
	            function next(){
	                middleIndex += 1;
	                execMiddle();
	            }

	            // ִ�в������
	            function execMiddle(){
	                var middle = middleList[middleIndex];
	                if(middle){
	                    middle(req,res,next);
	                }else{
	                	switch(req.method){
	                		case "GET":
	                			handle = self._route_get_handles[req.url];
	                		break;
	                		case "POST":
	                			handle = self._route_get_handles[req.url];
	                		break;
	                	}
	            		if(handle){
	            			handle(req,res);
	            		}else{
	            			res.statusCode = 404;
	            			res.end();
	            		};
	            }        

	        }

	    }

	    this._server = http.createServer(handle);
	}

	// ���빦��ջ
	App.prototype.use = function(middle){
	    this._middleList.push(middle);
	}

	App.prototype.get = function(route,handle){
		this._route_get_handles[route] = handle;
	};

	App.prototype.post = function(route,handle){
		this._route_post_handles[route] = handle;
	};

	// �����˿�
	App.prototype.listen = function(){
	    this._server.listen.apply(this._server,arguments);
	};
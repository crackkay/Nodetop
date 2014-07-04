	var http = require("http"),
		pathRegexp = require("./pathRegexp"),
		url = require("url");

	module.exports = App;

	function App(){
		
		
	    // ��������б�
	    var middleList = this._middleList = [];

		var self = this;
		
		this._route_post_handles = [];
		this._route_get_handles = [];
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
	                	
	                	// �� /abc?age=12 תΪ /abc
	           var handle;
               var path = url.parse(req.url).pathname;  //�����޸�
               // �ҵ�·�ɶ�Ӧ��·�ɴ�������

               function findHandle(route_handles){ //�����޸�
                    for(var i=0,len=route_handles.length; i<len ; i++){
                        var route_handle = route_handles[i];
                        var pass = route_handle.route.test(path);
                        if(pass){
                            handle = route_handle.handle;
                            break;
                        }
                    }  
                }    
	                	switch(req.method){
	                		case "GET":
	                			findHandle(self._route_get_handles);
	                		break;
	                		case "POST":
	                			findHandle(self._route_get_handles);
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
		this._route_get_handles.push({route:pathRegexp(route),handle:handle})
	};

	App.prototype.post = function(route,handle){
		this._route_post_handles.push({route:pathRegexp(route),handle:handle})
	};

	// �����˿�
	App.prototype.listen = function(){
	    this._server.listen.apply(this._server,arguments);
	};
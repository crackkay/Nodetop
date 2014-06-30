var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer();

server.on("request",handle);

function url2path(url_str){
	var urlobj = url.parse(url_str);
	var path = urlobj.path;
	return path;
};

function handle(request,response){
	//response.write(url2path(request.url));
	//response.end();
	
	///**
	function callback(err,data){
		if(err){
			response.statusCode = 404;
		}else{
			response.write(data);
		};
		response.end();
	};
	var path = url2path(request.url);
	var data = fs.readFile(__dirname+"/public"+path,callback);
	//**/
};

server.listen(3000);
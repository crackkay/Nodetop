var http = require("http");

var server = http.createServer();

server.on("request",handle);

function handle(request,response){
	response.write("<h2>hello world</h2>");
	response.end();
};

server.listen(3000);
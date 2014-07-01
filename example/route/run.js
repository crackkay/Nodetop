var App = require("../..").App,
	static = require("../..").static,
	app = new App;

	app.use(static(__dirname+"/public"));

	app.get("/about.html",function(req,res){
		res.write("my name is Ck");
		res.send();
	})
	
	app.get("/contact",function(req,res){
		res.write("contact me use QQ 12134");
		res.end();
	})
		
	app.listen(3000);
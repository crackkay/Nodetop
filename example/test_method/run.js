var fk = require("../.."),
	App = fk.App,
	app = new App(),
	static_middle = fk.static;

	app.use(static_middle(__dirname+"/public"));
	app.get(function(req,res){
		res.write("I an Get method result!");
		res.end();
	});
	
	app.post(function(req,res){
		res.write("I an post method result!");
		res.end();
	});
	
	app.listen(3000);
var App = require("../..").App,
	app = new App;

app.get("/about",function(req,res){
	res.write("my name is crackkay");
	res.end();
})
	
app.get("/contact/*/:id/ok",function(req,res){
	res.write("contact me use QQ 123456");
	res.end();
})
	
app.listen(3000);
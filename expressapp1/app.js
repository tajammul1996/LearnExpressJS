var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/test/:pet", function(req, res){
	var animal = req.params.pet;
	res.render("test", {Ani: animal});
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("SERVER has been started!")
});
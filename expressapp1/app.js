var express = require("express");
var app = express();



app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/test/:pet", function(req, res){
	var animal = req.params.pet;
	res.render("test.ejs", {Ani: animal});
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("SERVER has been started!")
});
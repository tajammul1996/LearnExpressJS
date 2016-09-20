var express = require("express");
var app = express();

app.get("/", function(req, res) {
	// body...
	res.send("Hi, there, Welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	var Animal = req.params.animal;
	if(Animal == "pig"){
		res.send("The pig says 'Oink'");
	}else if (Animal=="cow") {
		res.send("The cow says 'Moo'");
	}else{
		res.send("The "+ Animal +" says 'Woof Woof!'");
	}
});

app.get("/repeat/:greet/:ide", function(req, res){
	var Greet = req.params.greet;
	var num = req.params.ide;
	if(Greet=="hello"){
		
		if (num==3) {
			res.send("Hello Hello Hello");
		}else if(num==5){
			res.send("Hello Hello Hello Hello Hello")
		}
	}else if (Greet=="blah" && num==2) {
			res.send("blah blah");
	};
});

app.get("*", function(req, res){
	res.send("Sorry, page not found..... What are you doing with your life?");
});

app.listen(3010, function(){
	console.log("Server has been started at port 3010");
});
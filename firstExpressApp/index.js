var express = require("express");
var app = express();


app.get("/", function  (req, res) {
	// body...
	res.send("Hello therssse");
});


app.listen(8080, function() {
	// body...
	console.log("Server has started at 8080");
});
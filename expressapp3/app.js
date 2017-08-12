var express = require("express");
var app = express();

app.get("/", function(req, res){
    var animals = [{name: "tiger"},{name: "lion"}, {name: "zebra"}, {name: "cat"}];
   res.render("home.ejs", {anim : animals}); 
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server has started at port number "+ process.env.PORT);
});
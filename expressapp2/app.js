var express = require("express");
var app = express();

app.get("/", function(req, res) {
   res.render("home.ejs"); 
});


app.get("/posts", function(req, res){
    var posts =[{name:"tajammul"}, {name: "pasha"}];
    res.render("posts.ejs", {posts: posts});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has been started at port number"+ process.env.PORT);
});
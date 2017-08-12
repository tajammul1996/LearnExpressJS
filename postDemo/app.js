var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["salman", "abuzar", "jawad", "abrar", "arun", "nandeep"];



app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req,res){
    res.render("friends",{frnds : friends});
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
    
});


app.get("*", function(req, res){
    res.send("Go and get some life");
});


app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server has started at port number "+ process.env.PORT);
});


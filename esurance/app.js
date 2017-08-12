var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});


app.get("/login", function(req, res){
    res.render("login");
});

app.get("/signup", function(req, res){
    res.render("signup");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started @PORT "+ process.env.PORT);
});
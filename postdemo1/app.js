var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
var pcnames =["Asus", "Dell", "Lenovo", "Sony", "Mi", "MSI"];


app.get("/", function(req, res){
    res.render("home");
});

app.get("/pc", function(req,res){
        res.render("pcnames", {pcn: pcnames});
});

app.post("/addedpc", function(req, res){
    var newpc = req.body.addpc;
    pcnames.push(newpc);
    res.redirect("/pc");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has been started "+ process.env.PORT);
});
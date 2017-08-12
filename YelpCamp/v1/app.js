var express = require("express");
var app= express();
var bodyParser = require("body-parser");
 
app.use(bodyParser.urlencoded({extended :true}));
app.set("view engine", "ejs");

 var campgrounds = [
        {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
        {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
        {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"}
    ];
    

app.get("/", function(req,res){
    res.render("landing");
});


app.get("/campgrounds", function(req, res){
   
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds",function(req, res){
    //res.send("you hit post route!")
    var name = req.body.name;
    var image = req.body.image;
    var newcampground = {name: name, image: image}
    campgrounds.push(newcampground);
    res.redirect("/campgrounds");
    
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The server has started!"); 
});
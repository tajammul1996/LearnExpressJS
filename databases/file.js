var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament : String
});

var Cat = mongoose.model("Cat", catSchema);


//adding a new mobile to DB

// var george = new Cat({
//     name: "Norris",
//     age: 11,
//     temperament: "Angry"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG")
        
//     }else{
//         console.log("WE saved a cat in db:")
//         console.log(cat);
//     }
    
// });
//retrieve all phones

Cat.find({}, function(err){
    if(err){
        console.log("Error!");
        console.log(err);
    }else{
        console.log(Cat);
    }
});
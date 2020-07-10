var express = require("express");

var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

// app.get("/speak/:animal", function(req, res) {
//     if (req.params.animal === "pig") {
//         res.send("The " + req.params.animal + " says " + "'Oink'");
//     } else if (req.params.animal === "cow") {
//         res.send("The " + req.params.animal + " says " + "'Moo'");
//     } else if (req.params.animal === "dog") {
//         res.send("The " + req.params.animal + " says " + "'Woof Woof'");
//     } else {
//         res.send("We don't have that animal.");
//     }
// });

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig : "Oink",
        cow : "Moo",
        dog : "Woof Woof"
    }
    // convert into the lower case in case the user input digital word
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:word/:num", function(req, res) {
    // store num and word in a variable, so that don't have to call req.params. every time
    var num = Number(req.params.num);
    var word = req.params.word;
    var words = '';
    for (var i = 0; i < num; i++) {
        words += word + ' ';
    }
    res.send(words);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...");
});

app.listen(3000, function(){
    console.log("Listening to port 3000");
});


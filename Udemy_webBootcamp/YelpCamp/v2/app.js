var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var campgrounds = [
    {name: "position 1", image: ""},
    {name: "position 2", image: ""},
    {name: "position 3", image: ""},
    {name: "position 1", image: ""},
    {name: "position 2", image: ""},
    {name: "position 3", image: ""},
    {name: "position 1", image: ""},
    {name: "position 2", image: ""},
    {name: "position 3", image: ""}
]

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    // var campgrounds = [
    //     {name: "position 1", image: ""},
    //     {name: "position 2", image: ""},
    //     {name: "position 3", image: ""}
    // ]

    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // res.send("You hit the post request!"); // test
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    // create a new object with name=req.body.name, image=req.body.image, and push into the campgrounds array
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen("3000", function(){
    console.log("The YelpCamp server is listening on port 3000");
});
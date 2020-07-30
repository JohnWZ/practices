var express = require("express");
var app = express();
var bodyParser = require('body-parser');

// img source: https://www.photosforclass.com/search/camping
var campgrounds = [
    {name: "position 1", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "position 2", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "position 3", image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "position 1", image: "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "position 2", image: "https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=350"},
    {name: "position 3", image: "https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "position 1", image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "position 3", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"}
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
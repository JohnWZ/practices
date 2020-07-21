var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "position 1", image: ""},
        {name: "position 2", image: ""},
        {name: "position 3", image: ""}
    ]

    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen("3000", function(){
    console.log("The YelpCamp server is listening on port 3000");
});
var express = require("express");
var app = express();
// import body parser
var bodyParser = require("body-parser");
// tell express to use the body parser
app.use(bodyParser.urlencoded({extended: true}));

//使路由中所有的文件默认后缀为ejs
app.set("view engine", "ejs");

var friends = ["Adam", "Bill", "Candy", "Dell"];

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

// we use post when we want to add data to database
app.post("/addFriend", function(req, res){
    // get the value inside the form
    // console.log(req.body.newFriend);
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    // res.send("You have reached the post route");
    // redirect to the /friends page
    res.redirect("/friends");
});

app.listen("3000", function(){
    console.log("Serving on port 3000...");
});


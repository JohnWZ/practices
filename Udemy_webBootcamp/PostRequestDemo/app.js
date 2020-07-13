var express = require("express");
var app = express();
// import body parser
var bodyParser = require("body-parser");
// tell express to use the body parser
app.use(bodyParser.urlencoded({extended: true}));

//使路由中所有的文件默认后缀为ejs
app.set("view engine", "ejs");

// 创建一个friends数组存储数据，以后会用数据库取代
var friends = ["Adam", "Bill", "Candy", "Dell"];

// home(root) page
app.get("/", function(req, res){
    res.render("home");
});

// made /friend page, pass friends list to it for later use
app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

// use post when we want to add data to database(本次暂时用数组取代database)
app.post("/addFriend", function(req, res){
    // get the value inside the form
    // console.log(req.body.newFriend);
    var newFriend = req.body.newFriend;
    // push it into the friends array
    friends.push(newFriend);
    // res.send("You have reached the post route");
    // redirect to the /friends page
    res.redirect("/friends");
});

app.listen("3000", function(){
    console.log("Serving on port 3000...");
});


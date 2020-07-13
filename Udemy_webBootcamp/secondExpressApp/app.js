var express = require("express");
var app = express();
// var app = require("express")(); // 这么写相当于上面两行

// explicitly tells express to serve the contents of the 'public' directory
// 通常用public用来装css files，也可以叫其他名字
app.use(express.static("public"));

// 加了这一行以后，下面所有的路由返回的文件都默认是ejs文件，可以不用再加.ejs的后缀
// app.set("veiw engine", "ejs");

app.get("/", function(req, res){
    // render will automatically look for the files in the 'views' file
    res.render("home.ejs"); // ejs stands for embaded javascript
});

app.get("/youfellinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    // res.send("You fell in love with " + thing);
    // store the var thing to thingVar and pass to love.ejs
    res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "What is the purpose of xxx?", author: "John"},
        {title: "Why is it?", author: "Rachel"},
        {title: "How?", author: "Ann"}
    ];
    // posts(param that pass to posts.ejs):posts(the array var above)
    res.render("posts.ejs", {posts:posts});
});

app.listen(3000, function(){
    console.log("Serving on port 3000");
});


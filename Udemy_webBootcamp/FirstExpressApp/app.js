var express = require("express");
const { equal } = require("assert");
var app = express();
// file system
var fs = require("fs");

// routes
// "/" => "Hi there!"  // when user visit the root page, the server will respond "Hi there!"
app.get("/", function(req, res){ // request and respond are actually objects
    res.send("Hi There! this is homepage!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    res.send("MEOW!");
});

// "/:name" 此时的/:name不是一个具体的名字，而是一个变量名，可以match /r下面的任何页面
app.get("/r/:subpageName", function(req, res){
    // console.dir输出一个对象包含的内容
    console.dir(req.params);
    res.send("This is a subpage belongs to /r/, and the subpage name is: " + req.params.subpageName);
});

app.get("/home", function(req, res){
    // 在get请求中加?find=xxx试试。?在这里就是query的意思
    console.dir(req.params);
    res.send("Request to check the profile with the name of: " + req.query.find);
});

app.get("/simpleHTML", function(req, res) {
    res.send("<h1>This is a headline</h1><h2>This is second headline</h2>");
});

app.get("/temp", function(req, res) {
    // 读取文件并发送
    // var temp = fs.readFileSync("./temp.html", {encoding: "utf8"});
    // res.send(temp);
    res.sendFile(__dirname + '/temp.html');
});




// “*” match any pages 顺序很重要，如果将这个get放在最上面，则所有页面都会match
app.get("*", function(req, res){
    res.send("This is a * which matchs any pages");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Listening on port 3000'); 
});


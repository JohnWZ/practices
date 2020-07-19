var express = require("express");
var app = express();

var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/test", function(req, res){
    var url = "http://www.omdbapi.com/?s=test&apikey=thewdb"
    request(url, function(error, response, body){
            if (!error && response.statusCode == 200) {
            // 将string的body转成Json格式
            var bodyData = JSON.parse(body);
            // 可以试试将整个body(converted to results)打印出来
            // 将返回的结果(Json文件)用Json viewer打开
            res.send(bodyData);
            //res.send(bodyData["Search"][0]["Title"]);
        }
    });
});
app.get("/results", function(req, res){
    // 获取url中inputMovieName的值
    var movieQuery = req.query.inputMovieName;
    // you must append &apikey=thewdb to the end of the url to Search with Movie ID
    // `http://www.omdbapi.com/?s=${query}&apikey=thewdb`
    var url = "http://www.omdbapi.com/?s=" + movieQuery + "&apikey=thewdb";
    
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            // 将string的body转成Json格式
            var bodyData = JSON.parse(body);
            res.render("results", {data:bodyData});
        }
    });
});

app.listen("3000", function(){
    console.log("Movie app has started...")
    console.log("Listening to port 3000...");
});


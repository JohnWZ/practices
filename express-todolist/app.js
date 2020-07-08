var express = require("express");
var app = express();

var todoController = require("./controllers/todoController");

// 使用模版引擎
 app.set('view engine', 'ejs');

// 中间件
app.use(express.static('./public'));

todoController(app);

app.listen(3000);

console.log("Listening on port 3000");


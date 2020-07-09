var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended:false });

// 设置一组todo数组
var data = [{item: 'first todo'}, {item: 'second todo'}, {item: 'third todo'}];
// 将下面的模块导出
module.exports = function(app) {
    app.get('/todo', function(req, res){
        // 将todo数据渲染出来
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(req, res){
        // 将req.body里的内容push到todo数组中去
        data.push(req.body);
        // 响应一下json防止报错，响应的内容无所谓
        res.json(data);
    });

    app.delete('/todo/:item', function(req, res){
        //
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });
}


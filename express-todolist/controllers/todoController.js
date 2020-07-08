// 设置一组todo数据
var data = [{item: 'first todo'}, {item: 'second todo'}, {item: 'third todo'}];
// 将下面的模块导出
module.exports = function(app) {
    app.get('/todo', function(req, res){
        // 将todo数据渲染出来
        res.render('todo', {todos: data});
    });

    app.post('/todo', function(req, res){
        //
    });

    app.delete('/todo', function(req, res){
        //
    });
}


exports.changeSort= function(req, res){
    //1, 引入模块
    var INDEX = require('../dao/dao_changeSort');
    //2,创建对象
    var sortName = new INDEX();
    sortName.init();
    //查询菜品分类
    var sortNamesql = "select * from sort";
    sortName.queryAll(sortNamesql, function (sortName) {
        res.render('changeSort', {
            sortName: sortName,
        });
    });
};
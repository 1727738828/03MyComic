exports.changeSort = function (req, res) {
    //1, 引入模块
    var Sort = require('../dao/dao_changeSort');
    //2,创建对象
    var sortName = new Sort();
    sortName.init();
    var sortNamesql = "select * from sort";
    sortName.queryAll(sortNamesql, function (sortName) {
        res.render('changeSort', {
            sortName: sortName,
        });
    });

    // 修改
    var name = req.body.name;
    var index = req.body.Index;

    //2,创建对象
    var sortUpdate = new Sort();
    sortUpdate.init();

    var sortUpdatesql="UPDATE sort SET name = '"+name+"' where id="+index;
    sortUpdate.update(sortUpdatesql);
// 删除
    if (req.body.id != null) {
        var sortID = req.body.id;
        //2,创建对象
        var deletesort = new Sort();
        deletesort.init();
        var deletesortsql = "delete from sort where id=" + sortID;
        deletesort.queryAll(deletesortsql, function (deletesort) {
        });
    }
};
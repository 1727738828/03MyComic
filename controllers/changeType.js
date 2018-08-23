exports.changeType = function (req, res) {
    //1, 引入模块
    var Type = require('../dao/dao_changeType');
    //2,创建对象
    var typeName = new Type();
    typeName.init();
    var typeNamesql = "select * from type";
    typeName.queryAll(typeNamesql, function (typeName) {
        res.render('changeType', {
            typeName: typeName,
        });
    });

    // 修改
    var name = req.body.name;
    var index = req.body.Index;

    //2,创建对象
    var typeUpdate = new Type();
    typeUpdate.init();

    var typeUpdatesql = "UPDATE type SET name = '" + name + "' where id=" + index;
    typeUpdate.update(typeUpdatesql);
// 删除
    if (req.body.id != null) {
        var typeID = req.body.id;
        //2,创建对象
        var deletetype = new Type();
        deletetype.init();
        var deletetypesql = "delete from type where id=" + typeID;
        deletetype.queryAll(deletetypesql, function (deletetype) {
        });
        res.redirect('/index');
    }
    if (req.body.type_name != null) {
        //插入
        var type_name = req.body.type_name;
        var type_sql = "insert into type(name)values(?)";
        var type_params = [type_name];
//2,创建对象
        var type_add = new Type();
        type_add.init();
        type_add.insert(type_sql, type_params);
        res.redirect('/index');
    }


};
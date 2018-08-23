exports.insertComic = function (req, res) {
    // 获得数据
    // 漫画名称
    var name = req.body.name;
    var author = req.body.author;
    var author2 = req.body.author2;
    var author3 = req.body.author3;
    var hot = req.body.hot;
    var popular = req.body.popular;
    var comment = req.body.comment;
    var attention = req.body.attention;
    var likes = req.body.likes;
    var sort1 = req.body.sort;
    console.log(sort1);
    var sort2 = req.body.sort1;
    var sort3 = req.body.sort2;
    var type = req.body.type;
    var state = req.body.state;
    var count = req.body.count;
    var detailsImgUrl = req.body.detailsImgUrl;
    var largeImgUrl = req.body.largeImgUrl;
    var intervalImgUrl = req.body.intervalImgUrl;
    var recommendImgUrl = req.body.recommendImgUrl;
    var indexImgUrl = req.body.indexImgUrl;
    var introduction = req.body.introduction;
    //1, 引入模块
    var INSERT = require('../dao/dao_insertComic');
    //2,创建对象
    var comic = new INSERT();
    comic.init();
    var comicsql = "insert into mycomic(name,author,author2,author3" +
        ",hot,popular,comment,attention,likes,sort1,sort2,sort3" +
        ",type,state,count,details,large,intervals," +
        "recommend,indexother,introduction) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var comicparams = [name, author, author2, author3, hot, popular, comment, attention, likes, sort1, sort2, sort3, type, state, count, detailsImgUrl, largeImgUrl, intervalImgUrl, recommendImgUrl, indexImgUrl, introduction];
    comic.insert(comicsql, comicparams);
    //2,创建对象
    var typeName = new INSERT();
    typeName.init();
    var typeNamesql = "select * from type";
    typeName.queryAll(typeNamesql, function (typeName) {
        //2,创建对象
        var sortName = new INSERT();
        sortName.init();
        //查询菜品分类
        var sortNamesql = "select * from sort";
        sortName.queryAll(sortNamesql, function (sortName) {
            res.render('insertComic', {
                sortName: sortName,
                typeName: typeName,

            });
        });
    });

};
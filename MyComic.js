/**
 * Created by boy on 2017/7/10.
 */
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

//1,接受表单的请求
app.use(bodyParser.urlencoded({extended: false}));
//设置静态文件
app.use(express.static('public'));
//指定模板引擎
app.set("views engine", 'ejs');
//指定模板位置
app.set('views', __dirname + '/views');


var index = require('./controllers/index');
app.get('/index', index.index);
app.post('/index', index.index);
app.post('/deleteindex', index.deleteindex);

var insertComic = require('./controllers/insertComic');
app.post('/insertComic', insertComic.insertComic);
app.get('/insertComic', insertComic.selectItem);

var changeComic = require('./controllers/changeComic');
app.post('/changeComic', changeComic.changeComic);
app.get('/changeComic', changeComic.changeComic);

var changeSort = require('./controllers/changeSort');
app.post('/insertSort', changeSort.insertSort);
app.post('/updateSort', changeSort.updateSort);
app.post('/deleteSort', changeSort.deleteSort);
app.get('/changeSort', changeSort.selectSort);


var changeType = require('./controllers/changeType');
app.post('/insertType', changeType.insertType);
app.post('/updateType', changeType.updateType);
app.post('/deleteType', changeType.deleteType);
app.get('/changeType', changeType.selectType);


var Upload = require('./controllers/upload');


app.get('/upload', Upload.upload);







app.listen(8888);
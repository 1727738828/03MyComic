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

var insertComic = require('./controllers/insertComic');
app.post('/insertComic', insertComic.insertComic);
app.get('/insertComic', insertComic.insertComic);

var changeComic = require('./controllers/changeComic');
app.post('/changeComic', changeComic.changeComic);
app.get('/changeComic', changeComic.changeComic);
app.listen(8888);
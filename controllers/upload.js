exports.UploadImages = function(req, res){
    res.render('UploadImages',{});
};


exports.uploadIMG =  function (req, res) {

    var filepath = req.files[0].path;
    var fileKey = "nodejs" + new Date().getTime();
    // 调用方法
    cos.putObject({
        Bucket: "mycomic-1257212660", /* 必须 */ // Bucket 格式：test-1250000000
        Region: "ap-chengdu",
        Key: fileKey, /* 必须 */
        TaskReady: function (tid) {
        },
        onProgress: function (progressData) {

        },
        // 格式1. 传入文件内容
        // Body: fs.readFileSync(filepath),
        // 格式2. 传入文件流，必须需要传文件大小
        Body: fs.createReadStream(filepath),
        ContentLength: fs.statSync(filepath).size
    }, function (err, data) {
        if (data.statusCode == 200) {
            var url = cos.getObjectUrl({
                Bucket: "mycomic-1257212660", // Bucket 格式：test-1250000000
                Region: "ap-chengdu",
                Key: fileKey,
                Expires: 600000,
                Sign: true,
            }, function (err, data) {
            });
            var body = {
                key: fileKey,
                url: url
            }
            res.json(body);

        }
    });
};



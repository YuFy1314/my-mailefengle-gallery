var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var DBUtil = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gallery'
});
DBUtil.connect();
console.log('链接数据库')
router.get('/11', function(req, res) {
    console.log(res)
    DBUtil.query('SELECT * FROM g_collect', function(err, data) {
        if (err) {
            throw err;
        } else {
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].id + ',' + data[i].name);
            }
        }
    });
});

module.exports = router;

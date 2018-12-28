var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var DBUtil = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gallery'
});
DBUtil.connect();
router.get('/11', function(req, res) {
    console.log(222222);
    DBUtil.query('SELECT * FROM g_collect', function(err, data) {
        if (err) {
            throw err;
        } else {
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].id + ',' + data[i].name);
            }
            res.send("返回回来了！");
            res.end('is over');
        }
    });
});

// function Service() {

// }
// Service.prototype.getdate = function() {
// };

module.exports = router;

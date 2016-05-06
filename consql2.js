var express = require('express');
var mysql = require('mysql');
var app = express();

var pool = mysql.createPool({
    connectionLimit : 100,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'company',
    debug : false
});

function handle_database(req, res) {
    pool.getConnection(function(err, connection){
        if(err)
        {
            connection.release();
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        }

        console.log('connected as id ' + connection.threadId);

        // connection.query('SELECT id, contact_name, contact_tel, created_at from company LIMIT 0,1000', function (err, rows) {
        connection.query('SELECT * from company LIMIT 0,1000', function (err, rows) {
            connection.release();
            if(!err)
            {
                res.json(rows);
            }
        });

        connection.on('error', function(err){
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        });
    });
}

app.get('/', function (req, res) {
    handle_database(req, res);
});

app.listen(3000);

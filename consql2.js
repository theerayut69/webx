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
    });
}
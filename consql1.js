var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'company'
});
var app = express();

connection.connect(function(err){
    if(!err)
    {
        console.log("Database is connected ... \n\n");
    }
    else
    {
        console.log("Error connection database ... \n\n");
    }
});

app.get('/', function(req, res){
    connection.query('SELECT id, contact_name, contact_tel, created_at FROM `company` LIMIT 0,10', function(err, rows, fields){
        connection.end();
        if(!err)
        {
            console.log('The solution is : ', rows);
        }
        else
        {
            console.log('Error while performing Query.');
        }
    });
});
app.listen(3000);
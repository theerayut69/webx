var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'company'
});

connection.connect();
connection.query('SELECT id, contact_name, contact_tel, created_at FROM `company` LIMIT 0,10', function(err, rows, fields){
    if(!err)
    {
        console.log('The solution is : ', rows);
    }
    else
    {
        console.log('Error while performing Query');
    }
});

connection.end();
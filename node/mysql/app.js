var express = require('express');
const { appendFile } = require('fs');
var mysql = require('mysql');
const env = require('dotenv').config({ path: "../../.env" });

var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

connection.connect(function (err) {
    if (err) {
        console.error('Database is connected~!!\n\n');
    } else {
        console.log('Error connecting Database~!!\n\n');
    }
});

app.get('/', function (req, res) {
    connection.query('select * from st_info', function (err, rows, fields) {
        connection.end();
        if (err) {
            res.send(rows);
            console.log("The solution is : ", rows);
        } else {
            console.log('Error while performing Query.\n\n');
        }
    })
})

app.listen(8000, function () {
    console.log("8000 Port : Server Started~!!\n\n")
})  
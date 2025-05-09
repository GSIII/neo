var express = require('express');
var mysql = require('mysql');
const env = require('dotenv').config({ path: '../../.env' });
var app = express();

var connection = mysql.createConnection({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

connection.connect(function (err) {
    if (!err) {
        console.error('Database is connected~!!\n');
    } else {
        console.log('Error connecting Database~!!\n');
    }
});

app.get('/', function (req, res) {
    connection.query('SELECT * FROM st_info', function (err, rows) {
        if (err) {
            console.log('Error while performing Query.\n', err);
            res.status(500).send('Database error');
            return;
        }

        let template = `
        <table border="1" style="margin:auto; text-align:center;">
            <tr>
                <th>ST_ID</th>
                <th>NAME</th>
                <th>DEPT</th>
            </tr>
        `;

        rows.forEach(item => {
            template += `
            <tr>
                <td>${item.ST_ID}</td>
                <td>${item.NAME}</td>
                <td>${item.DEPT}</td>
            </tr>
            `;
        });

        template += '</table>';
        res.send(template);
    });
});

app.listen(8080, function () {
    console.log('8080 Port : Server Started~!!\n');
});

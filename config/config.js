const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3000,
    database: 'dbs'
})

db.connect();
moudle.exports = db;
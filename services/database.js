const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'excuse'
});

connection.connect((err) => {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(connection.threadId);
});

module.exports = connection;

const mysql = require('mysql2');
let conn = undefined;

try {
    conn = mysql.createPool({
        "host": "jee_inj",
        "user": "root",
        "port": 3306,
        "password": "pa",
        "database": "jee",
        "waitForConnections": false,
        "connectionLimit": 100,
        "maxIdle": 10,
        "idleTimeout": 60000,
        "queueLimit": 0,
        "enableKeepAlive": true,
        "keepAliveInitialDelay": 0
    });
} catch (err) {
    console.log(err);
}

module.exports = conn
const mysql = require('mysql2');
require("dotenv").config()


const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "assignment1"
})

const promisePool = pool.promise();

// Test connection
promisePool.query('SELECT 1')
    .then(() => console.log('Database connection successful'))
    .catch((err) => console.error('Database connection failed', err));
    
module.exports = pool.promise()
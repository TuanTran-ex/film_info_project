const mysql = require('mysql2');
const { sqlConfig } = require('../configs');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool(sqlConfig);

module.exports = pool.promise();

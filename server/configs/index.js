const routeConfig = require('./route.config');

require('dotenv').config();
const defaultConfig = {
  sqlConfig: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME || 'WebFilm',
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
  routeConfig: routeConfig,
};

module.exports = defaultConfig;

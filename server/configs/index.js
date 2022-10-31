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
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  routeConfig: routeConfig,
};

module.exports = defaultConfig;

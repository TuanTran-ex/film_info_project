const routeConfig = require('./route.config');

require('dotenv').config();
const defaultConfig = {
  port: process.env.PORT || 3300,
  localClientApp: process.env.LOCAL_CLIENT_APP,
  remoteClientApp: process.env.REMOTE_CLIENT_APP,
  allowedDomains:
    process.env.Node_ENV === 'production'
      ? [
          process.env.REMOTE_CLIENT_APP,
          process.env.REMOTE_CLIENT_APP2,
          process.env.REMOTE_SERVER_API,
          process.env.LOCAL_CLIENT_APP,
        ]
      : [process.env.LOCAL_CLIENT_APP, process.env.LOCAL_SERVER_API],
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

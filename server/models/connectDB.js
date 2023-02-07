const Sequelize = require('sequelize');

const { sqlConfig } = require('../configs');
const logger = require('../helpers/logger');

const sequelize = new Sequelize(
  sqlConfig.database,
  sqlConfig.user,
  sqlConfig.password,
  {
    host: sqlConfig.host,
    dialect: 'mysql',
    logging: false,
    operatorsAliases: false,
    pool: {
      max: sqlConfig.pool.max,
      min: sqlConfig.pool.min,
      acquire: sqlConfig.pool.acquire,
      idle: sqlConfig.pool.idle,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    logger.info('Connection has been established successfully.');
  })
  .catch((error) => {
    logger.error('Unable to connect to the database: ', error);
  });

module.exports = sequelize;

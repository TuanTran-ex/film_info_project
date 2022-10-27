const Sequelize = require('sequelize');

const { sqlConfig } = require('../configs');

const sequelize = new Sequelize(
  sqlConfig.database,
  sqlConfig.user,
  sqlConfig.password,
  {
    host: sqlConfig.host,
    dialect: 'mysql',
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
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

module.exports = sequelize;

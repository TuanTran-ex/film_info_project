const { DataTypes } = require('sequelize');
const sequelize = require('./connectDB');

const BlackListToken = sequelize.define(
  'BlackListToken',
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    iat: {
      type: DataTypes.DATE,
    },
  },
  {
    timeStamp: true,
    tableName: 'BlackListToken',
  }
);

// BlackListToken.sync({ alter: true })
//   .then(() => console.log('Sync DB BlackList token'))
//   .catch((err) => console.log('Sync BlackList token error: ' + err));

module.exports = BlackListToken;

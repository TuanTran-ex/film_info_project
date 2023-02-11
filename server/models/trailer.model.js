const { DataTypes } = require('sequelize');
const sequelize = require('../models/connectDB');

const Trailer = sequelize.define(
  'Trailer',
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timeStamp: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'Trailer',
  }
);

module.exports = Trailer;

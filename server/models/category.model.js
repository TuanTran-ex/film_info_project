const { DataTypes } = require('sequelize');
const sequelize = require('../models/connectDB');

const Category = sequelize.define(
  'Category',
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timeStamp: true,
    // underscored: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'Category',
  }
);

module.exports = Category;

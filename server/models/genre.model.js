const { DataTypes } = require('sequelize');
const sequelize = require('../models/connectDB');
const Film = require('./film.model');

const Genre = sequelize.define(
  'Genre',
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
    tableName: 'Genre',
  }
);

module.exports = Genre;

const { DataTypes } = require('sequelize');
const sequelize = require('../models/connectDB');

const Country = sequelize.define(
  'Country',
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
    tableName: 'Country',
  }
);

// class Country {
//   constructor({ id, name, updated_at, created_at }) {
//     this.id = id;
//     this.name = name;
//     this.createdAt = created_at;
//     this.updatedAt = updated_at;
//   }
// }

module.exports = Country;

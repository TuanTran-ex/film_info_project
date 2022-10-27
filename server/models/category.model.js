const { DataTypes } = require('sequelize');
const sequelize = require('../models/connectDB');

const Category = sequelize.define(
  'Category',
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      allowNull: false,
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

// class Category {
//   constructor({ id, name, updated_at, created_at }) {
//     this.id = id;
//     this.name = name;
//     this.createdAt = created_at;
//     this.updatedAt = updated_at;
//   }
// }

module.exports = Category;

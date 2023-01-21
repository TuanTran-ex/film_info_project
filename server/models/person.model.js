const { DataTypes } = require('sequelize');
const sequelize = require('../models/connectDB');

const Person = sequelize.define(
  'Person',
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
    job: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATE,
    },
    placeOfBirth: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timeStamp: true,
    // underscored: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'Person',
  }
);

const PersonImage = sequelize.define(
  'PersonImage',
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    url: { type: DataTypes.STRING },
    personId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: Person,
        key: 'id',
      },
    },
  },
  {
    timeStamp: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'PersonImage',
  }
);

Person.hasMany(PersonImage, {
  foreignKey: 'personId',
  tableName: 'PersonImage',
});

module.exports = { Person, PersonImage };

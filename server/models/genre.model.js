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
// class Genre {
//   constructor({ id, name, updated_at, created_at }) {
//     this.id = id;
//     this.name = name;
//     this.createdAt = created_at;
//     this.updateAt = updated_at;
//   }
// }

// Genre.belongsToMany(Film, { through: 'GenreFilm' });

module.exports = Genre;

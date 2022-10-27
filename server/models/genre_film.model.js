const { DataTypes } = require('sequelize');
const sequelize = require('../models/connectDB');

const GenreModel = require('../models/genre.model');
const FilmModel = require('../models/film.model');

const GenreFilm = sequelize.define(
  'GenreFilm',
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      allowNull: false,
    },
    filmId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: FilmModel,
        key: 'id',
      },
    },
    genreId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: GenreModel,
        key: 'id',
      },
    },
  },
  {
    timeStamp: true,
    // underscored: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'GenreFilm',
  }
);

GenreModel.belongsToMany(FilmModel, { through: GenreFilm });
FilmModel.belongsToMany(GenreModel, { through: GenreFilm });

module.exports = GenreFilm;

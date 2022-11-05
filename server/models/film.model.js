// Domain model for Film
const { DataTypes } = require('sequelize');
const sequelize = require('../models/connectDB');
const Category = require('../models/category.model');
const Genre = require('./genre.model');
const Country = require('./country.model');
const Trailer = require('./trailer.model');
const Person = require('./person.model');

const Film = sequelize.define(
  'Film',
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    englishName: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    backgroundImage: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    time: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    premierDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imdbPoint: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    isProcessing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    timeStamp: true,
    // underscored: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'Film',
  }
);

Film.beforeCreate(async (film, options) => {
  film.slug = film.name.toSlug();
});

const PersonFilm = sequelize.define(
  'PersonFilm',
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    filmId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: Film,
        key: 'id',
      },
    },
    personId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: Genre,
        key: 'id',
      },
    },
    nameInFilm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('Actor', 'Directors', 'Writer', 'Creator'),
      allowNull: false,
    },
  },
  {
    timeStamp: true,
    // underscored: true,
    createdAt: false,
    updatedAt: false,
    tableName: 'PersonFilm',
  }
);

Film.belongsTo(Category);
Film.belongsToMany(Genre, {
  through: 'GenreFilm',
  // as: 'genres',
  foreignKey: 'filmId',
});
Genre.belongsToMany(Film, {
  through: 'GenreFilm',
  // as: 'films',
  foreignKey: 'genreId',
});
Film.belongsTo(Country, { foreignKey: 'countryOfProduction' });
Film.belongsToMany(Person, { through: 'PersonFilm', foreignKey: 'filmId' });
Person.belongsToMany(Film, { through: 'PersonFilm', foreignKey: 'personId' });
Film.hasMany(Trailer, { foreignKey: 'filmId' });

module.exports = Film;

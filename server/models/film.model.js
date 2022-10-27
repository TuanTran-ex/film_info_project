// Domain model for Film
const { DataTypes } = require('sequelize');
const sequelize = require('../models/connectDB');
const Category = require('../models/category.model');
const Genre = require('./genre.model');
const Country = require('./country.model');

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
    // countryId: {
    //   type: DataTypes.BIGINT.UNSIGNED,
    //   field: 'countryOfProduction',
    //   references: {
    //     model: 'Country',
    //     key: 'id',
    //   },
    // },
    imdbPoint: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    // categoryId: {
    //   type: DataTypes.BIGINT.UNSIGNED,
    //   references: {
    //     model: 'Category',
    //     key: 'id',
    //   },
    // },
    isProcessing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
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
// class Film {
//   constructor({
//     id,
//     name,
//     englishName,
//     image,
//     backgroundImage,
//     time,
//     premierDate,
//     description,
//     countryId,
//     countryName,
//     imdbPoint,
//     categoryId,
//     categoryName,
//     genreId,
//     genreName,
//     isProcessing,
//     created_at,
//     updated_at,
//   }) {
//     this.id = id;
//     this.name = name;
//     this.englishName = englishName;
//     this.image = image;
//     this.backgroundImage = backgroundImage;
//     this.time = time;
//     this.premierDate = new Date(premierDate).toLocaleDateString('en-US');
//     this.description = description;
//     this.imdbPoint = imdbPoint;
//     this.categoryId = categoryId;
//     this.categoryName = categoryName;
//     this.genreId = genreId ? [genreId] : [];
//     this.genreName = genreName ? [genreName] : [];
//     this.countryId = countryId;
//     this.countryName = countryName;
//     this.isProcessing = isProcessing;
//     this.createdAt = created_at;
//     this.updatedAt = updated_at;
//   }
// }

module.exports = Film;

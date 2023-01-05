const { DataTypes } = require('sequelize');
const sequelize = require('./connectDB');
const FilmModel = require('./film.model');
const AccountModel = require('./account.model');

const FilmCollection = sequelize.define(
  'FilmCollection',
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    filmId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: FilmModel,
        key: 'id',
      },
    },
    accountId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: AccountModel,
        key: 'id',
      },
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    timeStamp: true,
    tableName: 'FilmCollection',
  }
);

AccountModel.belongsToMany(FilmModel, { through: FilmCollection });
FilmModel.belongsToMany(AccountModel, { through: FilmCollection });

// FilmCollection.sync({ alter: true })
//   .then(() => console.log('Sync DB FilmCollection table successfully'))
//   .catch((err) => console.log('Sync FilmCollection table error: ' + err));

module.exports = FilmCollection;

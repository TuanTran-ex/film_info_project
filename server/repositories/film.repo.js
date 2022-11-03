const pool = require('../models/connectDB');
const Film = require('../models/film.model');
const Category = require('../models/category.model');
// const GenreFilm = require('../models/genre_film.model');
const query = require('../models/query');
const { CustomError } = require('../utils/errorHandling');
const sequelize = require('../models/connectDB');
const { Op } = require('sequelize');
const Genre = require('../models/genre.model');
const Country = require('../models/country.model');
const CATEGORY_TV_FILM_STR = 'Phim Bộ';
const CATEGORY_MOVIE_STR = 'Phim Lẻ';
class FilmRepo {
  /**
   * Get list Film
   * @returns Film model
   */
  async getListFilmHomePage() {
    let films = [];
    let tvFilms = [];
    let movies = [];
    let processingFilms = [];

    films = await Film.findAll();
    tvFilms = await Film.findAll({
      include: [
        { model: Category, where: { name: { [Op.eq]: CATEGORY_TV_FILM_STR } } },
      ],
    });
    movies = await Film.findAll({
      include: [
        { model: Category, where: { name: { [Op.eq]: CATEGORY_MOVIE_STR } } },
      ],
    });
    processingFilms = await Film.findAll({ where: { isProcessing: true } });
    return { films, tvFilms, movies, processingFilms };
  }

  /**
   * Get list Film for Browser Page with paginate
   * @param {int} page
   * @param {int} perPage item in one page
   * @returns array films
   */
  async getListFilmBrowserPage(categoryId, page = 1, perPage = 20) {
    let films = [];
    if (categoryId)
      films = await Film.findAll({
        attributes: {
          exclude: ['GenreFilm'],
        },
        include: [
          { model: Category, where: { id: { [Op.eq]: categoryId } } },
          { model: Genre, attributes: ['id', 'name'] },
          { model: Country },
        ],
        order: [['created_at', 'DESC']],
        offset: parseInt(page) - 1,
        limit: parseInt(perPage),
      });
    else
      films = await Film.findAll({
        include: [
          { model: Category },
          { model: Genre, attributes: ['id', 'name'] },
          { model: Country },
        ],
        order: [['created_at', 'DESC']],
        offset: parseInt(page) - 1,
        limit: parseInt(perPage),
      });

    return films.map((el) => el.get({ plain: true }));
  }
  /**
   * Tìm kiếm Film theo name và englishName
   * @param {string} searchValue
   * @returns Array Films
   */
  async searchFilm(searchValue = '') {
    searchValue = searchValue.trim();
    const films = await Film.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${searchValue}%`,
            },
          },
          {
            englishName: {
              [Op.like]: `%${searchValue}%`,
            },
          },
        ],
      },
      limit: 30,
    });
    return films.map((el) => el.get({ plain: true }));
  }
  /**
   * Get list genre film
   * @param {int} filmId
   * @returns array
   */
  async getGenreFilm(filmId) {
    const listGenre = [];
    listGenre = await Film.findByPk(filmId, {
      include: [{ model: Genre }],
    });
    return listGenre;
  }

  async addFilm(film) {
    let newFilm;

    let listGenre = await Genre.findAll({ where: { id: film.genreId } });

    newFilm = await Film.create({
      ...film,
      CategoryId: film.categoryId,
      countryOfProduction: film.countryId,
    });
    for (let item of listGenre) {
      item.addFilm(newFilm);
    }
    return newFilm;
  }

  async deleteFilm(filmId) {
    let res;
    res = await Film.destroy({ where: { id: filmId } });
    return res;
  }
}

module.exports = new FilmRepo();

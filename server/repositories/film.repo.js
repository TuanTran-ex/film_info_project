const sequelize = require('sequelize');
const Film = require('../models/film.model');
const Category = require('../models/category.model');
const { Op } = require('sequelize');
const Genre = require('../models/genre.model');
const Country = require('../models/country.model');
const Person = require('../models/person.model').Person;
const Trailer = require('../models/trailer.model');
const { PersonImage } = require('../models/person.model');

const CATEGORY_TV_FILM_STR = 'Phim Bộ';
const CATEGORY_MOVIE_STR = 'Phim Lẻ';
const PAGE = 1;
const PER_PAGE = 10;

class FilmRepo {
  /**
   * Get list Film
   * @returns Film model
   */
  async getListHomePage() {
    let films = [];
    let tvFilms = [];
    let movies = [];
    let processingFilms = [];
    films = await Film.findAll({
      order: [['created_at', 'DESC']],
      offset: parseInt(PAGE) - 1,
      limit: parseInt(PER_PAGE),
    });
    tvFilms = await Film.findAll({
      include: [
        { model: Category, where: { name: { [Op.eq]: CATEGORY_TV_FILM_STR } } },
      ],
      order: [['created_at', 'DESC']],
      offset: parseInt(PAGE) - 1,
      limit: parseInt(PER_PAGE),
    });
    movies = await Film.findAll({
      include: [
        { model: Category, where: { name: { [Op.eq]: CATEGORY_MOVIE_STR } } },
      ],
      order: [['created_at', 'DESC']],
      offset: parseInt(PAGE) - 1,
      limit: parseInt(PER_PAGE),
    });
    processingFilms = await Film.findAll({
      where: { isProcessing: true },
      order: [['created_at', 'DESC']],
      offset: parseInt(PAGE) - 1,
      limit: parseInt(PER_PAGE),
    });
    return { films, tvFilms, movies, processingFilms };
  }

  /**
   * Get list Film for Browser Page with paginate
   * @param {int} page
   * @param {int} perPage item in one page
   * @returns array films
   */
  async getListBrowserPage({
    categoryId,
    genreId,
    countryId,
    year,
    time,
    order,
    page = 1,
    perPage = 20,
  }) {
    let films = [];
    let orderCondition;
    if (order) {
      switch (order) {
        case 'updated':
          orderCondition = ['created_at', 'DESC'];
          break;
        case 'publishDate':
          orderCondition = ['premierDate', 'DESC'];
          break;
        case 'rating':
          orderCondition = ['imdbPoint', 'DESC'];
          break;
        default:
          break;
      }
    }
    let where = {
      [Op.and]: [
        categoryId ? { categoryId: categoryId } : null,
        countryId ? { countryOfProduction: countryId } : null,
        year
          ? sequelize.where(
              sequelize.fn('YEAR', sequelize.col('Film.premierDate')),
              year
            )
          : null,
        time ? { time: { [Op.between]: [time.start, time.end] } } : null,
      ],
    };

    films = await Film.findAll({
      attributes: {
        exclude: ['GenreFilm'],
      },
      include: [
        {
          model: Category,
        },
        {
          model: Genre,
          attributes: ['id', 'name'],
          where: { [Op.and]: [genreId ? { id: genreId } : null] },
        },
        { model: Country },
      ],
      where: where,
      order: orderCondition ? [orderCondition] : [['id', 'DESC']],
      offset: (parseInt(page) - 1) * parseInt(perPage),
      limit: parseInt(perPage),
    });

    return films.map((el) => el.get({ plain: true }));
  }

  async getDetail(filmId) {
    const film = await Film.findByPk(filmId, {
      include: [
        Genre,
        { model: Person, include: [PersonImage] },
        Trailer,
        Category,
        Country,
      ],
    });
    return film;
  }

  /**
   * Tìm kiếm Film theo name và englishName
   * @param {string} searchValue
   * @returns Array Films
   */
  async search(searchValue = '') {
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
  async getGenre(filmId) {
    const listGenre = [];
    listGenre = await Film.findByPk(filmId, {
      include: [{ model: Genre }],
    });
    return listGenre;
  }

  async create(film) {
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
  async update(film) {
    const updatedFilm = await Film.update(film, { where: { id: film.id } });
    return updatedFilm;
  }

  async delete(id) {
    const deletedFilm = await Film.destroy({ where: { id: id } });
    return deletedFilm;
  }
}

module.exports = new FilmRepo();

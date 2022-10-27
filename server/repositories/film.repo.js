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
    // const [listFilm, fields] = await pool.query(query.qGetAllFilm(col));
    // if (!listFilm) {
    //   throw new CustomError(6, 400, 'Film is not exists');
    // }
    // listFilm.map((item) => {
    //   const film = new Film(item);
    //   if (item.categoryName === CATEGORY_MOVIE_STR) movies.push(film);
    //   if (item.categoryName === CATEGORY_TV_FILM_STR) tvFilms.push(film);
    //   if (item.isProcessing) processingFilms.push(film);
    //   films.push(film);
    // });
    // films = films.slice(0, 8);
    // tvFilms = tvFilms.slice(0, 8);
    // movies = movies.slice(0, 8);
    // processingFilms = processingFilms.slice(0, 15);
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
    // const col = ['id', 'name', 'englishName', 'image', 'premierDate', 'time'];
    let films = [];
    // const [listFilm, fields] = await pool.query(
    //   query.qGetFilmWithPaginateBrowerPage(categoryId, page, perPage)
    // );
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
    // let listFilm = rows[0];
    // for (const item of listFilm[0]) {
    //   const film = new Film(item);
    //   const genres = await this.getGenreFilm(film.id);
    //   if (genres.length > 0)
    //     genres.forEach((genre) => {
    //       film.genreId.push(genre.id);
    //       film.genreName.push(genre.name);
    //     });
    //   films.push(film);
    // }

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
    // const [rows, fields] = await pool.query(query.qAddFilm(film));
    // for (let item of film.genreId[0]) {
    //   await pool.query(query.qAddGenreToFilm(rows.insertId, item));
    // }
    // return rows;
    let newFilm;
    // console.log(film);
    let listGenre = await Genre.findAll({ where: { id: film.genreId } });
    // console.log(listGenre);

    newFilm = await Film.create(
      {
        ...film,
        CategoryId: film.categoryId,
        countryOfProduction: film.countryId,
        // genres: listGenre,
      }
      // { include: [{ model: Genre, as: 'genres' }] }
    );
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

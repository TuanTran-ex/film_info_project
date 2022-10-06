const pool = require('../models/connectDB');
const Film = require('../models/film.model');
const query = require('../models/query');
const { CustomError } = require('../utils/errorHandling');
const CATEGORY_TV_FILM_STR = 'Phim Bộ';
const CATEGORY_MOVIE_STR = 'Phim Lẻ';
class FilmRepo {
  /**
   * Get list Film
   * @returns Film model
   */
  async getListFilmHomePage() {
    const col = [
      'id',
      'name',
      'englishName',
      'image',
      'premierDate',
      'isProcessing',
    ];
    let films = [];
    let tvFilms = [];
    let movies = [];
    let processingFilms = [];
    const [listFilm, fields] = await pool.query(query.qGetAllFilm(col));
    if (!listFilm) {
      throw new CustomError(6, 400, 'Film is not exists');
    }
    listFilm.map((item) => {
      const film = new Film(item);
      if (item.categoryName === CATEGORY_MOVIE_STR) movies.push(film);
      if (item.categoryName === CATEGORY_TV_FILM_STR) tvFilms.push(film);
      if (item.isProcessing) processingFilms.push(film);
      films.push(film);
    });
    films = films.slice(0, 8);
    tvFilms = tvFilms.slice(0, 8);
    movies = movies.slice(0, 8);
    processingFilms = processingFilms.slice(0, 15);

    return { films, tvFilms, movies, processingFilms };
  }

  /**
   * Get list Film for Browser Page with paginate
   * @param {int} page
   * @param {int} perPage item in one page
   * @returns array films
   */
  async getListFilmBrowserPage(categoryId, page, perPage) {
    // const col = ['id', 'name', 'englishName', 'image', 'premierDate', 'time'];
    let films = [];
    const [listFilm, fields] = await pool.query(
      query.qGetFilmWithPaginateBrowerPage(categoryId, page, perPage)
    );
    // let listFilm = rows[0];
    for (const item of listFilm[0]) {
      const film = new Film(item);
      const genres = await this.getGenreFilm(film.id);
      if (genres.length > 0)
        genres.forEach((genre) => {
          film.genreId.push(genre.id);
          film.genreName.push(genre.name);
        });
      films.push(film);
    }

    return films;
  }

  /**
   * Get list genre film
   * @param {int} filmId
   * @returns array
   */
  async getGenreFilm(filmId) {
    const [listGenre, fields] = await pool.query(query.qGetGenreFilm(filmId));
    return listGenre;
  }

  async addFilm(film) {
    const [rows, fields] = await pool.query(query.qAddFilm(film));
    for (let item of film.genreId[0]) {
      await pool.query(query.qAddGenreToFilm(rows.insertId, item));
    }
    return rows;
  }
  async deleteFilm(filmId) {
    const [rows, fields] = await pool.query(query.qDeleteFilmById(filmId));
    return rows;
  }
}

module.exports = new FilmRepo();

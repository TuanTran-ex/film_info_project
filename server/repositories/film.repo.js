const pool = require('../models/connectDB');
const Film = require('../models/film.model');
const query = require('../models/query');
const { CustomError } = require('../utils/errorHandling');

class FilmRepo {
  /**
   * Get list Film
   * @returns Film model
   */
  async getListFilm() {
    const [rows, fields] = await pool.query(query.qGetAllFilm());
    const film = new Film(rows);
    if (!film) {
      throw new CustomError(6, 400, 'Film is not exists');
    }
    return film;
  }
}

module.exports = new FilmRepo();

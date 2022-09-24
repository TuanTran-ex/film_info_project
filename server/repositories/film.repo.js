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
    const films = [];
    const [rows, fields] = await pool.query(query.qGetAllFilm());
    if (!rows) {
      throw new CustomError(6, 400, 'Film is not exists');
    }
    rows.map((item) => {
      const film = new Film(item);
      films.push(film);
    });
    return films;
  }
}

module.exports = new FilmRepo();

const pool = require('../models/connectDB');
const query = require('../models/query');
const { CustomError } = require('../utils/errorHandling');
const GenreModel = require('../models/genre.model');

class GenreRepo {
  /**
   * Get list Genres
   * @returns Genres model
   */
  async getListGenre() {
    // const genres = [];
    // const [rows, fields] = await pool.query(query.qGetAllGenre());
    // rows.map((item) => {
    //   const genre = new Genre(item);
    //   genres.push(genre);
    // });
    // if (!genres) {
    //   throw new CustomError(6, 400, 'Genres is not exists');
    // }
    const genres = GenreModel.findAll();
    return genres;
  }
}

module.exports = new GenreRepo();

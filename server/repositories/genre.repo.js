const GenreModel = require('../models/genre.model');

class GenreRepo {
  /**
   * Get list Genres
   * @returns Genres model
   */
  async getList() {
    const genres = await GenreModel.findAll();
    return genres;
  }
  async getById(id) {
    const genre = await GenreModel.findByPk(id);
    return genre;
  }
  async getByName(name) {
    const genre = await GenreModel.findOne({ where: { name } });
    return genre;
  }
  async create(genre) {
    const newGenre = await GenreModel.create(genre);
    return newGenre;
  }
  async update(genre) {
    const updatedGenre = await GenreModel.update(genre, {
      where: { id: genre.id },
    });
    return updatedGenre;
  }
  async delete(id) {
    const deletedGenre = await GenreModel.destroy({ where: { id } });
    return deletedGenre;
  }
}

module.exports = new GenreRepo();

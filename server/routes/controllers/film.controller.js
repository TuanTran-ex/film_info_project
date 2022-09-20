const CategoryRepo = require('../../repositories/category.repo');
const CountryRepo = require('../../repositories/country.repo');
const FilmRepo = require('../../repositories/film.repo');
const GenreRepo = require('../../repositories/genre.repo');
const { CustomError } = require('../../utils/errorHandling');

async function getListFilm(req, res, next) {
  try {
    const film = await FilmRepo.getListFilm();
    const genres = await GenreRepo.getListGenre();
    const countries = await CountryRepo.getListCountry();
    const categories = await CategoryRepo.getListCategories();
    if (!film && !genres && !countries && !categories) {
      return next(new CustomError(6, 400, 'Data is not exist'));
    }
    return res
      .status(200)
      .json({ success: true, data: { film, genres, countries, categories } });
  } catch (err) {
    next(err);
  }
}

module.exports = { getListFilm };

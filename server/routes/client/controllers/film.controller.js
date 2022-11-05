const CategoryRepo = require('../../../repositories/category.repo');
const CountryRepo = require('../../../repositories/country.repo');
const FilmRepo = require('../../../repositories/film.repo');
const GenreRepo = require('../../../repositories/genre.repo');
const { CustomError } = require('../../../utils/errorHandling');

async function getListFilm(req, res, next) {
  const { films, tvFilms, movies, processingFilms } =
    await FilmRepo.getListHomePage(['id', 'name', 'englishName', 'image']);
  const genres = await GenreRepo.getList();
  const countries = await CountryRepo.getList();
  const categories = await CategoryRepo.getList();
  if (!films && !genres && !countries && !categories) {
    return next(new CustomError(6, 400, 'Data is not exist'));
  }
  return res.status(200).json({
    success: true,
    data: {
      films,
      tvFilms,
      movies,
      processingFilms,
      genres,
      countries,
      categories,
    },
  });
}

module.exports = { getListFilm };

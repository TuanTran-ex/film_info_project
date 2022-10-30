const CategoryRepo = require('../../../repositories/category.repo');
const CountryRepo = require('../../../repositories/country.repo');
const FilmRepo = require('../../../repositories/film.repo');
const GenreRepo = require('../../../repositories/genre.repo');
const { CustomError } = require('../../../utils/errorHandling');

async function getHomePageData(req, res, next) {
  const { films, tvFilms, movies, processingFilms } =
    await FilmRepo.getListFilmHomePage();
  const genres = await GenreRepo.getListGenre();
  const countries = await CountryRepo.getListCountry();
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

async function getBrowserPageData(req, res, next) {
  const { categoryId, page, perPage } = req.query;

  const genres = await GenreRepo.getListGenre();
  const countries = await CountryRepo.getListCountry();
  const categories = await CategoryRepo.getList();
  const films = await FilmRepo.getListFilmBrowserPage(
    categoryId,
    page,
    perPage
  );
  if (!films && !genres && !countries && !categories) {
    return next(new CustomError(6, 400, 'Data is not exist'));
  }

  return res.status(200).json({
    success: true,
    data: {
      films,
      genres,
      countries,
      categories,
    },
  });
}

async function searchFilm(req, res, next) {
  const searchValue = req.query.q;
  const listFilm = await FilmRepo.searchFilm(searchValue);
  return res.status(200).json({ success: true, data: listFilm });
}

module.exports = { getHomePageData, getBrowserPageData, searchFilm };

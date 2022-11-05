const CategoryRepo = require('../../../repositories/category.repo');
const CountryRepo = require('../../../repositories/country.repo');
const FilmRepo = require('../../../repositories/film.repo');
const GenreRepo = require('../../../repositories/genre.repo');
const { CustomError } = require('../../../utils/errorHandling');

async function getHomePageData(req, res, next) {
  const { films, tvFilms, movies, processingFilms } =
    await FilmRepo.getListHomePage();
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

async function getBrowserPageData(req, res, next) {
  const { categoryId, page, perPage } = req.query;

  const genres = await GenreRepo.getList();
  const countries = await CountryRepo.getList();
  const categories = await CategoryRepo.getList();
  const films = await FilmRepo.getListBrowserPage(categoryId, page, perPage);
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
  const listFilm = await FilmRepo.search(searchValue);
  return res.status(200).json({ success: true, data: listFilm });
}

async function getFilmDetailsPageData(req, res, next) {
  const filmId = req.params.id;
  const film = await FilmRepo.getDetail(filmId);
  if (!film) throw new CustomError(6, 400, 'Film not found');
  return res.status(200).json({ success: true, data: film });
}

module.exports = {
  getHomePageData,
  getBrowserPageData,
  searchFilm,
  getFilmDetailsPageData,
};

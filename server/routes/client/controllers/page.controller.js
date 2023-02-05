const CategoryRepo = require('../../../repositories/category.repo');
const CountryRepo = require('../../../repositories/country.repo');
const FilmRepo = require('../../../repositories/film.repo');
const GenreRepo = require('../../../repositories/genre.repo');
const { CustomError } = require('../../../utils/errorHandling');
const redisClient = require('../../../helpers/redisService');
const redisKey = require('../../../configs/redisKey');

async function getHomePageData(req, res, next) {
  let data = await redisClient.get(redisKey.film.HOME_PAGE);
  if (!data) {
    const { films, tvFilms, movies, processingFilms } =
      await FilmRepo.getListHomePage();
    const genres = await GenreRepo.getList();
    const countries = await CountryRepo.getList();
    const categories = await CategoryRepo.getList();
    if (!films && !genres && !countries && !categories) {
      return next(new CustomError(6, 400, 'Data is not exist'));
    }
    data = {
      films,
      tvFilms,
      movies,
      processingFilms,
      genres,
      countries,
      categories,
    };
    await redisClient.set(redisKey.film.HOME_PAGE, JSON.stringify(data), {
      EX: 24 * 60 * 60,
      NX: true,
    });
  } else data = JSON.parse(data);
  return res.status(200).json({
    success: true,
    data: data,
  });
}

async function getBrowserPageData(req, res, next) {
  const {
    categoryId,
    genreId,
    countryId,
    year,
    timeStart,
    timeEnd,
    order,
    page,
    perPage,
  } = req.query;
  let time = null;
  if (timeStart && timeEnd) time = { start: timeStart, end: timeEnd };
  const genres = await GenreRepo.getList();
  const countries = await CountryRepo.getList();
  const categories = await CategoryRepo.getList();
  const films = await FilmRepo.getListBrowserPage({
    categoryId,
    genreId,
    countryId,
    year,
    time,
    order,
    page,
    perPage,
  });
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
  const listFilmSuggest = await FilmRepo.getListBrowserPage({
    page: 1,
    perPage: 10,
    genreId: film.Genres[0].id,
  });
  for (let index = 0; index < listFilmSuggest.length; index++) {
    if (listFilmSuggest[index].id == filmId) {
      listFilmSuggest.splice(index, 1);
      break;
    }
  }
  // film.listFilmSuggest = listFilmSuggest;
  if (!film) throw new CustomError(6, 400, 'Film not found');
  return res
    .status(200)
    .json({ success: true, data: { film, listFilmSuggest } });
}

module.exports = {
  getHomePageData,
  getBrowserPageData,
  searchFilm,
  getFilmDetailsPageData,
};

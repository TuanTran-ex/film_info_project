const FilmRepo = require('../../../repositories/film.repo');
const GenreRepo = require('../../../repositories/genre.repo');
const CountryRepo = require('../../../repositories/country.repo');
const CategoryRepo = require('../../../repositories/category.repo');
const Film = require('../../../models/film.model');

exports.index = async (req, res) => {
  const { page } = req.query;
  const PER_PAGE = 10;
  const films = await FilmRepo.getListFilmBrowserPage(null, page, PER_PAGE);
  res.render('admin/film', { films });
};

exports.create = async (req, res) => {
  const genres = await GenreRepo.getListGenre();
  const countries = await CountryRepo.getListCountry();
  const categories = await CategoryRepo.getListCategories();
  res.render('admin/film/add', { genres, countries, categories });
};

exports.store = async (req, res, next) => {
  const {
    name,
    englishName,
    time,
    premierDate,
    description,
    imdbPoint,
    countryId,
    categoryId,
    isProcessing,
    genreId,
  } = req.body;
  const { image, backgroundImage } = req.files;
  const film = {
    name,
    englishName,
    time,
    premierDate,
    description,
    imdbPoint,
    countryId,
    categoryId,
    isProcessing,
    genreId,
    image: image[0].path.replace('public', ''),
    backgroundImage: backgroundImage[0].path.replace('public', ''),
  };
  await FilmRepo.addFilm(film);
  res.redirect('/admin/films');
};

exports.edit = (req, res, next) => {};

exports.update = (req, res, next) => {};

exports.destroy = async (req, res, next) => {
  const { id } = req.params;
  await FilmRepo.deleteFilm(id);
  res.status(204).send();
};

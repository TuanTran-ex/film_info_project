const FilmRepo = require('../../repositories/film.repo');
const { CustomError } = require('../../utils/errorHandling');

async function getListFilm(req, res, next) {
  try {
    const film = await FilmRepo.getListFilm();
    console.log(film);
    if (!film) {
      return next(new CustomError(6, 400, 'Film is not exist'));
    }
    return res.status(200).json({ data: film });
  } catch (err) {
    next(err);
  }
}

module.exports = { getListFilm };

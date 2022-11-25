const GenreRepo = require('../../../repositories/genre.repo');

const { CustomError } = require('../../../utils/errorHandling');
const { successRes } = require('../../../utils/utils');
exports.getAll = async (req, res, next) => {
  const genres = await GenreRepo.getList();
  return successRes(res, genres);
};

exports.get = async (req, res, next) => {
  const genre = await GenreRepo.getById(req.params.id);
  if (!genre) throw new CustomError(6, 404, 'Genre not found');
  return successRes(res, genre);
};

exports.create = async (req, res, next) => {
  const genre = await GenreRepo.create(req.body);
  return successRes(res, genre);
};

exports.update = async (req, res, next) => {
  const result = await GenreRepo.update({
    id: req.params.id,
    name: req.body.name,
  });
  if (result[0] === 0) throw new CustomError(6, 404, 'Genre not found');
  return successRes(res);
};

exports.delete = async (req, res, next) => {
  const result = await GenreRepo.delete(req.params.id);
  if (result === 0) throw new CustomError(6, 404, 'Genre not found');
  return successRes(res);
};

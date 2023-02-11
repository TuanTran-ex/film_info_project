const CountryRepo = require('../../../repositories/country.repo');

const { CustomError } = require('../../../utils/errorHandling');
const { successRes } = require('../../../utils/utils');
exports.getAll = async (req, res, next) => {
  const countries = await CountryRepo.getList();
  return successRes(res, countries);
};

exports.get = async (req, res, next) => {
  const { id } = req.params;
  const country = await CountryRepo.getById(id);
  if (!country) {
    throw new CustomError(6, 404, 'Country not found');
  }
  return successRes(res, country);
};

exports.create = async (req, res, next) => {
  const country = await CountryRepo.create(req.body);
  return successRes(res, country);
};

exports.update = async (req, res, next) => {
  const result = await CountryRepo.update({
    id: req.params.id,
    name: req.body.name,
  });
  if (result[0] === 0) throw new CustomError(6, 404, 'Country not found');
  return successRes(res);
};

exports.delete = async (req, res, next) => {
  const result = await CountryRepo.delete(req.params.id);
  if (result === 0) throw new CustomError(6, 404, 'Country not found');
  return successRes(res);
};

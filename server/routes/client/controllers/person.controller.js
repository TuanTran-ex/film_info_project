const PersonRepo = require('../../../repositories/person.repo');

const { CustomError } = require('../../../utils/errorHandling');
const { successRes } = require('../../../utils/utils');
exports.getAll = async (req, res, next) => {
  const persons = await PersonRepo.getList();
  return successRes(res, persons);
};

exports.get = async (req, res, next) => {
  const { id } = req.params;
  const person = await PersonRepo.getById(id);
  if (!person) throw new CustomError(6, 404, 'Person not found');
  return successRes(res, person);
};

exports.create = async (req, res, next) => {};

exports.update = async (req, res, next) => {};

exports.delete = async (req, res, next) => {};

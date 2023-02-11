const Category = require('../../../repositories/category.repo');

const { CustomError } = require('../../../utils/errorHandling');

exports.getAll = async (req, res, next) => {
  const categories = await Category.getList();
  res.status(200).json({ success: true, data: categories });
};

exports.get = async (req, res, next) => {
  const category = await Category.getById(req.params.id);
  if (!category) {
    throw new CustomError(6, 404, 'Category not found');
  }
  return res.status(200).json({ success: true, data: category });
};

exports.create = async (req, res, next) => {
  const category = await Category.create(req.body);
  return res.status(200).json({ success: true, data: category });
};

exports.update = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const result = await Category.update({ id, name: req.body.name });
  if (result[0] === 0) throw new CustomError(6, 404, 'Category not found');
  return res.status(200).json({ success: true });
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  const result = await Category.delete(id);
  if (result === 0) throw new CustomError(6, 404, 'Category not found');
  return res.status(200).json({ success: true });
};

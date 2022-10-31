const Category = require('../../../repositories/category.repo');

const { CustomError } = require('../../../utils/errorHandling');

exports.getAllCategory = async (req, res, next) => {
  const categories = await Category.getList();
  res.status(200).json({ success: true, data: categories });
};

exports.getCategory = async (req, res, next) => {
  const category = await Category.getById(req.params.id);
  if (!category) {
    throw new CustomError(6, 404, 'Category not found');
  }
  return res.status(200).json({ success: true, data: category });
};

exports.addCategory = async (req, res, next) => {
  const category = await Category.create(req.body);
  return res.status(200).json({ success: true, data: category });
};

exports.updateCategory = async (req, res, next) => {
  const category = await Category.update(req.params.id, req.body);
  return res.status(200).json({ success: true, data: category });
};

exports.deleteCategory = async (req, res, next) => {};

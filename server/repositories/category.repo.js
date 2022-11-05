const CategoryModel = require('../models/category.model');

class CategoryRepo {
  /**
   * Get list Categories
   * @returns Categories model
   */
  async getList() {
    const categories = await CategoryModel.findAll();
    return categories;
  }

  async getById(id) {
    const category = await CategoryModel.findByPk(id);
    return category;
  }
  async getByName(name) {
    const category = await CategoryModel.findOne({
      where: {
        name,
      },
    });
    return category;
  }
  async create(category) {
    const newCategory = await CategoryModel.create(category);
    return newCategory;
  }
  async update(category) {
    const updatedCategory = await CategoryModel.update(category, {
      where: { id: category.id },
    });
    return updatedCategory;
  }
  async delete(id) {
    const deletedCategory = await CategoryModel.destroy({
      where: { id },
    });
    return deletedCategory;
  }
}

module.exports = new CategoryRepo();

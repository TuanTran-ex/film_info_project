const pool = require('../models/connectDB');
const Category = require('../models/category.model');
const query = require('../models/query');
const { CustomError } = require('../utils/errorHandling');
const CategoryModel = require('../models/category.model');

class CategoryRepo {
  /**
   * Get list Categories
   * @returns Categories model
   */
  async getListCategories() {
    // const categories = [];
    // const [rows, fields] = await pool.query(query.qGetAllCategory());

    // if (!rows) {
    //   throw new CustomError(6, 400, 'Categories is not exists');
    // }
    // rows.map((item) => {
    //   const category = new Category(item);
    //   categories.push(category);
    // });
    const categories = await CategoryModel.findAll();
    return categories;
  }
}

module.exports = new CategoryRepo();

const pool = require('../models/connectDB');
const query = require('../models/query');
const { CustomError } = require('../utils/errorHandling');

const CountryModel = require('../models/country.model');

class CountryRepo {
  /**
   * Get list Country
   * @returns Country model list
   */
  async getListCountry() {
    const countries = CountryModel.findAll();
    return countries;
  }
}

module.exports = new CountryRepo();

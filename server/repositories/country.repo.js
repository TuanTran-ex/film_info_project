const pool = require('../models/connectDB');
const query = require('../models/query');
const { CustomError } = require('../utils/errorHandling');

const Country = require('../models/country.model');

class CountryRepo {
  /**
   * Get list Country
   * @returns Country model list
   */
  async getListCountry() {
    const countries = [];
    const [rows, fields] = await pool.query(query.qGetAllCountry());
    if (!rows) {
      throw new CustomError(6, 400, 'Country is not exists');
    }
    rows.map((item) => {
      const country = new Country(item);
      countries.push(country);
    });
    return countries;
  }
}

module.exports = new CountryRepo();

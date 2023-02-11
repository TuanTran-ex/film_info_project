const CountryModel = require('../models/country.model');

class CountryRepo {
  /**
   * Get list Country
   * @returns Country model list
   */
  async getList() {
    const countries = CountryModel.findAll();
    return countries;
  }
  async getById(id) {
    const country = await CountryModel.findByPk(id);
    return country;
  }
  async getByName(name) {
    const country = await CountryModel.findOne({
      where: {
        name,
      },
    });
    return country;
  }
  async create(country) {
    const newCountry = await CountryModel.create(country);
    return newCountry;
  }
  async update(country) {
    const updatedCountry = await CountryModel.update(country, {
      where: { id: country.id },
    });
    return updatedCountry;
  }
  async delete(id) {
    const deletedCountry = await CountryModel.destroy({ where: { id } });
    return deletedCountry;
  }
}

module.exports = new CountryRepo();

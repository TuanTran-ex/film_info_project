const { Op } = require('sequelize');
const Account = require('../models/account.model');
const FilmCollection = require('../models/film_collection.model');

class AccountRepo {
  async getList() {
    const accounts = await Account.findAll();
    return accounts;
  }
  async getById(id) {
    const account = await Account.findByPk(id);
    return account;
  }
  async getByUserName(username) {
    const account = await Account.findOne({ where: { username } });
    return account;
  }
  async getByUserNameOrEmail(username, email) {
    const account = await Account.findOne({
      where: { [Op.or]: [{ username }, { email }] },
    });
    return account;
  }
  async create(data) {
    const newAccount = await Account.create(data);
    return newAccount;
  }
  async update(id, data) {
    const account = await Account.update(data, { where: { id } });
    return account;
  }
  async delete(id) {
    const res = await Account.destroy({ where: { id } });
    if (!res) throw new CustomError(6, 404, 'Account not found');
    return res;
  }
  async addFilmToCollection(filmId, accountId, type) {
    try {
      const detailCollections = await FilmCollection.create({
        filmId,
        accountId,
        type,
      });
      return detailCollections;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new AccountRepo();

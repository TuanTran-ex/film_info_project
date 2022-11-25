const { Op } = require('sequelize');
const BlackListToken = require('../models/blackListToken.model');
const { CustomError } = require('../utils/errorHandling');

class BlackListTokenRepo {
  async getList() {
    const list = await BlackListToken.findAll();
    return list;
  }

  async findById(id) {
    const blackListToken = await BlackListToken.findByPk(id);
    if (!blackListToken)
      throw new CustomError(6, 404, 'BlackListToken not found');
    return blackListToken;
  }

  async findByToken(token) {
    const blackListToken = await BlackListToken.findOne({
      where: { token: { [Op.substring]: token } },
    });
    return blackListToken;
  }

  async create(token, iat) {
    const btoken = await this.findByToken(token);
    if (!btoken) {
      const blackListToken = await BlackListToken.create({ token, iat });
      return blackListToken;
    } else return null;
  }

  async delete(id) {
    const res = await BlackListToken.destroy({ where: { id } });
    if (!res) throw new CustomError(6, 404, 'Black list Token not found');
    return res;
  }
}

module.exports = new BlackListTokenRepo();

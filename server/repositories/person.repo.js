const PersonModel = require('../models/person.model');

class PersonRepo {
  async getList() {
    const listPerson = await PersonModel.getAll();
    return listPerson;
  }
  async getById(id) {
    const person = await PersonModel.findByPk(id);
    return person;
  }
  async getByName(name) {
    const person = await PersonModel.findOne({ where: { name } });
    return person;
  }
  async create(person) {
    const newPerson = await PersonModel.create(person);
    return newPerson;
  }
  async update(person) {
    const updatedPerson = await PersonModel.update(person, {
      where: { id: person.id },
    });
    return updatedPerson;
  }
  async delete(id) {
    const deletedPerson = await PersonModel.destroy({ where: { id } });
    return deletedPerson;
  }
}

module.exports = new PersonRepo();

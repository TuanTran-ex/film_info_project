class Country {
  constructor({ id, name, updated_at, created_at }) {
    this.id = id;
    this.name = name;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}

module.exports = Country;

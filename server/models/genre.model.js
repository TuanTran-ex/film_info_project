class Genre {
  constructor({ id, name, updated_at, created_at }) {
    this.id = id;
    this.name = name;
    this.createdAt = created_at;
    this.updateAt = updated_at;
  }
}

module.exports = Genre;

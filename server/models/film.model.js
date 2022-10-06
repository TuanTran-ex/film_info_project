// Domain model for Film
class Film {
  constructor({
    id,
    name,
    englishName,
    image,
    backgroundImage,
    time,
    premierDate,
    description,
    countryId,
    countryName,
    imdbPoint,
    categoryId,
    categoryName,
    genreId,
    genreName,
    isProcessing,
    created_at,
    updated_at,
  }) {
    this.id = id;
    this.name = name;
    this.englishName = englishName;
    this.image = image;
    this.backgroundImage = backgroundImage;
    this.time = time;
    this.premierDate = new Date(premierDate).toLocaleDateString('en-US');
    this.description = description;
    this.imdbPoint = imdbPoint;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.genreId = genreId ? [genreId] : [];
    this.genreName = genreName ? [genreName] : [];
    this.countryId = countryId;
    this.countryName = countryName;
    this.isProcessing = isProcessing;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}

module.exports = Film;

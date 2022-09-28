// Domain model for Film
class Film {
  constructor({
    id,
    name,
    englishName,
    image,
    backgroundImage,
    time,
    premierDay,
    description,
    countryOfProduction,
    imdbPoint,
    categoryId,
    categoryName,
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
    this.premierDay = premierDay;
    this.description = description;
    this.countryOfProduction = countryOfProduction;
    this.imdbPoint = imdbPoint;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.isProcessing = isProcessing;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}

module.exports = Film;

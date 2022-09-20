// Domain model for Film
class Film {
  constructor(
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
    isProcessing,
    createdAt,
    updateAt
  ) {
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
    this.isProcessing = isProcessing;
    this.createdAt = createdAt;
    this.updateAt = updateAt;
  }
}

module.exports = Film;

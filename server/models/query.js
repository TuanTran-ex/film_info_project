// Category
exports.qGetAllCategory = () => {
  return `SELECT * FROM Category`;
};

// Genre
exports.qGetAllGenre = () => {
  return `SELECT * FROM Genre`;
};

// Film
exports.qGetAllFilm = () => {
  return `SELECT * FROM Film`;
};

// Country
exports.qGetAllCountry = () => {
  return `SELECT * FROM Country`;
};

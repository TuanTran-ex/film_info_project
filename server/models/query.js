// Category
exports.qGetAllCategory = () => {
  return `SELECT * FROM Category`;
};

// Film
exports.qGetAllFilm = () => {
  return `SELECT id, name FROM Film`;
};

// Category
/**
 *
 * @returns string query
 */
exports.qGetAllCategory = () => {
  return `SELECT id, name FROM Category`;
};

// Genre
/**
 *
 * @returns string query
 */
exports.qGetAllGenre = () => {
  return `SELECT id, name FROM Genre`;
};

// Film
/**
 * Get list Film
 * @param {array<string>} column List field select in query
 * @returns string
 */
exports.qGetAllFilm = (column) => {
  if (!column)
    return `SELECT * FROM Film JOIN Category ON Film.categoryId = Category.id ORDER BY premierDate DESC LIMIT 0,200`;
  else {
    column = column.map((item) => 'Film.' + item);
    strCol = column.toString();
    return `SELECT ${strCol}, Category.id AS categoryId, Category.name AS categoryName 
    FROM Film JOIN Category WHERE Film.categoryId = Category.id 
    ORDER BY premierDate DESC LIMIT 0,200`;
  }
};

/**
 *
 * @param {int} categoryId List field select in query
 * @param {int} page
 * @param {int} perPage item in one page
 * @returns string query
 */
exports.qGetFilmWithPaginateBrowerPage = (
  categoryId,
  page = 1,
  perPage = 15
) => {
  const query = `CALL proc_Film_GetAll(${
    !categoryId ? 'NULL' : categoryId
  }, ${page}, ${perPage});`;
  return query;
};

/**
 * Get list Film with Category id
 * @param {array} column
 * @param {string} categoryId
 * @returns string
 */
exports.qGetListFilmWithCategory = (column, categoryId) => {
  if (!categoryId || !params) return `SELECT * FROM Film`;
  else {
    strCol = column.toString();
    return `SELECT ${strCol} FROM Film WHERE categoryId = ${categoryId}`;
  }
};

/**
 *
 * @param {array} column
 * @returns string
 */
exports.qGetListFilmProcessing = (column) => {
  if (!column)
    return `SELECT * FROM Film WHERE isProcessing = 1 ORDER BY created_at DESC LIMIT 0, 15`;
  else {
    strCol = column.toString();
    return `SELECT ${strCol} FROM Film WHERE isProcessing = 1 ORDER BY created_at DESC LIMIT 0, 15`;
  }
};

/**
 * String query get Genre with Film by FilmId
 * @param {int} filmId
 * @returns string query
 */
exports.qGetGenreFilm = (filmId) => {
  return `SELECT Genre.id, Genre.name FROM Film JOIN GenreFilm ON Film.id = GenreFilm.filmId JOIN Genre
  ON Genre.id = GenreFilm.genreId WHERE Film.id = ${filmId}`;
};

// Country
/**
 *
 * @returns string query
 */
exports.qGetAllCountry = () => {
  return `SELECT id, name FROM Country`;
};

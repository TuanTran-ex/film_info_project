const e = require('express');

// Category
exports.qGetAllCategory = () => {
  return `SELECT * FROM Category`;
};

// Genre
exports.qGetAllGenre = () => {
  return `SELECT * FROM Genre`;
};

// Film
/**
 * Get list Film
 * @param {array} column List field select in query
 * @returns string
 */
exports.qGetAllFilmHomePage = (column) => {
  if (!column)
    return `SELECT * FROM Film JOIN Category WHERE Film.categoryId = Category.id ORDER BY premierDate DESC LIMIT 0,200`;
  else {
    column = column.map((item) => 'Film.' + item);
    strCol = column.toString();
    return `SELECT ${strCol}, premierDate, isProcessing, Category.id AS categoryId, Category.name AS categoryName 
    FROM Film JOIN Category WHERE Film.categoryId = Category.id 
    ORDER BY premierDate DESC LIMIT 0,200`;
  }
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

// Country
exports.qGetAllCountry = () => {
  return `SELECT * FROM Country`;
};

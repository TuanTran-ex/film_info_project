const express = require('express');
const {
  getHomePageData,
  getBrowserPageData,
  searchFilm,
  getFilmDetailsPageData,
} = require('./controllers/page.controller');

const { tryCatchFunc } = require('../../utils/errorHandling');

const router = express.Router();

router.get('/home', tryCatchFunc(getHomePageData));
router.get('/browse', tryCatchFunc(getBrowserPageData));
router.get('/search', tryCatchFunc(searchFilm));
router.get('/movie-details/:id', tryCatchFunc(getFilmDetailsPageData));

module.exports = router;

const express = require('express');
const {
  getHomePageData,
  getBrowserPageData,
  searchFilm,
} = require('./controllers/page.controller');

const { tryCatchFunc } = require('../../utils/errorHandling');

const router = express.Router();

router.get('/home', tryCatchFunc(getHomePageData));
router.get('/browse', tryCatchFunc(getBrowserPageData));
router.get('/search', tryCatchFunc(searchFilm));

module.exports = router;

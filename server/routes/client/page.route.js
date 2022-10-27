const express = require('express');
const {
  getHomePageData,
  getBrowserPageData,
  searchFilm,
} = require('./controllers/page.controller');

const router = express.Router();

router.get('/home', getHomePageData);
router.get('/browse', getBrowserPageData);
router.get('/search', searchFilm);

module.exports = router;

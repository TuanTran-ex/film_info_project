const express = require('express');
const {
  getHomePageData,
  getBrowserPageData,
} = require('./controllers/page.controller');

const router = express.Router();

router.get('/home', getHomePageData);
router.get('/browser', getBrowserPageData);

module.exports = router;

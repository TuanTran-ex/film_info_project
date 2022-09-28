const express = require('express');
const { index } = require('./controllers/film.controller');
const router = express.Router();

router.get('/', index);

module.exports = router;

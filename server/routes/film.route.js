const express = require('express');
const { getListFilm } = require('./controllers/film.controller');

const router = express.Router();

router.get('/', getListFilm);

module.exports = router;

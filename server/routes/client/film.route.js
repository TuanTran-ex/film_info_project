const express = require('express');
const { getListFilm } = require('./controllers/film.controller');
const { tryCatchFunc } = require('../../utils/errorHandling');
const router = express.Router();

router.get('/', tryCatchFunc(getListFilm));

module.exports = router;

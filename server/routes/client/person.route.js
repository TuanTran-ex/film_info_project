const express = require('express');
const { get } = require('./controllers/person.controller');

const { tryCatchFunc } = require('../../utils/errorHandling');

const router = express.Router();

router.get('/:id', tryCatchFunc(get));

module.exports = router;

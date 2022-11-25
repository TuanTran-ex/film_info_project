const express = require('express');
const CountryController = require('./controllers/country.controller');

const { tryCatchFunc } = require('../../utils/errorHandling');

const router = express.Router();

router.get('/', tryCatchFunc(CountryController.getAll));
router.get('/:id', tryCatchFunc(CountryController.get));
router.post('/', tryCatchFunc(CountryController.create));
router.patch('/:id', tryCatchFunc(CountryController.update));
router.delete('/:id', tryCatchFunc(CountryController.delete));

module.exports = router;

const express = require('express');
const { index } = require('./controllers/person.controller');
const router = express.Router();

router.get('/', index);

module.exports = router;

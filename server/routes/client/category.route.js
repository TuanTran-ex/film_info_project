const express = require('express');
const CategoryController = require('./controllers/category.controller');
const { tryCatchFunc } = require('../../utils/errorHandling');

const router = express.Router();

router.get('/', tryCatchFunc(CategoryController.getAll));
router.get('/:id', tryCatchFunc(CategoryController.get));
router.post('/', tryCatchFunc(CategoryController.create));
router.patch('/:id', tryCatchFunc(CategoryController.update));
router.delete('/:id', tryCatchFunc(CategoryController.delete));

module.exports = router;
